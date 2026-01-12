
import React from 'react';
import { Page } from '../types';
import Header from '../components/Header';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Jumlah Siswa', value: '184', color: 'bg-blue-600', icon: '🎒' },
    { label: 'Guru & Pegawai', value: '14', color: 'bg-emerald-600', icon: '👥' },
    { label: 'Surat Masuk', value: '42', color: 'bg-amber-600', icon: '📩' },
    { label: 'Inventaris', value: '512', color: 'bg-rose-600', icon: '📦' },
    { label: 'Keuangan', value: 'Rp 15.4M', color: 'bg-indigo-600', icon: '💰' },
  ];

  const mainMenus = [
    { page: Page.SCHOOL_DATA, label: 'Administrasi Umum', icon: '📋', color: 'bg-sky-500' },
    { page: Page.TEACHER_DATA, label: 'Kepegawaian', icon: '💼', color: 'bg-violet-500' },
    { page: Page.STUDENT_DATA, label: 'Kesiswaan', icon: '👨‍🎓', color: 'bg-orange-500' },
    { page: Page.ATTENDANCE, label: 'Akademik', icon: '📖', color: 'bg-teal-500' },
    { page: Page.INVENTORY, label: 'Sarpras', icon: '🏛️', color: 'bg-pink-500' },
    { page: Page.REPORTS, label: 'Keuangan', icon: '💹', color: 'bg-green-500' },
    { page: Page.REPORTS, label: 'Laporan', icon: '📊', color: 'bg-red-500' },
    { page: Page.SETTINGS, label: 'Pengaturan', icon: '⚙️', color: 'bg-gray-500' },
  ];

  return (
    <div className="space-y-6">
      <Header />
      
      <div className="bg-blue-900 rounded-xl p-6 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>📊</span> Ringkasan Data Sekolah
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className={`${stat.color} p-6 rounded-lg shadow-lg transform transition hover:scale-105 cursor-default`}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-xs uppercase font-semibold opacity-80">{stat.label}</p>
              <p className="text-3xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6 text-blue-900 border-b pb-2 uppercase tracking-wide">Menu Utama</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mainMenus.map((menu) => (
            <button
              key={menu.label}
              onClick={() => onNavigate(menu.page)}
              className={`${menu.color} p-4 rounded-xl text-white flex flex-col items-center justify-center gap-3 transition hover:opacity-90 active:scale-95 shadow-lg group`}
            >
              <span className="text-4xl group-hover:scale-110 transition">{menu.icon}</span>
              <span className="font-bold text-center text-sm">{menu.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
