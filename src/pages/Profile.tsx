import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import {
  User,
  MapPin,
  Calendar,
  Globe,
  Phone,
  Mail,
  Briefcase,
  Heart,
  BookOpen,
  Settings
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { Button } from '../components/ui/Button';
import { BookingsSection } from '../components/profile/BookingsSection';
import { ProfileStats } from '../components/profile/ProfileStats';
import { BookingTimeline } from '../components/profile/BookingTimeline';

export const Profile: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'settings'>('profile');

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>Please sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  const mockStats = {
    placesVisited: 12,
    countriesVisited: 5,
    totalTrips: 15,
    upcomingTrips: 2,
    reviewsCount: 8,
    memberSince: '2023',
    rewardPoints: 1250,
    travelRank: 'Gold Explorer'
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl" />
            <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
              <img
                src={user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
                alt={user.name}
                className="w-32 h-32 rounded-xl border-4 border-white shadow-lg"
              />
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                <p className="text-white/90">{user.email}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8 pt-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'profile'
                ? 'bg-teal-50 text-teal-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'bookings'
                ? 'bg-teal-50 text-teal-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>My Bookings</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'settings'
                ? 'bg-teal-50 text-teal-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="space-y-8">
            <ProfileStats stats={mockStats} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-6">Personal Information</h3>
                  <div className="space-y-4">
                    {user.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{user.phone}</span>
                      </div>
                    )}
                    
                    {user.address && (
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{user.address}</span>
                      </div>
                    )}

                    {user.city && user.country && (
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{user.city}, {user.country}</span>
                      </div>
                    )}

                    {user.dateOfBirth && (
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">
                          {new Date(user.dateOfBirth).toLocaleDateString()}
                        </span>
                      </div>
                    )}

                    {user.occupation && (
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{user.occupation}</span>
                      </div>
                    )}
                  </div>
                </Card>

                {user.interests && user.interests.length > 0 && (
                  <Card className="p-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Travel Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {user.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </Card>
                )}
              </div>

              <div className="lg:col-span-2">
                <BookingTimeline bookings={[]} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <BookingsSection userId={user.email} />
        )}

        {activeTab === 'settings' && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Account Settings</h3>
            {/* Add settings content here */}
          </Card>
        )}
      </div>
    </div>
  );
};