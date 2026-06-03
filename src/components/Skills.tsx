import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Maestría Técnica",
      icon: <Cpu className="text-indigo-electric" size={24} />,
      skills: [
        { name: "Python", level: "Avanzado" },
        { name: "PHP", level: "Avanzado" },
        { name: "JavaScript", level: "Avanzado" },
        { name: "TypeScript", level: "Intermedio" },
      ],
    },
    {
      title: "Especialidades Backend",
      icon: <Layers className="text-indigo-electric" size={24} />,
      skills: [
        { name: "Apache NiFi", level: "Experto" },
        { name: "RESTful APIs", level: "Avanzado" },
        { name: "Arquitectura de Datos", level: "Avanzado" },
        { name: "Sistemas Distribuidos", level: "Intermedio" },
      ],
    },
    {
      title: "Calidad y Testing",
      icon: <ShieldCheck className="text-indigo-electric" size={24} />,
      skills: [
        { name: "Test Automation", level: "Avanzado" },
        { name: "QA Engineering", level: "Avanzado" },
        { name: "Software Testing", level: "Avanzado" },
        { name: "Optimización de Procesos", level: "Avanzado" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto bg-deep-space">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-ghost-white mb-4">Stack Tecnológico</h2>
        <div className="w-20 h-1 bg-indigo-electric mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-obsidian border border-subtle-line rounded-lg">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-ghost-white">{group.title}</h3>
            </div>

            <div className="space-y-4">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="group flex items-center justify-between p-3 rounded-lg bg-obsidian border border-subtle-line hover:border-indigo-electric/50 transition-all"
                >
                  <span className="text-slate-muted group-hover:text-ghost-white transition-colors font-medium">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-indigo-electric opacity-70 group-hover:opacity-100 transition-opacity">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
