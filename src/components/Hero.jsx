import React from 'react';
import Arrow_Right from '../assets/arrow_right.svg?react';
import Lion_Profil from '../assets/Lion_Portofolio 1.png';
import Gradient_1 from '../assets/Gradient 1.png';

export default function Hero() {
  return (
    <div className='flex flex-row mt-[-50px]'>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
      <section className="flex flex-col z-20 shrink-0">
        <h1 className="text-[47px] font-semibold font-poppins text-[#868490] leading-[110%] tracking-tight">
        UI/UX Designer
        </h1>
        <h2 className='text-[65px] font-semibold mt-7 font-poppins leading-[110%] italic text-white drop-shadow-[1px_1px_0_#000000] drop-shadow-[-1px_-1px_0_#000000]'>Natalion Setiawan</h2>
      
        <i href="#contact" className=" text-white w-[183px] mt-14 border-b-8 border-[#F8E7A1]"></i>
        <p className='text-[20px] font-poppins italic mt-14 w-[411px] leading-10'>"Bridging the gap between design and development. I build seamless, pixel-perfect, and user-centered digital experiences through UI/UX and front-end expertise."</p>
        <button className='text-[20px] text-start flex flex-row items-center gap-18 font-poppins mt-15 text-[#F8E7A1] leading-10'>Let's talk<Arrow_Right className='flex stroke-[#F8E7A1] stroke-2 fill-[#F8E7A1] w-9 h-9'></Arrow_Right></button>      
      </section>
      {/*Foto Lion Profil*/}
      <section className='ml-[-100px] mt-[-95px] z-10 shrink-0'>
        <img src={Lion_Profil} alt="lion_profil" className='w-[363px] h-[650px]'/>
      </section>
      {/*GRADIENT DAN GRAFIS*/}
      <div className='z-0   ml-[-545px]  mt-[-210px] mr-[-100px] blur-[30px] '>
        <img src={Gradient_1} alt="" className='w-[905px] h-[524.5px]'/>
      </div>
      <div className='flex flex-col gap-9 mt-[35px] z-10'>
        <div style={{ animation: 'float 4s ease-in-out infinite' }}>
          <i className='block w-[35px] ml-[20px] h-[35px] bg-[#030E21] border-[#F8E7A1] border-3 rounded-full blur-[2px]'></i>
        </div>
        <div style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}>
          <i className='block w-[20px] ml-[60px] h-[20px] rotate-[153.27deg] bg-[#F8E7A1] blur-[2px]'></i>
        </div>
        <div style={{ animation: 'float 5s ease-in-out infinite 1s' }}>
          <i className='block w-[25px] ml-[20px] h-[25px] rotate-[153.27deg] bg-[#030E21] border-[#F8E7A1] border-3'></i>
        </div>
        <div style={{ animation: 'float 3.5s ease-in-out infinite 1.5s' }}>
          <i className='block w-[20px] ml-[60px] h-[20px] rotate-[153.27deg] bg-[#F8E7A1] blur-[2px]'></i>
        </div>
      </div>
      <section className='relative flex flex-col z-10 mt-[380px] ml-[-170px]'>
        <i className='absolute w-[168.07px] hover:ml-[-20px] hover:-scale-y-125 hover:duration-300 h-[3px]             
          mt-[-16px]
          ml-[-18px]
          bg-[#50524A]      
          rotate-[119.34deg] 
          origin-center'>
        </i>
        <i className='absolute w-[168.07px] h-[2px] hover:-scale-y-125 hover:duration-300 
          bg-[#F8E7A1]      
          rotate-[110.92deg] 
          origin-center'>
        </i>
        <i className='absolute w-[168.07px] h-[4px] hover:ml-[8px] hover:-scale-y-125 hover:duration-300 
          blur-[2px]
          mt-[42px]
          ml-[10px]
          bg-[#50524A]      
          rotate-[103.78deg] 
          origin-center'>
        </i>
      </section>
    </div>
    
    
  );
}
