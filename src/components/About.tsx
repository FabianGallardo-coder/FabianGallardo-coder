import { motion } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';

const About = () => {
  const stories = [
    {
      title: "Precisión Aviónica",
      desc: "Mi base técnica comenzó con el rigor de la aviónica, donde el margen de error es cero. Esa disciplina de detalle y análisis es la que hoy aplico a cada línea de código backend.",
      icon: <Shield className="text-indigo-electric" size={32} />,
    },
    {
      title: "Filosofía Aikidō",
      desc: "En el Dojo aprendí que la fuerza no es todo; la clave está en el flujo y la adaptación. Programar es, para mí, redirigir la complejidad hacia soluciones simples y eficientes.",
      icon: <Zap className="text-indigo-electric" size={32} />,
    },
    {
      title: "Ingeniería de Software",
      desc: "Hoy fusiono esa precisión y adaptabilidad para construir sistemas robustos, optimizar flujos de datos y garantizar que cada API sea una pieza de relojería técnica.",
      icon: <Target className="text-indigo-electric" size={32} />,
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-ghost-white mb-4">Sobre Mí</h2>
        <div className="w-20 h-1 bg-indigo-electric mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-obsidian border border-subtle-line rounded-2xl hover:border-indigo-electric/50 transition-colors group"
          >
            <div className="mb-6 p-3 bg-deep-space w-fit rounded-lg group-hover:scale-110 transition-transform">
              {story.icon}
            </div>
            <h3 className="text-xl font-bold text-ghost-white mb-3">{story.title}</h3>
            <p className="text-slate-muted leading-relaxed">
              {story.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
