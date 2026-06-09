import React from 'react';

export default function Projects() {
  const myProjects = [
    { id: 1, title: 'Aplikasi E-Commerce', tech: 'React, Node.js, MongoDB' },
    { id: 2, title: 'Sistem Manajemen Tugas', tech: 'React, Firebase' },
    { id: 3, title: 'Blog Pribadi', tech: 'Next.js, Tailwind CSS' },
  ];

  return (
    <section className="py-16 bg-[#030E21] text-white" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Proyek Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div key={project.id} className="bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-blue-900/20 hover:shadow-xl transition-all border border-gray-800 flex flex-col items-start group cursor-pointer">
            <div className="h-12 w-12 bg-gray-800 text-blue-400 flex items-center justify-center rounded-xl mb-4 text-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {project.id}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm"><span className="font-semibold text-gray-300">Teknologi:</span> {project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
