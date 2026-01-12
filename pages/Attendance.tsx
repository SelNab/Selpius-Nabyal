
import React, { useState } from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const Attendance: React.FC = () => {
  const [filter, setFilter] = useState('');

  const dummyAttendance = [
    { id: '1', nama: 'Selpius Nabyal, S.Pd', nip: '19850320 201104 1 001', jamDatang: '07:15', jamPulang: '14:00', status: 'Hadir', tanggal: '2024-05-20' },
    { id: '2', nama: 'Maria B. W.', nip: '19900215 201503 2 005', jamDatang: '07:30', jamPulang: '14:05', status: 'Hadir', tanggal: '2024-05-20' },
    { id: '3', nama: 'Yohanes K.', nip: '19821010 200801 1 012', jamDatang: '-', jamPulang: '-', status: 'Izin', tanggal: '2024-05-20' },
  ];

  const filteredData = dummyAttendance.filter(a => 
    a.nama.toLowerCase().includes(filter.toLowerCase()) || 
    a.nip.includes(filter)
  );

  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-blue-900 mb-6 uppercase">📋 FORM ABSENSI GURU & PEGAWAI</h2>
        
        <ActionButtons />

        <div className="mb-4 flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[300px]">
            <label className="block text-sm font-bold text-gray-700 mb-1">Cari Guru (Nama/NIP)</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
              placeholder="Ketik nama atau NIP..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Pilih Tanggal</label>
            <input type="date" className="p-2 border border-gray-300 rounded" defaultValue="2024-05-20" />
          </div>
        </div>

        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="bg-blue-900 text-white uppercase text-xs">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Nama Lengkap</th>
                <th className="px-4 py-3">NIP</th>
                <th className="px-4 py-3">Jam Datang</th>
                <th className="px-4 py-3">Jam Pulang</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Keterangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-bold text-gray-800">{item.nama}</td>
                  <td className="px-4 py-3 text-gray-600">{item.nip}</td>
                  <td className="px-4 py-3 text-green-600 font-mono">{item.jamDatang}</td>
                  <td className="px-4 py-3 text-red-600 font-mono">{item.jamPulang}</td>
                  <td className="px-4 py-3">
                    <select className="p-1 border bg-purple-50 text-purple-900 rounded focus:ring-2 focus:ring-purple-500 font-semibold" defaultValue={item.status}>
                      <option>Hadir</option>
                      <option>Alpa</option>
                      <option>Izin</option>
                      <option>Cuti</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <input type="text" className="w-full p-1 border rounded text-xs" placeholder="..." />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
