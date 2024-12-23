import React from 'react';
import { formatCurrency } from '../../utils/currency';
import type { BookingDetails } from '../../types/booking';

interface BookingCostBreakdownProps {
  price: number;
  bookingDetails: BookingDetails;
}

export const BookingCostBreakdown: React.FC<BookingCostBreakdownProps> = ({
  price,
  bookingDetails
}) => {
  const calculateTotalCost = () => {
    let baseCost = price * bookingDetails.guests;
    const activityCost = bookingDetails.activities.length * 2000;
    const guideCost = bookingDetails.guideRequired ? 5000 : 0;
    const insuranceCost = 1500 * bookingDetails.guests;
    const taxes = (baseCost + activityCost + guideCost + insuranceCost) * 0.18;
    
    return {
      baseCost,
      activityCost,
      guideCost,
      insuranceCost,
      taxes,
      total: baseCost + activityCost + guideCost + insuranceCost + taxes
    };
  };

  const costs = calculateTotalCost();

  return (
    <div className="border-t pt-4">
      <h3 className="font-medium text-gray-900 mb-4">Cost Breakdown</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Base Price ({bookingDetails.guests} guests)</span>
          <span>{formatCurrency(costs.baseCost)}</span>
        </div>
        {bookingDetails.activities.length > 0 && (
          <div className="flex justify-between">
            <span>Activities ({bookingDetails.activities.length})</span>
            <span>{formatCurrency(costs.activityCost)}</span>
          </div>
        )}
        {bookingDetails.guideRequired && (
          <div className="flex justify-between">
            <span>Guide Service</span>
            <span>{formatCurrency(costs.guideCost)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Travel Insurance</span>
          <span>{formatCurrency(costs.insuranceCost)}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes & Fees</span>
          <span>{formatCurrency(costs.taxes)}</span>
        </div>
        <div className="flex justify-between font-bold pt-2 border-t">
          <span>Total Amount</span>
          <span>{formatCurrency(costs.total)}</span>
        </div>
      </div>
    </div>
  );
};