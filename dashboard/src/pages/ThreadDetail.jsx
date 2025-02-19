import React from 'react';
import { useParams } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export const ThreadDetail = () => {
  const { id } = useParams();

  const thread = {
    title: 'Getting Started with React',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
    },
    createdAt: '2 hours ago',
    replies: [
      {
        id: '1',
        content: 'Great post! Thanks for sharing.',
        author: {
          name: 'Jane Smith',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=faces'
        },
        createdAt: '1 hour ago'
      }
    ]
  };

  const handleSummary = () => {
    alert("Summarizing thread...");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-8 relative p-6">
        <button
          onClick={handleSummary}
          className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition"
        >
          Summary
        </button>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{thread.title}</h1>
        <div className="flex items-center space-x-3 mb-6">
          <img src={thread.author.avatar} alt={thread.author.name} className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{thread.author.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{thread.createdAt}</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{thread.content}</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Replies</h2>
        {thread.replies.map((reply) => (
          <div key={reply.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img src={reply.author.avatar} alt={reply.author.name} className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{reply.author.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{reply.createdAt}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{reply.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add a reply</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <textarea
            rows={4}
            className="w-full p-3 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Write your reply..."
          />
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Post Reply
          </button>
        </div>
      </div>
    </div>
  );
};
