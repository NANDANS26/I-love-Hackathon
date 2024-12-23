import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { DestinationDetails } from './pages/DestinationDetails';
import { Hotels } from './pages/Hotels';
import { Restaurants } from './pages/Restaurants';
import { RestaurantDetails } from './pages/RestaurantDetails';
import { Search } from './pages/Search';
import { Profile } from './pages/Profile';
import { Wallet } from './pages/Wallet';
import { Flights } from './pages/Flights';
import { Transports } from './pages/Transports';
import { TrendingPlaces } from './pages/TrendingPlaces';
import { TrendingPlaceDetails } from './pages/TrendingPlaceDetails';
import { AuthPage } from './pages/AuthPage';
import { UserProvider, useUser } from './context/UserContext';
import { BookingProvider } from './context/BookingContext';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const { user } = useUser();

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transports" element={<Transports />} />
          <Route path="/trending-places" element={<TrendingPlaces />} />
          <Route path="/trending-places/:id" element={<TrendingPlaceDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BookingProvider>
          <Router>
            <AppContent />
          </Router>
        </BookingProvider>
      </UserProvider>
    </ThemeProvider>
  );
}