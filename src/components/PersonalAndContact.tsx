import { motion } from 'framer-motion';
import { Code2, Briefcase, Mail, Gamepad2, Swords } from 'lucide-react';

const PersonalAndContact = () => {
  return (
    <div className="flex flex-col">
      {/* Personal Section */}
      <section id="personal" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-ghost-white mb-4">Fuera del Código</h2>
          <div className="w-20 h-1 bg-indigo-electric mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-muted leading-relaxed"
          >
            <p className="text-lg">
              Mi enfoque en la vida es similar a mi enfoque en el código: <span className="text-ghost-white font-medium">estratégico, disciplinado y en constante evolución</span>.
            </p>
            <div className="p-6 bg-obsidian border border-subtle-line rounded-2xl flex items-start gap-4">
              <Swords className="text-indigo-electric shrink-0" size={24} />
              <div>
                <h4 className="text-ghost-white font-bold mb-1">Aikidō</h4>
                <p className="text-sm">Practico el arte de la concordia con mi hijo, aplicando los principios de fluidez y redirección de energía en la vida diaria.</p>
              </div>
            </div>
            <div className="p-6 bg-obsidian border border-subtle-line rounded-2xl flex items-start gap-4">
              <Gamepad2 className="text-indigo-electric shrink-0" size={24} />
              <div>
                <h4 className="text-ghost-white font-bold mb-1">Gaming Estratégico</h4>
                <p className="text-sm">Apasionado de los RPG y MMORPGs, donde la planificación táctica y la optimización de builds son la clave del éxito.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-sm mx-auto bg-indigo-electric/10 rounded-full flex items-center justify-center border border-indigo-electric/20"
          >
            {/* Abstract Visual Element */}
            <div className="absolute inset-0 animate-pulse bg-indigo-electric/10 blur-3xl rounded-full" />
            <div className="relative z-10 text-center p-8">
               <span className="text-6xl mb-4 block">🥋</span>
               <span className="text-6xl mb-4 block">🎮</span>
               <span className="text-6xl block">💻</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-24 px-6 bg-obsidian border-t border-subtle-line text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-ghost-white mb-6">Hablemos de Soluciones</h2>
          <p className="text-slate-muted mb-10 max-w-xl mx-auto">
            Si buscas optimizar tus flujos de datos, construir un backend robusto o necesitas un ingeniero con disciplina de acero, estoy a un mensaje de distancia.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:gallardofabianvcpz@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-indigo-electric text-ghost-white rounded-full font-semibold hover:bg-indigo-500 transition-all hover:scale-105">
              <Mail size={20} />
              Enviar Email
            </a>
            <a href="https://linkedin.com/in/fabian-gallardo" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-deep-space border border-subtle-line text-ghost-white rounded-full font-semibold hover:border-indigo-electric transition-all hover:scale-105">
              <Briefcase size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/FabianGallardo-coder" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-deep-space border border-subtle-line text-ghost-white rounded-full font-semibold hover:border-indigo-electric transition-all hover:scale-105">
              <Code2 size={20} />
              GitHub
            </a>
          </div>

          <div className="text-xs text-slate-muted font-mono uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} Fabián Gallardo • Built with React & Tailwind CSS
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default PersonalAndContact;
