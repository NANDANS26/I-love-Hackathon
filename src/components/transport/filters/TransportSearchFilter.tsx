import React from 'react';
import { Search, Calendar } from 'lucide-react';
import { Card } from '../../ui/Card';

interface TransportSearchFilterProps {
  onSearch: (filters: {
    date?: string;
    route?: string;
  }) => void;
}

export const TransportSearchFilter: React.FC<TransportSearchFilterProps> = ({
  onSearch
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSearch({
      date: formData.get('date') as string,
      route: formData.get('route') as string
    });
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="route"
              placeholder="Search routes..."
              className="pl-10 w-full p-2.5 border rounded-lg"
            />
          </div>
        </div>
        <div className="w-48">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              name="date"
              className="pl-10 w-full p-2.5 border rounded-lg"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      </form>
    </Card>
  );
};