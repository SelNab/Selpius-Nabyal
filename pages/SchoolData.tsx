
import React from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const SchoolData: React.FC = () => {
  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-blue-800">
        <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
          <span>🏠</span> DATA IDENTITAS SEKOLAH
        </h2>
        
        <ActionButtons />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700">Nama Sekolah</label>
              <input type="text" className="w-full mt-1 p-2 bg-gray-50 border rounded" value="SD NEGERI BALIL" readOnly />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">NPSN / NSS</label>
              <input type="text" className="w-full mt-1 p-2 bg-gray-50 border rounded" value="60301234 / 10125011" readOnly />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Alamat</label>
              <textarea className="w-full mt-1 p-2 bg-gray-50 border rounded" rows={2}>Jalan Betaabib Kabiding</textarea>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Kecamatan / Kabupaten</label>
              <input type="text" className="w-full mt-1 p-2 bg-gray-50 border rounded" value="Oksibil / Pegunungan Bintang" readOnly />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Tahun Pelajaran</label>
              <select className="w-full mt-1 p-2 bg-purple-100 border border-purple-300 rounded focus:ring-2 focus:ring-purple-500 font-semibold">
                <option>2023/2024</option>
                <option selected>2024/2025</option>
                <option>2025/2026</option>
                <option>2026/2027</option>
                <option>2027/2028</option>
                <option>2028/2029</option>
                <option>2029/2030</option>
                <option>2030/2031</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Kepala Sekolah</label>
              <input type="text" className="w-full mt-1 p-2 bg-gray-50 border rounded" value="Selpius Nabyal, S.Pd" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700">Visi Sekolah</label>
              <textarea className="w-full mt-1 p-2 bg-gray-50 border rounded h-24">Terwujudnya peserta didik yang religius, cerdas, terampil, dan berkarakter serta mencintai lingkungan di wilayah pedalaman Papua.</textarea>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Misi Sekolah</label>
              <textarea className="w-full mt-1 p-2 bg-gray-50 border rounded h-24">1. Meningkatkan kualitas pembelajaran di pedalaman. 2. Membangun karakter siswa yang mandiri.</textarea>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Tujuan</label>
              <textarea className="w-full mt-1 p-2 bg-gray-50 border rounded h-24">Memberikan pendidikan dasar yang layak bagi seluruh anak di sekitar SD Negeri Balil.</textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolData;
