
import React from 'react';
import { LOGO_TUT_WURI, LOGO_PEMKAB, HEADER_TEXT } from '../constants';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b-[6px] border-double border-black pb-6 mb-8 bg-white p-8 shadow-xl rounded-2xl">
      {/* Logo Tut Wuri Handayani (Kiri) - UKURAN JUMBO */}
      <div className="flex-shrink-0 flex justify-center items-center bg-white rounded-2xl p-2 shadow-md border-2 border-gray-100 mb-4 md:mb-0">
        <img 
          src={LOGO_TUT_WURI} 
          alt="Tut Wuri Handayani" 
          className="w-36 h-36 md:w-40 md:h-40 object-contain drop-shadow-xl" 
          style={{ minWidth: '144px', minHeight: '144px' }}
          loading="eager"
        />
      </div>

      {/* Teks Identitas Sekolah (Tengah) */}
      <div className="text-center flex-1 px-4 md:px-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black uppercase leading-tight text-gray-900 tracking-tighter">
          {HEADER_TEXT.line1}
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold uppercase leading-tight text-gray-800 mt-1">
          {HEADER_TEXT.line2}
        </h2>
        <div className="my-4 flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[0.1em] text-blue-900 drop-shadow-md">
            {HEADER_TEXT.line3}
          </h3>
          <div className="h-1.5 bg-blue-900 w-full mt-2 rounded-full shadow-sm"></div>
          <div className="h-1 bg-yellow-400 w-3/4 mt-1 rounded-full shadow-sm"></div>
        </div>
        <p className="text-sm md:text-base lg:text-lg italic font-black text-gray-700 mt-2 bg-yellow-100 inline-block px-6 py-2 rounded-full border-2 border-yellow-300 shadow-inner uppercase tracking-wider">
          {HEADER_TEXT.address}
        </p>
      </div>

      {/* Logo Kabupaten (Kanan) - UKURAN JUMBO */}
      <div className="flex-shrink-0 flex justify-center items-center bg-white rounded-2xl p-2 shadow-md border-2 border-gray-100 mt-4 md:mt-0">
        <img 
          src={LOGO_PEMKAB} 
          alt="Pegunungan Bintang" 
          className="w-36 h-36 md:w-40 md:h-40 object-contain drop-shadow-xl" 
          style={{ minWidth: '144px', minHeight: '144px' }}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Header;
