import React from 'react';
import Arrow_Right from '../assets/arrow_right.svg?react';
import Lion_Profil from '../assets/Lion_Portofolio 1.png';
import Gradient_1 from '../assets/Gradient 1.png';

// Sebaiknya pindahkan keyframes ke file CSS global Anda (misalnya, index.css)
// agar tidak didefinisikan ulang setiap kali komponen render.
/*
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
*/

export default function Hero() {
  return (
    <div className="mt-[-50px] mx-[115px] flex flex-row">
      <style>
        {`
          @keyframes ringing {
            0% { transform: rotate(-2deg) translateX(0); }
            25% { transform: rotate(2deg) translateX(2px); }
            50% { transform: rotate(-2deg) translateX(-2px); }
            75% { transform: rotate(2deg) translateX(2px); }
            100% { transform: rotate(-2deg) translateX(0); }
          }
        `}
      </style>
      <section className="flex flex-col z-20 shrink-0">
        <h1 className="text-[47px] font-semibold font-poppins text-[#868490] leading-[110%] tracking-tight">
        UI/UX Designer
        </h1>
        <h2 className='text-[65px] font-semibold mt-7 font-poppins leading-[110%] italic text-white drop-shadow-[1px_1px_0_#000000] drop-shadow-[-1px_-1px_0_#000000]'>Natalion Setiawan</h2>
      
        {/* Gunakan <a> untuk navigasi atau <button> untuk aksi. Tag <i> tidak semantik untuk ini. */}
        <a href="#contact" className="mt-14 w-[183px] border-b-8 border-[#F8E7A1] text-white"></a>
        <p className='mt-14 w-[411px] font-poppins text-[20px] italic leading-10'>"Bridging the gap between design and development. I build seamless, pixel-perfect, and user-centered digital experiences through UI/UX and front-end expertise."</p>
        <button className='mt-15 flex flex-row items-center gap-18 text-start font-poppins text-[20px] leading-10 text-[#F8E7A1] cursor-pointer hover:text-yellow-500 group hover:animate-[ringing_0.70s_ease-in-out_infinite]'>Let's talk<Arrow_Right className='flex h-9 w-9 fill-[#F8E7A1] stroke-[#F8E7A1] stroke-2 cursor-pointer group-hover:fill-yellow-500'></Arrow_Right></button>      
      </section>
      {/*Foto Lion Profil*/}
      <section className='z-10 mt-[-95px] ml-[-100px] shrink-0 hover:scale-103 transition-transform duration-300 ease-in-out'>
        <img src={Lion_Profil} alt="lion_profil" className='h-[650px] w-[363px]'/>
      </section>
      {/*GRADIENT DAN GRAFIS*/}
      <div className='z-0 mt-[-210px] ml-[-545px] mr-[-100px] blur-[30px]'>
        <img src={Gradient_1} alt="" className='h-[524.5px] w-[905px]'/>
      </div>
      <div className='z-10 mt-[35px] flex flex-col gap-9'>
        <div style={{ animation: 'float 4s ease-in-out infinite' }}>
          <div className='ml-[20px] block h-[35px] w-[35px] rounded-full border-3 border-[#F8E7A1] bg-[#030E21] blur-[2px]'></div>
        </div>
        <div style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}>
          <div className='ml-[60px] block h-[20px] w-[20px] rotate-[153.27deg] bg-[#F8E7A1] blur-[2px]'></div>
        </div>
        <div style={{ animation: 'float 5s ease-in-out infinite 1s' }}>
          <div className='ml-[20px] block h-[25px] w-[25px] rotate-[153.27deg] border-3 border-[#F8E7A1] bg-[#030E21]'></div>
        </div>
        <div style={{ animation: 'float 3.5s ease-in-out infinite 1.5s' }}>
          <div className='ml-[60px] block h-[20px] w-[20px] rotate-[153.27deg] bg-[#F8E7A1] blur-[2px]'></div>
        </div>
      </div>
      <section className='relative z-10 mt-[380px] ml-[-170px] flex flex-col'>
        <div className='absolute mt-[-16px] ml-[-18px] h-[3px] w-[168.07px] origin-center rotate-[119.34deg] bg-[#50524A] 
          transition-transform duration-300 hover:-scale-y-125 hover:ml-[-20px]'>
        </div>
        <div className='absolute h-[2px] w-[168.07px] origin-center rotate-[110.92deg] bg-[#F8E7A1] 
          transition-transform duration-300 hover:-scale-y-125'>
        </div>
        <div className='absolute mt-[42px] ml-[10px] h-[4px] w-[168.07px] origin-center rotate-[103.78deg] bg-[#50524A] 
          blur-[2px] transition-transform duration-300 hover:-scale-y-125 hover:ml-[8px]'>
        </div>
      </section>
    </div>
    
  );
}
