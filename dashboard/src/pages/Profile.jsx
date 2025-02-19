import React from 'react';
import { User, Mail, MessageSquare, Star, Award } from 'lucide-react';

export const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces',
    joinDate: 'January 2024',
    posts: 45,
    threads: 12,
    reputation: 1250,
    bio: 'Passionate developer and open source contributor'
  };

  const stats = [
    { icon: MessageSquare, label: 'Total Posts', value: user.posts },
    { icon: Star, label: 'Reputation', value: user.reputation },
    { icon: Award, label: 'Achievements', value: '8' }
  ];

  return (
    <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full" />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Joined {user.joinDate}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <stat.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
            <p className="text-gray-700 dark:text-gray-300">{user.bio}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow divide-y dark:divide-gray-700">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Thread Title {i}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Posted 2 days ago</p>
                </div>
                <MessageSquare className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};