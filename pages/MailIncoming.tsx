
import React, { useState } from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const MailIncoming: React.FC = () => {
  const [filter, setFilter] = useState('');

  const data = [
    { no: '001/DINAS/2024', tgl: '2024-05-15', asal: 'Dinas Pendidikan Kab. Pegunungan Bintang', perihal: 'Undangan Rapat Kurikulum Merdeka', disposisi: 'Kepala Sekolah', ket: 'Penting' },
    { no: '12/UPTD/V/2024', tgl: '2024-05-18', asal: 'UPTD Oksibil', perihal: 'Pemberitahuan Lomba Literasi', disposisi: 'Guru Kelas', ket: 'Segera' },
  ];

  const filtered = data.filter(d => 
    d.no.toLowerCase().includes(filter.toLowerCase()) || 
    d.perihal.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
          <span>📩</span> AGENDA SURAT MASUK
        </h2>
        
        <ActionButtons />

        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Cari No Surat atau Perihal..." 
            className="w-full md:w-1/3 p-2 border rounded shadow-inner bg-gray-50 focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-blue-900 text-white uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Nomor Surat</th>
                <th className="px-4 py-3">Tgl Terima</th>
                <th className="px-4 py-3">Asal Surat</th>
                <th className="px-4 py-3">Perihal</th>
                <th className="px-4 py-3">Disposisi</th>
                <th className="px-4 py-3">Ket</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filtered.map((item, idx) => (
                <tr key={idx} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-3 font-mono font-bold text-gray-700">{item.no}</td>
                  <td className="px-4 py-3 text-gray-600">{item.tgl}</td>
                  <td className="px-4 py-3 text-gray-800">{item.asal}</td>
                  <td className="px-4 py-3 font-medium">{item.perihal}</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold">{item.disposisi}</td>
                  <td className="px-4 py-3"><span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">{item.ket}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MailIncoming;
