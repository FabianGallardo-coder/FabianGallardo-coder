import { motion } from 'framer-motion';
import { Code2, Layout, Database } from 'lucide-react';

const projects = [
  {
    title: "Bit-friends",
    description: "Ecosistema de escritorio con estética retro. Implementación de arquitectura híbrida entre LLMs locales (Ollama) y procesamiento en nube.",
    stack: ["Rust", "Tauri v2", "React 19", "TypeScript", "Ollama"],
    link: "https://github.com/FabianGallardo-coder/bit-friends",
    impact: "Desarrollo de una interfaz borderless transparente con integración nativa de OS y un ciclo de vida de software profesional (QA Reports & Dev Guides).",
    type: "High Performance"
  },
  {
    title: "Dragons-ia",
    description: "Motor de juego de rol con reglas automatizadas de D&D 5e. Backend asíncrono escalable con arquitetura robusta.",
    stack: ["Python 3.11", "FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "Pytest"],
    link: "https://github.com/FabianGallardo-coder/dragons-ia",
    impact: "Logro de 100% de cobertura de tests (62/62 passing) y una arquitectura asíncrona para respuestas de API de baja latencia.",
    type: "Backend Architecture"
  },
  {
    title: "Enterprise Data Flow",
    description: "Optimización de ingesta de datos masivos y automatización de procesos internos mediante flujos complejos de Apache NiFi.",
    stack: ["Apache NiFi", "Python", "SQL"],
    link: null,
    impact: "Reducción drástica de errores manuales y optimización de tiempos de procesamiento de datos en entornos corporativos.",
    type: "Enterprise Solution"
  },
  {
    title: "Custom Backend System",
    description: "Desarrollo de sistemas de gestión académica y administrativa con arquitectura robusta y mantenibilidad.",
    stack: ["PHP", "MySQL", "JavaScript", "Agile"],
    link: null,
    impact: "Estabilización de sistemas críticos y mejora de la experiencia de usuario en procesos de gestión universitaria.",
    type: "Web System"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-ghost-white mb-4">Proyectos Seleccionados</h2>
        <div className="w-20 h-1 bg-indigo-electric mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-obsidian border border-subtle-line rounded-2xl hover:border-indigo-electric/50 transition-all group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-deep-space rounded-lg border border-subtle-line group-hover:border-indigo-electric/50 transition-colors">
                {project.type === "High Performance" && <Layout className="text-indigo-electric" size={24} />}
                {project.type === "Backend Architecture" && <Code2 className="text-indigo-electric" size={24} />}
                {project.type === "Enterprise Solution" && <Database className="text-indigo-electric" size={24} />}
                {project.type === "Web System" && <Layout className="text-indigo-electric" size={24} />}
              </div>
              {project.link && (
               <a
                   href={project.link}
                   target="_blank"
                   rel="noreferrer"
                   className="p-2 bg-deep-space rounded-full text-slate-muted hover:text-ghost-white transition-all hover:scale-110"
                 >
                   <Code2 size={20} />
                 </a>
              )}
            </div>

            <h3 className="text-2xl font-bold text-ghost-white mb-3 group-hover:text-indigo-electric transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-muted mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-auto">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-slate-muted mb-3 font-bold">Impacto Técnico</p>
                <p className="text-sm text-ghost-white/80 italic">"{project.impact}"</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((s, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-mono px-2 py-1 rounded-md bg-deep-space text-indigo-electric border border-subtle-line">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
