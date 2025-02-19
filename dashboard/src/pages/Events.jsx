import React from 'react';
import { Calendar } from 'lucide-react';

export const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Community Meetup',
      date: '2024-03-25',
      time: '14:00',
      description: 'Join us for our monthly community meetup where we discuss the latest tech trends.',
      location: 'Virtual',
    },
    {
      id: 2,
      title: 'Tech Workshop',
      date: '2024-04-01',
      time: '10:00',
      description: 'Learn about the latest developments in web development and cloud computing.',
      location: 'Virtual',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
      <div className="flex items-center mb-6">
        <Calendar className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h1>
      </div>

      <div className="grid gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};