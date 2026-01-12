
import React from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const TeacherData: React.FC = () => {
  const teachers = [
    { nama: 'Selpius Nabyal, S.Pd', nip: '19850320 201104 1 001', jabatan: 'Kepala Sekolah', status: 'PNS', gol: 'IV/a', tmt: '2011-04-01' },
    { nama: 'Petrus O., S.Pd', nip: '19881210 201503 1 002', jabatan: 'Guru Kelas', status: 'PNS', gol: 'III/b', tmt: '2015-03-01' },
    { nama: 'Maria B. W.', nip: '-', jabatan: 'Tenaga Administrasi', status: 'Honor', gol: '-', tmt: '2020-07-15' },
  ];

  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-violet-700">
        <h2 className="text-xl font-bold text-blue-900 mb-6 uppercase">👥 DATA GURU DAN TENAGA KEPENDIDIKAN</h2>
        
        <ActionButtons />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg border">
          <div className="md:col-span-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Nama Lengkap</label>
            <input type="text" className="w-full p-2 border rounded mt-1" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">NIP</label>
            <input type="text" className="w-full p-2 border rounded mt-1" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Status</label>
            <select className="w-full p-2 border rounded mt-1 bg-purple-50">
              <option>PNS</option>
              <option>PPPK</option>
              <option>Honor</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-blue-900 text-white text-xs uppercase">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Nama Lengkap</th>
                <th className="px-4 py-3">NIP/NUPTK</th>
                <th className="px-4 py-3">Jabatan</th>
                <th className="px-4 py-3">Gol</th>
                <th className="px-4 py-3">TMT</th>
                <th className="px-4 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {teachers.map((t, i) => (
                <tr key={i} className="hover:bg-blue-50">
                  <td className="px-4 py-3">{i+1}</td>
                  <td className="px-4 py-3 font-bold">{t.nama}</td>
                  <td className="px-4 py-3 font-mono text-xs">{t.nip}</td>
                  <td className="px-4 py-3">{t.jabatan}</td>
                  <td className="px-4 py-3 text-center">{t.gol}</td>
                  <td className="px-4 py-3 text-gray-600">{t.tmt}</td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 font-bold hover:underline">Detail</button>
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

export default TeacherData;
