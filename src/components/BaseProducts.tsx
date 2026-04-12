import { motion } from 'motion/react';
import { Package, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export default function BaseProducts() {
  return (
    <section id="products" className="py-24 bg-black text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
              <Package className="w-4 h-4 mr-2" />
              Producto Base Principal
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Fardos de Ropa Premium
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Nuestro producto estrella para revendedores. Alta rentabilidad, calidad verificada y logística optimizada para contenedores completos o pedidos parciales.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Alta Rentabilidad</h4>
                  <p className="text-slate-400">Costo estimado por prenda: USD 2–3. Margen de reventa potencial de 3x a 8x.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Calidad Garantizada</h4>
                  <p className="text-slate-400">Fardos de 45–55 kg con 80–120 prendas. Categorías: Premium Mixto, Streetwear, Vintage e Invierno.</p>
                </div>
              </div>
            </div>

            <a 
              href="#simulator"
              className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              Simular rentabilidad de fardos
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative z-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Estructura de Costos</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl">
                  <span className="text-slate-300">Precio por Fardo</span>
                  <span className="font-bold text-xl">~ USD 250</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl">
                  <span className="text-slate-300">Contenedor Completo</span>
                  <span className="font-bold text-xl">100–120 fardos</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl">
                  <span className="text-slate-300">Inversión Contenedor</span>
                  <span className="font-bold text-xl">USD 25k – 30k</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-900/30 border border-blue-500/30 rounded-xl">
                <p className="text-sm text-blue-200 text-center">
                  * Valores estimados. El costo final depende de la región de destino y el tipo de envío.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
