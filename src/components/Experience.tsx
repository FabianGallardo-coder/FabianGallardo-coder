import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    role: "QA Tester Python",
    company: "Vates S.A / EPAM SYSTEMS",
    period: "2021 - Presente",
    description: "Liderando la automatización de pruebas con Apache NiFi y desarrollo de scripts de optimización de procesos internos, asegurando la calidad de entrega en entornos de alta demanda.",
    achievements: [
      "Optimización de flujos de datos mediante Apache NiFi.",
      "Implementación de scripts de automatización que redujeron tiempos de testeo.",
      "Colaboración en entornos Agile con estándares globales de calidad."
    ]
  },
  {
    role: "Backend Developer PHP",
    company: "UNC - Facultad de Economía",
    period: "2020 - 2021",
    description: "Desarrollo y mantenimiento de sistemas web críticos para la gestión académica, trabajando bajo metodologías ágiles.",
    achievements: [
      "Mantenimiento preventivo y correctivo de sistemas web.",
      "Coordinación técnica en entornos de desarrollo ágiles.",
      "Mejora de la estabilidad de los sistemas de gestión interna."
    ]
  },
  {
    role: "Profesor de Desarrollo Web",
    company: "Punto Digital San Antonio",
    period: "2019",
    description: "Capacitación de nuevos talentos en los fundamentos del desarrollo web, fomentando la lógica de programación y la estructura de software.",
    achievements: [
      "Diseño de currículum básico de desarrollo web.",
      "Mentoría de estudiantes en la creación de sus primeros proyectos."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-ghost-white mb-4">Trayectoria Profesional</h2>
        <div className="w-20 h-1 bg-indigo-electric mx-auto rounded-full" />
      </motion.div>

      <div className="relative border-l-2 border-subtle-line ml-4 md:ml-0 md:grid md:grid-cols-1 gap-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 mb-12 last:mb-0"
          >
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-indigo-electric border-4 border-deep-space" />

            <div className="p-6 bg-obsidian border border-subtle-line rounded-2xl hover:border-indigo-electric/50 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-ghost-white group-hover:text-indigo-electric transition-colors">{exp.role}</h3>
                  <p className="text-indigo-electric font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-muted text-sm font-mono">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>

              <p className="text-slate-muted mb-6 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-3 text-sm text-slate-muted group-hover:text-slate-300 transition-colors">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-electric shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
