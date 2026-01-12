
import React, { useState } from 'react';
import { HEADER_TEXT, LOGO_PEMKAB } from '../constants';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'SelNab' && password === '1230') {
      onLogin();
    } else {
      alert('Login Gagal! Gunakan SelNab / 1230');
    }
  };

  return (
    <div className="min-h-screen bg-blue-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-400 -z-10 skew-y-6 origin-top-left shadow-2xl opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-900 -z-10 -skew-y-6 origin-bottom-right shadow-2xl"></div>
      
      <div className="bg-white rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] w-full max-w-md overflow-hidden animate-fade-in border-[6px] border-blue-900 z-10">
        <div className="bg-blue-900 p-12 text-white text-center relative">
          <div className="absolute top-4 right-4 opacity-5 text-8xl rotate-12 select-none pointer-events-none">🏫</div>
          
          {/* Logo Container - SUPER BESAR & KONTRAS */}
          <div className="bg-white p-6 rounded-[2rem] w-40 h-40 mx-auto mb-8 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-110 transition duration-500 border-4 border-yellow-400">
            <img 
              src={LOGO_PEMKAB} 
              alt="Logo Kabupaten" 
              className="w-32 h-32 object-contain drop-shadow-2xl" 
            />
          </div>

          <h1 className="text-3xl font-black uppercase tracking-tighter mb-1 drop-shadow-lg">SD NEGERI BALIL</h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full mb-3"></div>
          <p className="text-sm opacity-100 uppercase font-black tracking-[0.3em] text-yellow-400 drop-shadow-sm">
            TATA USAHA DIGITAL
          </p>
        </div>
        
        <form onSubmit={handleLogin} className="p-12 space-y-8 bg-white">
          <div className="space-y-3">
            <label className="text-xs font-black text-blue-900 block ml-1 uppercase tracking-[0.25em]">Nama Pengguna</label>
            <div className="relative group">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-900 font-bold group-focus-within:text-blue-500 transition text-2xl">👤</span>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="SelNab"
                className="w-full pl-14 pr-6 py-5 bg-gray-50 border-3 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white focus:ring-8 focus:ring-blue-100 focus:outline-none transition-all shadow-inner font-black text-gray-800 placeholder:text-gray-300 text-xl"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-xs font-black text-blue-900 block ml-1 uppercase tracking-[0.25em]">Kata Sandi</label>
            <div className="relative group">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-900 font-bold group-focus-within:text-blue-500 transition text-2xl">🔑</span>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="1230"
                className="w-full pl-14 pr-6 py-5 bg-gray-50 border-3 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white focus:ring-8 focus:ring-blue-100 focus:outline-none transition-all shadow-inner font-black text-gray-800 placeholder:text-gray-300 text-xl"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <button 
              type="submit"
              className="bg-blue-800 hover:bg-blue-950 text-white font-black py-5 rounded-2xl shadow-xl transition transform active:scale-95 uppercase tracking-widest text-base flex items-center justify-center gap-3 border-b-4 border-blue-950"
            >
              🚀 MASUK
            </button>
            <button 
              type="button"
              onClick={() => {setUsername(''); setPassword('');}}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-black py-5 rounded-2xl transition uppercase tracking-widest text-base border-b-4 border-gray-300"
            >
              🔄 RESET
            </button>
          </div>
        </form>
        
        <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.4em]">PEMKAB PEGUNUNGAN BINTANG • PAPUA</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
