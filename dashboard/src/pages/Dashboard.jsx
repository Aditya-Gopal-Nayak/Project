import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, MessageSquare, Users } from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    { label: 'Total Threads', value: '234', icon: MessageSquare },
    { label: 'Active Users', value: '1.2k', icon: Users },
    { label: 'Daily Posts', value: '89', icon: BarChart2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                <stat.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                <Link to={`/thread/${i}`} className="block hover:bg-gray-50 dark:hover:bg-gray-700 -m-2 p-2 rounded">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">New thread: Getting started with React</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Posted by John Doe • 2 hours ago</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};