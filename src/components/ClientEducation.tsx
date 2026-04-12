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
            Educación del Cliente
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conocimiento para Escalar
          </h2>
          <p className="text-xl text-slate-400">
            No solo movemos carga, te enseñamos a construir un negocio de importación rentable y sostenible a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-6 border border-slate-800">
              <Target className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cómo empezar a importar</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              El primer paso es definir tu nicho y presupuesto. Recomendamos iniciar con productos de alta rotación y bajo volumen físico para probar el mercado local antes de escalar a contenedores completos.
            </p>
            <a href="#custom-order" className="text-rose-500 font-medium hover:text-rose-400 flex items-center">
              Solicitar asesoría inicial <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-6 border border-slate-800">
              <TrendingUp className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cuánto se puede ganar</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Los márgenes varían por industria. En tecnología OEM el margen neto suele rondar el 30-45%, mientras que en textiles premium o accesorios puede superar el 100% dependiendo de tu canal de distribución.
            </p>
            <a href="#financing" className="text-rose-500 font-medium hover:text-rose-400 flex items-center">
              Ver opciones de financiamiento <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-6 border border-slate-800">
              <Package className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Qué productos funcionan</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Actualmente vemos alta demanda y rentabilidad en: repuestos automotrices, maquinaria ligera para emprendedores, electrónica de consumo genérica y fardos de ropa vintage clasificada.
            </p>
            <a href="#operations" className="text-rose-500 font-medium hover:text-rose-400 flex items-center">
              Explorar tipos de operaciones <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
