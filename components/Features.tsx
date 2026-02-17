import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const Features: React.FC = () => {
  return (
    <section className="section-padding bg-transparent border-t border-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal>
              <h2 className="text-meta mb-10 opacity-40">Statement</h2>
              <p className="text-2xl md:text-4xl font-light text-white leading-[1.2] uppercase tracking-tighter">
                Escrevo diretamente para pessoas que, como eu, acreditam no <span className="text-neutral-600">essencial</span>. Em um design <span className="text-neutral-600">minimalista</span>, onde cada elemento tem um propósito e cada interação é desenhada para <span className="text-neutral-600">durar</span>.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-6">
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:pt-[2px]">
                <div className="space-y-4">
                  <div className="text-meta text-white border-b border-white/[0.02] pb-2 flex justify-between items-baseline">
                    <span>01. Visual Strategy</span>
                  </div>
                  <p className="text-neutral-500 text-[10px] leading-relaxed font-light uppercase tracking-widest">
                    Curadoria estética aplicada à narrativa de marca. Design que transcende a interface para criar legado.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-meta text-white border-b border-white/[0.02] pb-2">02. Art Direction</div>
                  <p className="text-neutral-500 text-[10px] leading-relaxed font-light uppercase tracking-widest">
                    Liderança criativa focada em coesão visual e impacto sensorial através de múltiplas plataformas.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-meta text-white border-b border-white/[0.02] pb-2">03. Emerging Tech</div>
                  <p className="text-neutral-500 text-[10px] leading-relaxed font-light uppercase tracking-widest">
                    Integração estratégica de IA e tecnologias emergentes como extensão do pensamento criativo humano.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-meta text-white border-b border-white/[0.02] pb-2">04. Essential Structure</div>
                  <p className="text-neutral-500 text-[10px] leading-relaxed font-light uppercase tracking-widest">
                    Otimização sistêmica onde cada elemento visual serve a um propósito de negócio e intenção humana.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;