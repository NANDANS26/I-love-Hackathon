import React from 'react';
import { Tab } from '@headlessui/react';
import { BookingType } from '../../types/booking';

interface BookingTabsProps {
  categories: { label: string; type?: BookingType }[];
  children: React.ReactNode;
}

export const BookingTabs: React.FC<BookingTabsProps> = ({ categories, children }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 p-1">
        {categories.map((category) => (
          <Tab
            key={category.label}
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
               ${
                 selected
                   ? 'bg-white text-teal-700 shadow'
                   : 'text-gray-600 hover:bg-white/[0.12] hover:text-teal-600'
               }`
            }
          >
            {category.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>{children}</Tab.Panels>
    </Tab.Group>
  );
};