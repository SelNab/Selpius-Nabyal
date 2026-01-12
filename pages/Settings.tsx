
import React from 'react';
import Header from '../components/Header';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-gray-600">
        <h2 className="text-xl font-bold text-blue-900 mb-6 uppercase flex items-center gap-2">
          <span>⚙️</span> Pengaturan Sistem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-bold text-sm mb-4 border-b pb-1 text-gray-700">Manajemen User</h3>
              <div className="flex items-center justify-between p-2 bg-white border rounded">
                <span className="text-xs font-bold">Selpius Nabyal (Admin)</span>
                <button className="text-[10px] bg-amber-500 text-white px-2 py-1 rounded">Ubah Pass</button>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-bold text-sm mb-4 border-b pb-1 text-gray-700">Tahun Pelajaran & Semester</h3>
              <div className="grid grid-cols-2 gap-4">
                <select className="p-2 border rounded bg-purple-50 text-xs font-bold">
                  <option selected>2024/2025</option>
                  <option>2025/2026</option>
                  <option>2026/2027</option>
                  <option>2027/2028</option>
                  <option>2028/2029</option>
                  <option>2029/2030</option>
                  <option>2030/2031</option>
                  <option>2023/2024</option>
                </select>
                <select className="p-2 border rounded bg-purple-50 text-xs font-bold">
                  <option>Ganjil</option>
                  <option>Genap</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-4 border rounded-lg bg-blue-50">
              <h3 className="font-bold text-sm mb-4 border-b border-blue-200 pb-1 text-blue-800">Pemeliharaan Data</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-white border-2 border-blue-200 rounded-lg flex flex-col items-center gap-2 hover:bg-blue-600 hover:text-white transition group">
                  <span className="text-2xl">💾</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Backup Data</span>
                </button>
                <button className="p-4 bg-white border-2 border-blue-200 rounded-lg flex flex-col items-center gap-2 hover:bg-indigo-600 hover:text-white transition">
                  <span className="text-2xl">🔄</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Restore Data</span>
                </button>
              </div>
              <p className="text-[10px] text-blue-400 mt-4 italic font-medium">Terakhir Backup: 19 Mei 2024 - 14:00 WIT</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <button className="px-6 py-2 bg-blue-700 text-white rounded font-bold shadow-lg hover:bg-blue-800 transition">Simpan Pengaturan</button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded font-bold hover:bg-gray-300 transition">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
