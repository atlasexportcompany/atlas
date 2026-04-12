import { motion } from 'motion/react';
import { ArrowRight, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        {/* Abstract background pattern */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
          <div className="w-96 h-96 bg-blue-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        </div>
        <div className="absolute top-0 right-0 translate-y-1/3 translate-x-1/4">
          <div className="w-96 h-96 bg-indigo-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20"
          >
            <Globe className="w-4 h-4 mr-2" />
            Sourcing Global & Exportación bajo demanda
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8"
          >
            Importa sin fricción. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Escala tu negocio.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Conseguimos cualquier producto en mercados internacionales, gestionamos la logística, los impuestos y te entregamos una cotización completa. Tú solo vendes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#simulator"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center group"
            >
              Simular Importación
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#custom-order"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white border border-slate-700 rounded-full font-medium text-lg hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              Pedido Personalizado
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
