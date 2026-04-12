import { motion } from 'motion/react';
import { ArrowRight, Globe, Users, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [customerCount, setCustomerCount] = useState(250);

  useEffect(() => {
    // Increment counter every 20 minutes (1200000 ms)
    const interval = setInterval(() => {
      setCustomerCount(prev => prev + 1);
    }, 1200000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
        
        {/* Animated Logistics Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Horizontal moving lines (routes) */}
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-30"></div>
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-30"></div>
          
          {/* Animated ships/planes dots */}
          <motion.div 
            animate={{ x: ['-10vw', '110vw'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)] -translate-y-1/2"
          />
          <motion.div 
            animate={{ x: ['110vw', '-10vw'] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
            className="absolute top-2/4 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)] -translate-y-1/2"
          />
          <motion.div 
            animate={{ x: ['-10vw', '110vw'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute top-3/4 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)] -translate-y-1/2"
          />
        </div>

        {/* Abstract background pattern */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 z-10">
          <div className="w-96 h-96 bg-rose-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        </div>
        <div className="absolute top-0 left-0 translate-y-1/3 -translate-x-1/4 z-10">
          <div className="w-96 h-96 bg-indigo-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Opportunity Alert */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-bold mb-8 border border-rose-500/30 animate-pulse"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            Operaciones activas en Asia y Norteamérica
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight"
          >
            Tu infraestructura de <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500">
              importación global
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Gestionamos toda la cadena de suministro internacional. Sourcing, aduanas, logística y entrega final. Escala tu negocio con un socio operativo confiable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a 
              href="#custom-order"
              className="w-full sm:w-auto px-8 py-4 bg-rose-600 text-white rounded-full font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 flex items-center justify-center group"
            >
              Iniciar Operación
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/50584510505"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white border border-slate-700 rounded-full font-bold text-lg hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              Contactar Asesor
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center text-slate-400 text-sm"
          >
            <div className="flex items-center bg-slate-900/80 backdrop-blur-sm px-5 py-3 rounded-full border border-slate-800 shadow-xl">
              <Users className="w-5 h-5 text-rose-500 mr-3" />
              <span className="font-bold text-white mr-2 text-base">{customerCount}</span> 
              <span className="hidden sm:inline">clientes activos importando globalmente</span>
              <span className="sm:hidden">clientes activos</span>
              <span className="relative flex h-2 w-2 ml-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
