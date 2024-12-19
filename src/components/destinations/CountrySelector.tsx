import React from 'react';
import { motion } from 'framer-motion';
import { Country } from '../../types/destinations';

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: string | null;
  onSelect: (countryId: string) => void;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  countries,
  selectedCountry,
  onSelect
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {countries.map((country, index) => (
        <motion.button
          key={country.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          onClick={() => onSelect(country.id)}
          className={`p-4 rounded-xl transition-all ${
            selectedCountry === country.id
              ? 'bg-teal-50 border-2 border-teal-500'
              : 'bg-white border-2 border-gray-100 hover:border-teal-200'
          }`}
        >
          <div className="text-4xl mb-2">{country.flag}</div>
          <h3 className="font-semibold text-gray-900">{country.name}</h3>
          <p className="text-sm text-gray-500">{country.code}</p>
        </motion.button>
      ))}
    </div>
  );
};