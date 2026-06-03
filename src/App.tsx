import { motion } from 'framer-motion';
import { Code2, Briefcase, Mail, ChevronDown } from 'lucide-react';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import PersonalAndContact from './components/PersonalAndContact';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-electric/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-ghost-white mb-6 tracking-tight">
          Fabián <span className="text-indigo-electric">Gallardo</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-muted mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
          Sistemas Robustos. Flujos Optimizados. <br />
          <span className="text-ghost-white">Disciplina Backend aplicada al código.</span>
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-electric text-ghost-white rounded-md font-semibold transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95"
          >
            Ver Proyectos
          </a>
          <div className="flex gap-3 ml-4">
            <a href="https://github.com/FabianGallardo-coder" target="_blank" rel="noreferrer" className="p-2 text-slate-muted hover:text-ghost-white transition-colors">
              <Code2 size={24} />
            </a>
            <a href="https://linkedin.com/in/fabian-gallardo" target="_blank" rel="noreferrer" className="p-2 text-slate-muted hover:text-ghost-white transition-colors">
              <Briefcase size={24} />
            </a>
            <a href="mailto:gallardofabianvcpz@gmail.com" className="p-2 text-slate-muted hover:text-ghost-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-muted flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest opacity-60">Explorar</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-deep-space text-ghost-white selection:bg-indigo-electric/30 scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <PersonalAndContact />
    </div>
  );
}

export default App;
