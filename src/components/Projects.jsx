import React from 'react';
import Gradient2 from '../assets/Gradient 2.png';
import Github from '../assets/Github.svg?react';
import React_icon from '../assets/React1.svg?react';
import Vscode_icon from '../assets/Vsc.svg?react';
import Tailwind_icon from '../assets/Tailwind.svg?react';
import Figma_icon from '../assets/Figma.svg?react';
import Gradient3 from '../assets/Gradient 3.png';
import Arrow_Right from '../assets/arrow_right.svg?react';
import Webmob_design from '../assets/Webmob_card.png';
import Web_dev from '../assets/Webdev_card.png';
import Mob_dev from '../assets/Mobiledev_card.png'


export default function Projects() {
  return (
    <section className="" >
      {/*Gradient 2*/}
      <div className="z-0 ">
        <img src={Gradient2} alt="gradient2" />
      </div>
      <div className="flex absolute z-10 items-center hover:opacity-100 duration-600 transition-opacity ease-in-out px-[115px] py-4 mt-[-620px] opacity-70 justify-between w-full h-[200px]  bg-[#030E21]">
        <Github className='fill-white rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></Github>            
        <React_icon className='fill-white rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></React_icon>            
        <Vscode_icon className='rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></Vscode_icon>
        <Tailwind_icon className='rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></Tailwind_icon>            
        <Figma_icon className='rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></Figma_icon>            
      </div>
      <div className='flex grid grid-cols-2 ml-[115px]'>
        <div className=' font-poppins w-[420px] h-[342px] mt-[-300px] gap-6 flex flex-col'>
          <h1 className='text-[62px]  font-semibold text-white'>My Awesome <br /> Service</h1>
          <p className="text-[20px] text-[#868490]">"I design intuitive and engaging user experiences, then transform them into clean and responsive front-end code to create exceptional digital products."</p>
        </div>
        <div className='grid grid-rows-3 w-[517px] h-[518px] gap-5 mt-[-300px]'>
          <div className='flex justify-between items-center gap-6 border border-slate-700 rounded-lg bg-[#091427] cursor-pointer opacity-80 hover:opacity-100 z-10 items-center gap-6 px-6 py-6'>
            <div className='flex items-center gap-6'>
              <img src={Web_dev} alt="web_dev" className='w-[100px] object-cover h-[100px] rounded-lg'/>
              <div className='flex flex-col'>
                <label className='text-[25px] font-semibold text-white cursor-pointer'>Website Development</label>
                <label htmlFor="" className='text-[20px] font-semibold text-[#868490] cursor-pointer'>10+ Projects</label>
              </div>
            </div>
            <Arrow_Right  className='flex h-10 w-10 fill-[#F8E7A1] stroke-[#F8E7A1] stroke-2 cursor-pointer hover:fill-yellow-500'/>
          </div>
          <div className='flex justify-between items-center gap-6 border border-slate-700 rounded-lg bg-[#091427] cursor-pointer opacity-80 hover:opacity-100 z-10 items-center gap-6 px-6 py-6'>
            <div className='flex items-center gap-6'>
              <img src={Mob_dev} alt="mob_dev" className='w-[100px] object-cover h-[100px] rounded-lg'/>
              <div className='flex flex-col '>
                <label className='text-[25px] font-semibold text-white cursor-pointer'>Mobile Development</label>
                <label htmlFor="" className='text-[20px] font-semibold text-[#868490] cursor-pointer'>10+ Projects</label>
              </div>
            </div>
            <Arrow_Right  className='flex h-10 w-10 fill-[#F8E7A1] stroke-[#F8E7A1] stroke-2 cursor-pointer hover:fill-yellow-500'/>
          </div>
          <div className='flex justify-between items-center gap-4 border border-slate-700 rounded-lg bg-[#091427] cursor-pointer opacity-80 hover:opacity-100 z-10 items-center gap-6 px-6 py-6'>
            <div className='flex items-center gap-6'>
              <img src={Webmob_design} alt='webmob_design' className='w-[100px] object-cover h-[100px] rounded-lg'/>
              <div className='flex flex-col'>
                <label className='text-[25px] font-semibold text-white cursor-pointer'>Web & Mob  Design</label>
                <label htmlFor="" className='text-[20px] font-semibold text-[#868490] cursor-pointer'>10+ Projects</label>
              </div>
            </div>
            <Arrow_Right  className='flex h-10 w-10 fill-[#F8E7A1] stroke-[#F8E7A1] stroke-2 cursor-pointer hover:fill-yellow-500'/>
          </div>
          
        </div>
      </div>
      {/*Gradient 3*/}
      <div className='mt-[-550px] z-0 translate-x-[305px] flex'>
        <img src={Gradient3} alt="gradient3" />
      </div>
    </section>
  );
}
