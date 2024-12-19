import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface ComparisonModalProps {
  items: any[];
  onClose: () => void;
  type: 'destination' | 'restaurant' | 'vehicle';
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  items,
  onClose,
  type
}) => {
  const getComparisonFields = () => {
    switch (type) {
      case 'destination':
        return ['rating', 'ecoCertified', 'features'];
      case 'restaurant':
        return ['rating', 'priceRange', 'cuisine', 'features'];
      case 'vehicle':
        return ['price', 'seats', 'ecoFriendly'];
      default:
        return [];
    }
  };

  const fields = getComparisonFields();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Compare {type}s</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="space-y-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              
              {fields.map((field) => (
                <div key={field} className="flex justify-between">
                  <span className="text-gray-600 capitalize">
                    {field.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="font-medium">
                    {typeof item[field] === 'boolean'
                      ? item[field]
                        ? 'Yes'
                        : 'No'
                      : Array.isArray(item[field])
                      ? item[field].join(', ')
                      : item[field]}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};