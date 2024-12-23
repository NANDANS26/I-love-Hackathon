import React from 'react';
import { Camera, Activity } from 'lucide-react';
import { Card } from '../ui/Card';

interface PlaceDetailsActivitiesProps {
  thingsToSee: string[];
  activities: string[];
}

export const PlaceDetailsActivities: React.FC<PlaceDetailsActivitiesProps> = ({
  thingsToSee,
  activities
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Camera className="w-5 h-5 mr-2" />
          Things to See
        </h3>
        <ul className="space-y-2">
          {thingsToSee.map((thing) => (
            <li key={thing} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
              {thing}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Activities
        </h3>
        <ul className="space-y-2">
          {activities.map((activity) => (
            <li key={activity} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
              {activity}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};