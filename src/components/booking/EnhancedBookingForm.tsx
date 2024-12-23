import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import {
  Users,
  Calendar,
  Globe,
  Camera,
  Clock,
  MessageSquare,
  CreditCard
} from 'lucide-react';

interface EnhancedBookingFormProps {
  onSubmit: (formData: any) => void;
  onClose: () => void;
}

export const EnhancedBookingForm: React.FC<EnhancedBookingFormProps> = ({
  onSubmit,
  onClose
}) => {
  const [formData, setFormData] = useState({
    visitDate: '',
    numberOfAdults: 1,
    numberOfChildren: 0,
    preferredTime: '',
    guideRequired: false,
    languagePreference: '',
    photographyPermit: false,
    specialRequests: '',
    dietaryRestrictions: '',
    emergencyContact: '',
    insuranceDetails: '',
    paymentMethod: 'card'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visit Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                required
                value={formData.visitDate}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  visitDate: e.target.value
                }))}
                className="pl-10 w-full p-2.5 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  preferredTime: e.target.value
                }))}
                className="pl-10 w-full p-2.5 border rounded-lg"
              >
                <option value="">Select time</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 8 PM)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Adults
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                min="1"
                required
                value={formData.numberOfAdults}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  numberOfAdults: parseInt(e.target.value)
                }))}
                className="pl-10 w-full p-2.5 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Children
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                min="0"
                value={formData.numberOfChildren}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  numberOfChildren: parseInt(e.target.value)
                }))}
                className="pl-10 w-full p-2.5 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="guideRequired"
              checked={formData.guideRequired}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                guideRequired: e.target.checked
              }))}
              className="rounded border-gray-300"
            />
            <label htmlFor="guideRequired" className="text-sm text-gray-700">
              Request a Guide
            </label>
          </div>

          {formData.guideRequired && (
            <div className="ml-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Language
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={formData.languagePreference}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    languagePreference: e.target.value
                  }))}
                  className="pl-10 w-full p-2.5 border rounded-lg"
                >
                  <option value="">Select language</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="local">Local Language</option>
                </select>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="photographyPermit"
              checked={formData.photographyPermit}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                photographyPermit: e.target.checked
              }))}
              className="rounded border-gray-300"
            />
            <label htmlFor="photographyPermit" className="text-sm text-gray-700">
              Photography Permit Required
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" />
            <textarea
              value={formData.specialRequests}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                specialRequests: e.target.value
              }))}
              className="pl-10 w-full p-2.5 border rounded-lg"
              rows={3}
              placeholder="Any special requirements or requests?"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className={`p-3 border rounded-lg flex items-center justify-center ${
                formData.paymentMethod === 'card' ? 'border-teal-500 bg-teal-50' : ''
              }`}
              onClick={() => setFormData(prev => ({
                ...prev,
                paymentMethod: 'card'
              }))}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              <span>Card</span>
            </button>
            <button
              type="button"
              className={`p-3 border rounded-lg flex items-center justify-center ${
                formData.paymentMethod === 'token' ? 'border-teal-500 bg-teal-50' : ''
              }`}
              onClick={() => setFormData(prev => ({
                ...prev,
                paymentMethod: 'token'
              }))}
            >
              <Globe className="w-4 h-4 mr-2" />
              <span>TRV Tokens</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Confirm Booking
          </Button>
        </div>
      </form>
    </Card>
  );
};