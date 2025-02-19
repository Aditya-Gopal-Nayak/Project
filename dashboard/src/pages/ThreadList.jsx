import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Eye } from 'lucide-react';

export const ThreadList = () => {
  const threads = [
    {
      id: '1',
      title: 'Getting Started with React',
      author: { name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces' },
      replies: 23,
      views: 156,
      category: 'React',
      createdAt: '2 hours ago'
    },
    {
      id: '2',
      title: 'Best Practices for State Management',
      author: { name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=faces' },
      replies: 15,
      views: 98,
      category: 'State Management',
      createdAt: '3 hours ago'
    },
    {
      id: '3',
      title: 'Understanding React Hooks',
      author: { name: 'Mike Johnson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces' },
      replies: 42,
      views: 234,
      category: 'Hooks',
      createdAt: '5 hours ago'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Discussions</h1>
        <Link
          to="/new-thread"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          New Thread
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        {threads.map((thread) => (
          <Link
            key={thread.id}
            to={`/thread/${thread.id}`}
            className="block border-b dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="p-6">
              <div className="flex items-center space-x-3">
                <img
                  src={thread.author.avatar}
                  alt={thread.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{thread.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{thread.author.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{thread.createdAt}</span>
                    <span className="text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">
                      {thread.category}
                      
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{thread.replies}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{thread.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};