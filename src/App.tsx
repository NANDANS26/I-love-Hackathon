import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { Hotels } from './pages/Hotels';
import { Restaurants } from './pages/Restaurants';
import { IndianDestinations } from './pages/IndianDestinations';
import { Search } from './pages/Search';
import { Profile } from './pages/Profile';
import { Wallet } from './pages/Wallet';
import { Flights } from './pages/Flights';
import { Transports } from './pages/Transports';
import { TrendingPlaces } from './pages/TrendingPlaces';
import { AuthPage } from './pages/AuthPage';
import { UserProvider, useUser } from './context/UserContext';
import { Footer } from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
};

function AppContent() {
  const { user } = useUser();

  // If there's no user, redirect to auth page
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
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/indian-destinations" element={<IndianDestinations />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transports" element={<Transports />} />
          <Route path="/trending-places" element={<TrendingPlaces />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
    <ThemeProvider>
      <UserProvider>
        <Router>
          <AppContent />
        </Router>
      </UserProvider>
    </ThemeProvider></>
  );
}

export default App;