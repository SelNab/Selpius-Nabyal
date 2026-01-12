
import React, { useState } from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const StudentData: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'DATA' | 'KELAS'>('DATA');

  const students = [
    { nama: 'Beni Kabak', nisn: '0123456789', jk: 'L', kelas: '1A', ortu: 'Yakub Kabak' },
    { nama: 'Siska B.', nisn: '0123456790', jk: 'P', kelas: '1B', ortu: 'Lukas B.' },
  ];

  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-orange-500">
        <div className="flex bg-gray-100 border-b">
          <button 
            onClick={() => setActiveTab('DATA')}
            className={`px-8 py-4 font-bold text-sm transition ${activeTab === 'DATA' ? 'bg-white text-orange-600 border-t-4 border-orange-600' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            📋 DATA PESERTA DIDIK
          </button>
          <button 
            onClick={() => setActiveTab('KELAS')}
            className={`px-8 py-4 font-bold text-sm transition ${activeTab === 'KELAS' ? 'bg-white text-orange-600 border-t-4 border-orange-600' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            🏛️ DATA KELAS & ROMBEL
          </button>
        </div>

        <div className="p-6">
          <ActionButtons />
          
          {activeTab === 'DATA' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input type="text" placeholder="Cari Nama/NISN..." className="col-span-2 p-2 border rounded bg-gray-50" />
                <select className="p-2 border rounded bg-purple-50">
                  <option>Semua Kelas</option>
                  {[1,2,3,4,5,6].map(k => <option key={k}>Kelas {k}</option>)}
                </select>
                <select className="p-2 border rounded bg-purple-50">
                  <option>Jenis Kelamin</option>
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </select>
              </div>

              <div className="overflow-x-auto border rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-blue-900 text-white uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3">NISN</th>
                      <th className="px-4 py-3">Nama Siswa</th>
                      <th className="px-4 py-3">JK</th>
                      <th className="px-4 py-3">Kelas</th>
                      <th className="px-4 py-3">Nama Ortu</th>
                      <th className="px-4 py-3">Alamat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {students.map((s, i) => (
                      <tr key={i} className="hover:bg-orange-50">
                        <td className="px-4 py-3 font-mono text-gray-600">{s.nisn}</td>
                        <td className="px-4 py-3 font-bold">{s.nama}</td>
                        <td className="px-4 py-3 text-center">{s.jk}</td>
                        <td className="px-4 py-3">{s.kelas}</td>
                        <td className="px-4 py-3">{s.ortu}</td>
                        <td className="px-4 py-3 text-gray-500 italic">Oksibil, Peg. Bintang</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-4 rounded border">
                <h3 className="font-bold mb-4 text-blue-900">DAFTAR KELAS (1-6)</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1,2,3,4,5,6].map(k => (
                    <button key={k} className="p-4 bg-white border-2 border-blue-200 rounded-lg hover:border-blue-500 font-black text-2xl text-blue-900 shadow-sm transition">
                      {k}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded border">
                <h3 className="font-bold mb-4 text-blue-900">DAFTAR ROMBEL</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B', '6A', '6B'].map(r => (
                    <button key={r} className="p-2 bg-purple-50 border border-purple-200 rounded hover:bg-purple-100 font-bold text-sm text-purple-900 shadow-sm transition">
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentData;
