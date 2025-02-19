import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Dashboard } from './pages/Dashboard';
import { ThreadList } from './pages/ThreadList';
import { ThreadDetail } from './pages/ThreadDetail';
import { Profile } from './pages/Profile';
import { Events } from './pages/Events';
import { AiChat } from './pages/AiChat';
import { Sidebar } from './components/Sidebar';
import './App.css'
// import { ThemeToggle } from './components/ThemeToggle';

function App() {
  // const { isDark } = ThemeToggle();

  return (
    <div className={`min-h-screen `}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Router>
          <div className="flex">
            <Navbar />
            <main className="flex-1 ml-64 mr-80 p-4">
              <Routes>
                <Route path="/" element={<ThreadList />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/ai-chat" element={<AiChat />} /> 
                <Route path="/Sidebar" element={<Sidebar/>} />
                <Route path="/thread/:id" element={<ThreadDetail />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;