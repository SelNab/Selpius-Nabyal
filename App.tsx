
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SchoolData from './pages/SchoolData';
import MailIncoming from './pages/MailIncoming';
import MailOutgoing from './pages/MailOutgoing';
import TeacherData from './pages/TeacherData';
import StudentData from './pages/StudentData';
import PPDB from './pages/PPDB';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Attendance from './pages/Attendance';
import Sidebar from './components/Sidebar';
import { DEVELOPER } from './constants';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(Page.DASHBOARD);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case Page.DASHBOARD: return <Dashboard onNavigate={setCurrentPage} />;
      case Page.SCHOOL_DATA: return <SchoolData />;
      case Page.MAIL_INCOMING: return <MailIncoming />;
      case Page.MAIL_OUTGOING: return <MailOutgoing />;
      case Page.TEACHER_DATA: return <TeacherData />;
      case Page.STUDENT_DATA: return <StudentData />;
      case Page.PPDB: return <PPDB />;
      case Page.INVENTORY: return <Inventory />;
      case Page.REPORTS: return <Reports />;
      case Page.SETTINGS: return <Settings />;
      case Page.ATTENDANCE: return <Attendance />;
      default: return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-sky-100 overflow-hidden font-sans text-gray-900">
      <Sidebar 
        activePage={currentPage} 
        onNavigate={setCurrentPage} 
        onLogout={() => setIsLoggedIn(false)} 
      />
      <main className="flex-1 overflow-y-auto p-4 relative">
        <div className="max-w-7xl mx-auto pb-16">
          {renderPage()}
        </div>
        
        {/* Sticky Footer Credit */}
        <footer className="fixed bottom-0 right-0 left-64 bg-white/80 backdrop-blur-sm px-6 py-2 border-t text-right z-10">
          <p className="text-xs text-gray-500">Pengembang: <span className="font-bold text-gray-800">{DEVELOPER.name}</span> | {DEVELOPER.role}</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
