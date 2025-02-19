import React, { useState } from 'react';
import { Bell, Award,MessageSquare } from 'lucide-react';

export const Sidebar = () => {
  const [updateText, setUpdateText] = useState('');
  
  const badges = [
    { name: 'Top Contributor', description: 'Created 100+ valuable posts', icon: '🏆' },
    { name: 'Active User', description: 'Logged in for 30 consecutive days', icon: '⭐' },
    { name: 'Problem Solver', description: 'Helped resolve 50+ discussions', icon: '💡' },
    { name: 'Early Adopter', description: 'Joined during beta phase', icon: '🚀' },
  ];

  const updates = [
    { id: 1, text: 'New feature released: AI Chat Integration', time: '2h ago' },
    { id: 2, text: 'Community milestone: 10,000 members!', time: '5h ago' },
    { id: 3, text: 'Upcoming maintenance scheduled', time: '1d ago' },
  ];

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (updateText.trim()) {
      setUpdateText('');
    }
  };

  return (
    <div className="fixed pt-20 right-60">
    <aside className="w-80 max-h-screen bg-white dark:bg-gray-800 shadow-md p-6 overflow-y-auto z-10">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Bell className="w-5 h-5 mr-2" />
          Updates
        </h2>
        <div className="space-y-4 mb-4">
          {updates.map((update) => (
            <div key={update.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">{update.text}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400">{update.time}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleUpdateSubmit} className="mt-4">
          <input
            type="text"
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            placeholder="Share an update..."
            className="w-full p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </form>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2" />
          Badges
        </h2>
        <div className="grid gap-4">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-start space-x-3"
            >
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{badge.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
    </div>
  );
};