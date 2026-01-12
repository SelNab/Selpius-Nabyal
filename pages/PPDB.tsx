
import React, { useState } from 'react';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';

const PPDB: React.FC = () => {
  const [birthDate, setBirthDate] = useState('2017-05-20');
  
  const calculateAge = (date: string) => {
    if (!date) return '-';
    const birth = new Date(date);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const month = now.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && now.getDate() < birth.getDate())) {
      age--;
    }
    return age + " Tahun";
  };

  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg border-t-8 border-orange-500">
        <h2 className="text-xl font-bold text-blue-900 mb-6 uppercase flex items-center gap-2">
          <span>📝</span> Penerimaan Peserta Didik Baru (PPDB)
        </h2>
        
        <ActionButtons />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700">Nomor Urut Pendaftaran</label>
                <input type="text" className="w-full mt-1 p-2 bg-gray-50 border rounded font-mono" value="PPDB-2024-001" readOnly />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Tanggal Pendaftaran</label>
                <input type="date" className="w-full mt-1 p-2 border rounded" defaultValue="2024-05-20" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700">NIK (16 Digit)</label>
                <input type="text" className="w-full mt-1 p-2 border rounded" placeholder="9112..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">NISN</label>
                <input type="text" className="w-full mt-1 p-2 border rounded" placeholder="012..." />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Nama Lengkap</label>
              <input type="text" className="w-full mt-1 p-2 border rounded" placeholder="Nama Calon Siswa" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700">Tempat & Tgl Lahir</label>
                <div className="flex gap-2">
                  <input type="text" className="w-2/3 mt-1 p-2 border rounded" placeholder="Tempat" />
                  <input 
                    type="date" 
                    className="w-1/3 mt-1 p-2 border rounded" 
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Umur SD (Otomatis)</label>
                <input type="text" className="w-full mt-1 p-2 bg-blue-50 border border-blue-200 rounded font-bold text-blue-700" value={calculateAge(birthDate)} readOnly />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700">Nama Orang Tua (Ayah)</label>
                <input type="text" className="w-full mt-1 p-2 border rounded" placeholder="Nama Ayah" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Nama Orang Tua (Ibu)</label>
                <input type="text" className="w-full mt-1 p-2 border rounded" placeholder="Nama Ibu" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Alamat Lengkap</label>
              <textarea className="w-full mt-1 p-2 border rounded" rows={2} placeholder="Alamat Domisili..."></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700">Asal Sekolah (TK/PAUD)</label>
                <input type="text" className="w-full mt-1 p-2 border rounded" placeholder="TK Harapan..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Status Penerimaan</label>
                <select className="w-full mt-1 p-2 border bg-purple-50 rounded font-bold text-purple-900">
                  <option>Proses</option>
                  <option>Terima</option>
                  <option>Tidak Terima</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 flex flex-col items-center justify-center min-h-[300px]">
              <div className="text-4xl mb-4">📸</div>
              <p className="text-sm font-bold text-gray-600 mb-2">Pas Foto (3x4)</p>
              <input type="file" className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              <p className="text-[10px] text-gray-400 mt-2 italic">Format: JPG, PNG (Max 2MB)</p>
            </div>

            <div className="p-4 border rounded-lg bg-yellow-50 space-y-4">
              <h3 className="font-bold text-sm text-yellow-800 border-b border-yellow-200 pb-1">Tanda Tangan Pengesahan</h3>
              <div className="grid grid-cols-1 gap-4 text-center">
                <div className="space-y-8">
                  <p className="text-xs uppercase font-bold">Ketua Panitia</p>
                  <div className="h-px bg-gray-400 w-3/4 mx-auto"></div>
                  <p className="text-xs italic">( ................................ )</p>
                </div>
                <div className="space-y-8">
                  <p className="text-xs uppercase font-bold">Kepala Sekolah</p>
                  <div className="h-px bg-gray-400 w-3/4 mx-auto"></div>
                  <p className="text-xs italic">Selpius Nabyal, S.Pd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPDB;
