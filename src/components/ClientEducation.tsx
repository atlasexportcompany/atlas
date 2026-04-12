import { motion } from 'motion/react';
import { BookOpen, TrendingUp, Target, Package, ArrowRight } from 'lucide-react';

export default function ClientEducation() {
  return (
    <section className="py-24 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Educación Comercial
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conocimiento para Escalar
          </h2>
          <p className="text-xl text-slate-400">
            Te brindamos las estrategias clave para maximizar la rentabilidad de tus operaciones mayoristas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-6 border border-slate-800">
              <Target className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Cómo Importar con Éxito</h3>
            <ul className="space-y-4 text-slate-400 mb-8">
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">1.</span>
                Define tu presupuesto (Mínimo $5,000 USD para viabilidad).
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">2.</span>
                Selecciona productos de alta rotación comprobada.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">3.</span>
                Delega la logística y aduanas a expertos (Atlas).
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">4.</span>
                Asegura tu capital operando solo con proveedores verificados.
              </li>
            </ul>
            <a href="#custom-order" className="text-rose-500 font-medium hover:text-rose-400 flex items-center">
              Solicitar asesoría inicial <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-6 border border-slate-800">
              <TrendingUp className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Estrategias de Reventa</h3>
            <ul className="space-y-4 text-slate-400 mb-8">
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">1.</span>
                Pre-vende el stock mientras la mercancía está en tránsito.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">2.</span>
                Establece canales B2B locales (distribuidores, tiendas).
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">3.</span>
                Calcula tus márgenes incluyendo costos de marketing local.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">4.</span>
                Reinvierte rápidamente para aprovechar el interés compuesto.
              </li>
            </ul>
            <a href="#simulator" className="text-rose-500 font-medium hover:text-rose-400 flex items-center">
              Simular rentabilidad <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
