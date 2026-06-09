import React from 'react';
import Gradient2 from '../assets/Gradient 2.png';
import Github from '../assets/Github.svg?react';
import React_icon from '../assets/React1.svg?react';
import Vscode_icon from '../assets/Vsc.svg?react';
import Tailwind_icon from '../assets/Tailwind.svg?react';

export default function Projects() {
  return (
    <section className="" >
      <div className="z-0 ">
        <img src={Gradient2} alt="gradient2" />
      </div>
      <div className="flex absolute z-10 items-center px-[115px] py-4 mt-[-620px] opacity-70 justify-between w-full h-[200px]  bg-[#030E21]">
        <Github className='fill-white rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></Github>            
        <React_icon className='fill-white rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></React_icon>            
        <Vscode_icon className='rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></Vscode_icon>
        <Tailwind_icon className='rounded-lg w-[147px] h-[147px] bg-white drop-shadow-[10px_10px_4px_rgba(175,164,164,0.25)]'></Tailwind_icon>            
      </div>
    </section>
  );
}


