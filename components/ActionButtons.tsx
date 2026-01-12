
import React from 'react';

const ActionButtons: React.FC = () => {
  const btnClass = "px-4 py-2 rounded font-semibold text-white transition hover:opacity-80 active:scale-95 flex items-center gap-1 shadow-sm text-sm";
  
  return (
    <div className="flex flex-wrap gap-2 mb-4 p-2 bg-gray-50 border rounded-lg">
      <button className={`${btnClass} bg-green-600`}>➕ Tambah</button>
      <button className={`${btnClass} bg-red-600`}>🗑️ Hapus</button>
      <button className={`${btnClass} bg-amber-500`}>✏️ Edit</button>
      <button className={`${btnClass} bg-blue-600`}>💾 Simpan</button>
      <div className="w-px h-8 bg-gray-300 mx-2 self-center"></div>
      <button className={`${btnClass} bg-slate-600`}>📄 Template</button>
      <button className={`${btnClass} bg-rose-500`}>📕 PDF</button>
      <button className={`${btnClass} bg-gray-700`}>🖨️ Print</button>
      <button className={`${btnClass} bg-emerald-600`}>📤 Expor</button>
      <button className={`${btnClass} bg-indigo-600`}>📥 Inpor</button>
    </div>
  );
};

export default ActionButtons;
