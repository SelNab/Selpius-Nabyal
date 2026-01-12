
import React from 'react';
import { Page } from '../types';
import { LOGO_TUT_WURI } from '../constants';

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate, onLogout }) => {
  const menuItems = [
    { page: Page.DASHBOARD, label: 'Beranda', icon: '🏠' },
    { page: Page.SCHOOL_DATA, label: 'Data Sekolah', icon: '🏫' },
    { page: Page.MAIL_INCOMING, label: 'Surat Masuk', icon: '📩' },
    { page: Page.MAIL_OUTGOING, label: 'Surat Keluar', icon: '📤' },
    { page: Page.TEACHER_DATA, label: 'Guru & Pegawai', icon: '👥' },
    { page: Page.ATTENDANCE, label: 'Absen Guru', icon: '📋' },
    { page: Page.STUDENT_DATA, label: 'Data Siswa', icon: '🎒' },
    { page: Page.PPDB, label: 'PPDB', icon: '📝' },
    { page: Page.INVENTORY, label: 'Sarpras', icon: '📦' },
    { page: Page.REPORTS, label: 'Laporan', icon: '📊' },
    { page: Page.SETTINGS, label: 'Pengaturan', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col h-full shadow-2xl">
      <div className="p-6 border-b border-blue-800 flex flex-col items-center bg-white/5">
        <div className="bg-white p-2 rounded-full mb-3 shadow-lg">
          <img src={LOGO_TUT_WURI} alt="Logo" className="w-14 h-14 object-contain" />
        </div>
        <h1 className="text-center font-black tracking-widest text-xs uppercase text-yellow-400">
          TU SDN BALIL
        </h1>
        <p className="text-[10px] text-blue-300 font-bold mt-1">PEG. BINTANG</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`w-full flex items-center px-6 py-3 text-left transition-all ${
              activePage === item.page 
                ? 'bg-blue-700 border-l-4 border-yellow-400 shadow-inner' 
                : 'hover:bg-blue-800'
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span className="text-sm font-bold tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-blue-800 bg-black/10">
        <button 
          onClick={onLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition shadow-md active:scale-95"
        >
          <span>🚪</span> Keluar
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
