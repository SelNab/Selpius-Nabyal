
import React, { useState } from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const MailOutgoing: React.FC = () => {
  const [filter, setFilter] = useState('');

  const data = [
    { no: '421.2/01/V/2024', tgl: '2024-05-10', tujuan: 'Orang Tua Siswa Kelas 1-6', perihal: 'Pemberitahuan Ujian Kenaikan Kelas', ttd: 'Kepala Sekolah' },
    { no: '421.2/02/V/2024', tgl: '2024-05-14', tujuan: 'Dinas Pendidikan', perihal: 'Laporan Bulanan Mei 2024', ttd: 'Kepala Sekolah' },
  ];

  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
          <span>📤</span> AGENDA SURAT KELUAR
        </h2>
        
        <ActionButtons />

        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Cari Tujuan atau Perihal..." 
            className="w-full md:w-1/3 p-2 border rounded shadow-inner bg-gray-50"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-blue-900 text-white uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Nomor Surat</th>
                <th className="px-4 py-3 text-left">Tanggal</th>
                <th className="px-4 py-3 text-left">Tujuan</th>
                <th className="px-4 py-3 text-left">Perihal</th>
                <th className="px-4 py-3 text-left">Penandatangan</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.map((item, idx) => (
                <tr key={idx} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-3 font-mono font-bold text-gray-700">{item.no}</td>
                  <td className="px-4 py-3 text-gray-600">{item.tgl}</td>
                  <td className="px-4 py-3 text-gray-800 font-semibold">{item.tujuan}</td>
                  <td className="px-4 py-3">{item.perihal}</td>
                  <td className="px-4 py-3 text-blue-700 font-bold">{item.ttd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MailOutgoing;
