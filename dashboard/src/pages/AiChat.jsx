import React, { useState } from 'react';
import { Bot, Send, FileText } from 'lucide-react';

export const AiChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', isBot: true },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { id: Date.now(), text: message, isBot: false }]);
    setMessage('');
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-4">
          <Bot className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Chat Assistant</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="h-[600px] flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      msg.isBot
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    <p className={msg.isBot ? 'text-gray-900 dark:text-white' : 'text-white'}>
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};