import React, { useState } from 'react';
import { Calendar, Users, MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { formatCurrency } from '../../utils/currency';

interface TransportBookingFormProps {
  transportType: 'train' | 'cab';
  basePrice: number;
  onSubmit: (formData: any) => void;
  onClose: () => void;
}

export const TransportBookingForm: React.FC<TransportBookingFormProps> = ({
  transportType,
  basePrice,
  onSubmit,
  onClose
}) => {
  const [formData, setFormData] = useState({
    travelDate: '',
    passengers: 1,
    specialRequests: '',
    class: transportType === 'train' ? 'standard' : ''
  });

  const calculateTotal = () => {
    const passengerCost = basePrice * formData.passengers;
    const classPremium = formData.class === 'premium' ? passengerCost * 0.2 : 0;
    return passengerCost + classPremium;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      totalAmount: calculateTotal()
    });
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Travel Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={formData.travelDate}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                travelDate: e.target.value
              }))}
              className="pl-10 w-full p-2.5 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Passengers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              required
              min="1"
              max="6"
              value={formData.passengers}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                passengers: parseInt(e.target.value)
              }))}
              className="pl-10 w-full p-2.5 border rounded-lg"
            />
          </div>
        </div>

        {transportType === 'train' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Class
            </label>
            <select
              value={formData.class}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                class: e.target.value
              }))}
              className="w-full p-2.5 border rounded-lg"
            >
              <option value="standard">Standard</option>
              <option value="premium">Premium (+20%)</option>
            </select>
          </div>
        )}

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
            />
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Total Amount</span>
            <span className="font-semibold text-lg">
              {formatCurrency(calculateTotal())}
            </span>
          </div>
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary">Confirm Booking</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};