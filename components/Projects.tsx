import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Primeiros Passinhos",
    slug: "primeiros-passinhos",
    metadata: "UI Design • UX Research • 2025",
    image: "https://i.pinimg.com/736x/9b/3a/45/9b3a451f25d175577fd730a4f7ae0adf.jpg"
  },
  {
    id: 2,
    title: "BOTI+",
    slug: "boti-plus",
    metadata: "ESG • UX Strategy • 2025",
    image: "https://i.pinimg.com/736x/25/2f/4a/252f4aed1392187105d1335e5ae4a571.jpg",
    objectPosition: "object-top"
  },
  {
    id: 3,
    title: "Arcane Hub",
    slug: "arcane-hub",
    metadata: "Product Design • UX Research • 2024",
    image: "https://i.pinimg.com/736x/cf/a4/06/cfa40665e6215f24dbfd93d5c53ad3a9.jpg"
  }
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projetos" className="section-padding container mx-auto px-6 border-t border-white/[0.02]">
      <ScrollReveal className="mb-32 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="max-w-2xl">
          <h2 className="text-meta mb-8">Selected Cases</h2>
          <p className="text-4xl md:text-6xl font-light text-white leading-tight uppercase tracking-tighter">
            Trabalhos <span className="text-neutral-600">Relevantes</span>
          </p>
        </div>
        <div className="mt-8 md:mt-0 text-right">
          <span className="text-meta">Archive — 001</span>
        </div>
      </ScrollReveal>

      <div className="space-y-40">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 100}>
            <div 
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              onClick={() => navigate(`/projetos/${project.slug}`)}
            >
              <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-4 pt-4 border-t border-white/[0.02] lg:border-none">
                <span className="text-meta text-[8px]">Project 0{index + 1}</span>
                <div className="hidden lg:block w-full h-[1px] bg-white/[0.02]"></div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-[16/9] overflow-hidden grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover ${project.objectPosition || ''} group-hover:scale-105 transition-transform duration-1000`}
                />
              </div>
              
              <div className="lg:col-span-3 order-3 flex flex-col justify-between h-full py-2">
                <div>
                  <h3 className="text-3xl font-light text-white uppercase tracking-tighter mb-4 group-hover:pl-4 transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-meta text-[10px] leading-relaxed">
                    {project.metadata}
                  </p>
                </div>
                <div className="mt-12">
                   <div className="inline-block border border-white/10 px-4 py-2 text-[10px] uppercase tracking-widest text-neutral-500 group-hover:border-white group-hover:text-white transition-all">
                      View Case Study
                   </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;