import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  User, 
  MapPin, 
  Calendar, 
  Globe,
  Phone,
  Camera,
  Briefcase
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useUser } from '../context/UserContext';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    city: '',
    country: '',
    phone: '',
    dateOfBirth: '',
    occupation: '',
    bio: '',
    interests: [] as string[],
    profileImage: ''
  });

  const interests = [
    'Adventure Travel',
    'Cultural Experiences',
    'Food & Cuisine',
    'Nature & Wildlife',
    'Beach Holidays',
    'City Breaks',
    'Luxury Travel',
    'Budget Travel'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: formData.name || 'Guest User',
      email: formData.email,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      occupation: formData.occupation,
      bio: formData.bio,
      interests: formData.interests,
      profileImage: formData.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}`
    });
    navigate('/profile');
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            {/* Left side - Image */}
            <div className="md:w-1/2 bg-cover bg-center hidden md:block"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba')"
              }}
            >
              <div className="h-full bg-teal-600 bg-opacity-90 p-12 flex flex-col justify-center">
                <h2 className="text-white text-4xl font-bold mb-6">
                  {isSignUp ? 'Join Our Community' : 'Welcome Back'}
                </h2>
                <p className="text-white/90 text-lg">
                  {isSignUp
                    ? 'Create an account to start your journey with blockchain-powered travel experiences.'
                    : 'Sign in to access your personalized travel dashboard and rewards.'}
                </p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignUp ? (
                  <>
                    {/* Sign Up Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              name: e.target.value
                            }))}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              email: e.target.value
                            }))}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="password"
                            required
                            placeholder="Create a password"
                            className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                            value={formData.password}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              password: e.target.value
                            }))}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              phone: e.target.value
                            }))}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date of Birth
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="date"
                            className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                            value={formData.dateOfBirth}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              dateOfBirth: e.target.value
                            }))}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            placeholder="Enter your address"
                            className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                            value={formData.address}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              address: e.target.value
                            }))}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            placeholder="Your city"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                            value={formData.city}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              city: e.target.value
                            }))}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Country
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              placeholder="Your country"
                              className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                              value={formData.country}
                              onChange={(e) => setFormData(prev => ({
                                ...prev,
                                country: e.target.value
                              }))}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Occupation
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            placeholder="Your occupation"
                            className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                            value={formData.occupation}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              occupation: e.target.value
                            }))}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          placeholder="Tell us about yourself..."
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                          rows={3}
                          value={formData.bio}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            bio: e.target.value
                          }))}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Travel Interests
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {interests.map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleInterest(interest)}
                              className={`px-3 py-1 rounded-full text-sm ${
                                formData.interests.includes(interest)
                                  ? 'bg-teal-100 text-teal-800'
                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                              }`}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Sign In Fields */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            email: e.target.value
                          }))}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="password"
                          required
                          placeholder="Enter your password"
                          className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                          value={formData.password}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            password: e.target.value
                          }))}
                        />
                      </div>
                    </div>
                  </>
                )}

                <Button type="submit" variant="primary" className="w-full py-2.5">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </Button>

                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-sm text-teal-600 hover:underline"
                  >
                    {isSignUp 
                      ? 'Already have an account? Sign in' 
                      : "Don't have an account? Sign up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};