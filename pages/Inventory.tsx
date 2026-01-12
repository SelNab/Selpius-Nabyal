
import React from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const Inventory: React.FC = () => {
  const items = [
    { kode: 'BRG-001', nama: 'Meja Siswa', jml: 200, kond: 'Baik', lok: 'Kelas 1-6' },
    { kode: 'BRG-002', nama: 'Laptop Acer', jml: 15, kond: 'Rusak Ringan', lok: 'Ruang TU' },
    { kode: 'BRG-003', nama: 'Papan Tulis Whiteboard', jml: 12, kond: 'Baik', lok: 'Seluruh Kelas' },
  ];

  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-teal-600">
        <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2 uppercase tracking-wide">
          <span>📦</span> Inventaris Sarana & Prasarana
        </h2>
        
        <ActionButtons />

        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="bg-blue-900 text-white uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Kode Barang</th>
                <th className="px-4 py-3">Nama Barang</th>
                <th className="px-4 py-3">Jumlah</th>
                <th className="px-4 py-3">Kondisi</th>
                <th className="px-4 py-3">Lokasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item, idx) => (
                <tr key={idx} className="hover:bg-teal-50">
                  <td className="px-4 py-3 font-mono font-bold">{item.kode}</td>
                  <td className="px-4 py-3 font-semibold">{item.nama}</td>
                  <td className="px-4 py-3">{item.jml} Unit</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${item.kond === 'Baik' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {item.kond}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 italic">{item.lok}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
