import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-[#030E21] font-inter text-[#E5E5E5] overflow-x-hidden">
      <header className="flex justify-between items-center pt-[40px] bg-transparent mx-[115px] z-50 ">
        <div className="text-[32px] font-black  text-white uppercase drop-shadow-[5px_4px_3.5px_rgba(139,137,137,0.8)]">Natalion</div>
        <nav className="flex gap-12 font-poppins font-medium z-10 text-[18px] opacity">
          <a href="#services" className="text-gray-300 leading-[110%] tracking-[-0.03em] hover:text-white  transition-colors">Services</a>
          <a href="#project" className="text-gray-300 leading-[110%] tracking-[-0.03em] hover:text-white  transition-colors">Project</a>
          <a href="#contact" className="text-gray-300 leading-[110%] tracking-[-0.03em] hover:text-white  transition-colors">Contact</a>
          <a href="#about" className="text-gray-300 leading-[110%] tracking-[-0.03em] hover:text-white  transition-colors">About</a>
        </nav>
      </header>
      
      <main id="home" className="mx-[115px] mt-[190px]">
        <Hero />
        <Projects />
      </main>

      <footer id="contact" className="bg-gray-900 text-white text-center py-10 mt-20 rounded-t-3xl">
        <p className="text-sm text-gray-400 mb-2">&copy; {new Date().getFullYear()} [Nama Anda]. Semua hak cipta dilindungi.</p>
        <p className="text-base font-medium">Email: email.anda@example.com</p>
      </footer>
    </div>
  );
}

export default App;
