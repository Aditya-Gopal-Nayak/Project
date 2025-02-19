import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Home, LayoutDashboard, Calendar, Bot,LogOut,Bell } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';

export const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/events', label: 'Upcoming Events', icon: Calendar },
    { path: '/ai-chat', label: 'AI Chat', icon: Bot },
    
  ];

  const handleLogout = () => {
    alert('Logging out');
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-10">
  <div className="flex items-center justify-between p-4">
    <Link to="/" className="flex items-center space-x-2">
      <span className="text-xl pl-4 font-bold text-gray-900 dark:text-white">HiveMind</span>
    </Link>
    
    <div className="flex space-x-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}>
            
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <button
              onClick={toggleSidebar} 
              className="flex items-center space-x-2 p-2 rounded-lg text-gray-900 hover:bg-indigo-50 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Bell className="w-5 h-5" />
              <span>Updates</span>
            </button>
            {isSidebarVisible && <Sidebar />}
      
    </div>

    

    <div className="flex items-center space-x-4">
      <Link
        to="/profile"
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Profile
      </Link>
      <ThemeToggle/>
      <button
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 rounded-lg text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
    </div>
  </div>
</nav>

  );
};