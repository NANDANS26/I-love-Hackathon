import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import {
  User,
  MapPin,
  Calendar,
  Globe,
  Star,
  Bookmark,
  Clock
} from 'lucide-react';
import { useUser } from '../context/UserContext';

export const Profile: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>Please sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-6">
          <div className="text-center mb-6">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
                alt={user.name}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>

          {(user.age || user.address) && (
            <div className="border-t border-gray-200 pt-6">
              {user.age && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900">Age</h3>
                  <p className="text-gray-600">{user.age} years</p>
                </div>
              )}
              {user.address && (
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">{user.address}</p>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};