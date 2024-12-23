/*
  # Enhanced Destinations and Bookings Schema

  1. New Tables
    - `destinations`
      - Core destination details
      - Location information
      - Pricing and availability
      - Cultural and historical information
    - `destination_amenities`
      - Available facilities and services
    - `destination_timings`
      - Opening hours and seasonal schedules
    - `bookings`
      - Comprehensive booking details
      - Payment information
      - User preferences
    - `booking_activities`
      - Additional activities booked
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Destinations Table
CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  location_address text NOT NULL,
  location_city text NOT NULL,
  location_state text NOT NULL,
  location_coordinates point NOT NULL,
  nearest_airport text,
  nearest_railway text,
  best_time_to_visit text,
  historical_significance text,
  cultural_importance text,
  eco_certified boolean DEFAULT false,
  entry_fee_adult_indian numeric NOT NULL,
  entry_fee_child_indian numeric NOT NULL,
  entry_fee_adult_foreign numeric NOT NULL,
  entry_fee_child_foreign numeric NOT NULL,
  image_url text NOT NULL,
  rating numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Destination Amenities Table
CREATE TABLE IF NOT EXISTS destination_amenities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id uuid REFERENCES destinations(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  icon text,
  is_free boolean DEFAULT true,
  fee numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Destination Timings Table
CREATE TABLE IF NOT EXISTS destination_timings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id uuid REFERENCES destinations(id) ON DELETE CASCADE,
  day_of_week smallint NOT NULL, -- 0-6 for Sunday-Saturday
  opens_at time NOT NULL,
  closes_at time NOT NULL,
  is_holiday boolean DEFAULT false,
  special_notes text,
  created_at timestamptz DEFAULT now()
);

-- Enhanced Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  destination_id uuid REFERENCES destinations(id) ON DELETE CASCADE,
  booking_date date NOT NULL,
  visit_date date NOT NULL,
  number_of_adults smallint NOT NULL,
  number_of_children smallint DEFAULT 0,
  total_amount numeric NOT NULL,
  payment_status text NOT NULL DEFAULT 'pending',
  payment_method text,
  special_requests text,
  booking_status text NOT NULL DEFAULT 'pending',
  guide_required boolean DEFAULT false,
  language_preference text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Booking Activities Table
CREATE TABLE IF NOT EXISTS booking_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings(id) ON DELETE CASCADE,
  activity_name text NOT NULL,
  activity_date date NOT NULL,
  activity_time time NOT NULL,
  number_of_participants smallint NOT NULL,
  amount numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE destination_amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE destination_timings ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE booking_activities ENABLE ROW LEVEL SECURITY;

-- Policies for destinations and amenities (public read access)
CREATE POLICY "Allow public read access to destinations"
  ON destinations FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to destination amenities"
  ON destination_amenities FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to destination timings"
  ON destination_timings FOR SELECT
  TO public
  USING (true);

-- Policies for bookings (authenticated user access)
CREATE POLICY "Users can view their own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for booking activities
CREATE POLICY "Users can view their own booking activities"
  ON booking_activities FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM bookings 
    WHERE bookings.id = booking_activities.booking_id 
    AND bookings.user_id = auth.uid()
  ));

CREATE POLICY "Users can create activities for their bookings"
  ON booking_activities FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM bookings 
    WHERE bookings.id = booking_activities.booking_id 
    AND bookings.user_id = auth.uid()
  ));