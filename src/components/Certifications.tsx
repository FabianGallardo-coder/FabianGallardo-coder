import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  { name: "Fundamentos del desarrollo web Full Stack", issuer: "Certificado de Finalización", date: "2024" },
  { name: "Node.js Esencial", issuer: "Certificado de Finalización", date: "2018" },
  { name: "JavaScript Esencial", issuer: "Certificado de Finalización", date: "2017" },
  { name: "Software Testing / QA", issuer: "Certificado de Finalización", date: "2024" },
  { name: "Data Science Conceptos Básicos", issuer: "Certificado de Finalización", date: "2024" },
  { name: "Big Data con un café", issuer: "Certificado de Finalización", date: "2024" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-ghost-white mb-4">Validación Técnica</h2>
        <div className="w-20 h-1 bg-indigo-electric mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-obsidian border border-subtle-line rounded-2xl hover:border-indigo-electric/50 transition-all flex items-center gap-4"
          >
            <div className="p-3 bg-deep-space rounded-full text-indigo-electric">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ghost-white">{cert.name}</h3>
              <p className="text-xs text-slate-muted">{cert.issuer} • {cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
