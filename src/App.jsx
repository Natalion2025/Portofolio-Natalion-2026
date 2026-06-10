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
      
      <main id="home" className=" mt-[190px]">
        <Hero />
        <Projects />
      </main>

      <footer id="contact" className="bg-gray-900 text-white text-center py-10 mt-20 opacity-90 rounded-t-3xl font-poppins">
        <p className="text-sm text-gray-400 mb-2">&copy; {new Date().getFullYear()} Natalion Setiawan. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
          <p className="text-base font-medium">Email: natalionsetiawan@gmail.com</p>
          <div className="hidden sm:block w-px h-5 bg-gray-600"></div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/natalionsetiawan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F8E7A1] transition-colors" title="GitHub">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
            </a>
            <a href="https://wa.me/08XXXXXXXXXX" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F8E7A1] transition-colors" title="WhatsApp">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.47 15.82c-.32-.16-1.92-.95-2.22-1.06c-.3-.11-.52-.16-.74.16c-.22.32-.86 1.06-1.05 1.28c-.2.22-.39.24-.71.08c-.32-.16-1.37-.51-2.61-1.63c-.96-.87-1.61-1.94-1.8-2.26c-.2-.32-.02-.49.14-.65c.15-.15.32-.38.48-.56c.16-.19.22-.32.32-.54c.11-.22.05-.41-.03-.57c-.08-.16-.74-1.78-1.01-2.44c-.26-.64-.53-.55-.74-.56c-.2-.01-.43-.01-.65-.01c-.22 0-.58.08-.88.41c-.3.32-1.15 1.13-1.15 2.75c0 1.62 1.18 3.19 1.34 3.41c.16.22 2.33 3.56 5.65 4.99c.79.34 1.4.54 1.88.69c.79.25 1.51.22 2.08.13c.64-.1 1.92-.79 2.19-1.55c.27-.76.27-1.41.19-1.55c-.08-.14-.3-.22-.62-.38zM12.01 20.55c-1.6 0-3.15-.43-4.52-1.24l-.32-.19l-3.36.88l.89-3.28l-.21-.33a8.55 8.55 0 0 1-1.32-4.58c0-4.71 3.83-8.54 8.54-8.54c2.28 0 4.43.89 6.04 2.51c1.61 1.61 2.5 3.76 2.5 6.04c-.01 4.71-3.84 8.54-8.55 8.54h.01zM12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.47 1.32 4.98L2 22l5.16-1.35A9.97 9.97 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F8E7A1] transition-colors" title="Facebook">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F8E7A1] transition-colors" title="Instagram">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"/></svg>
            </a>
            <a href="https://linkedin.com/in/natalionsetiawan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F8E7A1] transition-colors" title="LinkedIn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
