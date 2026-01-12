
import React from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-red-600">
        <h2 className="text-xl font-bold text-blue-900 mb-6 uppercase flex items-center gap-2">
          <span>📊</span> Laporan Administrasi TU
        </h2>
        
        <ActionButtons />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Laporan Bulanan', icon: '📅' },
            { label: 'Laporan Tahunan', icon: '🗓️' },
            { label: 'Laporan Per Kelas', icon: '👥' },
            { label: 'Laporan Per Guru', icon: '👤' },
            { label: 'Siswa Penerimaan Baru', icon: '🎒' },
            { label: 'Grafik Statistik', icon: '📈' },
          ].map((rep) => (
            <button key={rep.label} className="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl hover:border-red-500 hover:bg-red-50 hover:shadow-md transition text-left group">
              <span className="text-3xl grayscale group-hover:grayscale-0 transition">{rep.icon}</span>
              <div>
                <p className="font-bold text-gray-800">{rep.label}</p>
                <p className="text-xs text-gray-500 italic">Generate PDF/Print</p>
              </div>
            </button>
          ))}
        </div>

        <div className="p-8 border rounded-xl bg-gray-50 max-w-2xl mx-auto space-y-12">
          <div className="text-right">
            <p className="text-xs">Oksibil, .......................... 2024</p>
          </div>
          <div className="grid grid-cols-2 gap-20 text-center">
            <div className="space-y-12">
              <p className="text-xs font-bold uppercase underline">Ketua Panitia PPDB</p>
              <div>
                <p className="text-xs font-bold">( ........................................ )</p>
                <p className="text-[10px] mt-1 italic">NIP: ........................................</p>
              </div>
            </div>
            <div className="space-y-12">
              <p className="text-xs font-bold uppercase underline">Kepala Sekolah</p>
              <div>
                <p className="text-xs font-bold">Selpius Nabyal, S.Pd</p>
                <p className="text-[10px] mt-1 italic">NIP: 19850320 201104 1 001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
