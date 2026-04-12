import { motion } from 'motion/react';
import { Scale, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

export default function MarketComparator() {
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
            <Scale className="w-4 h-4 mr-2" />
            Comparador de Mercados
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            China vs USA
          </h2>
          <p className="text-xl text-slate-400">
            Te asesoramos sobre el mejor origen para tu producto basándonos en precio, tiempo y calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* China Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <span className="text-8xl font-black">CN</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">🇨🇳</span> Mercado Asiático
              </h3>
              
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium flex items-center">
                      <TrendingDown className="w-4 h-4 text-green-500 mr-2" /> Precio
                    </span>
                    <span className="text-green-400 font-bold">Muy Bajo</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium flex items-center">
                      <Clock className="w-4 h-4 text-orange-500 mr-2" /> Tiempo de Envío
                    </span>
                    <span className="text-orange-400 font-bold">15 - 45 días</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium flex items-center">
                      <ShieldCheck className="w-4 h-4 text-blue-500 mr-2" /> Calidad
                    </span>
                    <span className="text-blue-400 font-bold">Variable (OEM)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </li>
              </ul>
              <p className="mt-8 text-sm text-slate-400">
                Ideal para: Electrónica, accesorios, hogar, maquinaria ligera, compras por volumen.
              </p>
            </div>
          </div>

          {/* USA Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <span className="text-8xl font-black">US</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">🇺🇸</span> Mercado Norteamericano
              </h3>
              
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium flex items-center">
                      <TrendingDown className="w-4 h-4 text-orange-500 mr-2" /> Precio
                    </span>
                    <span className="text-orange-400 font-bold">Medio / Alto</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium flex items-center">
                      <Clock className="w-4 h-4 text-green-500 mr-2" /> Tiempo de Envío
                    </span>
                    <span className="text-green-400 font-bold">7 - 20 días</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium flex items-center">
                      <ShieldCheck className="w-4 h-4 text-blue-500 mr-2" /> Calidad
                    </span>
                    <span className="text-blue-400 font-bold">Alta (Marcas)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </li>
              </ul>
              <p className="mt-8 text-sm text-slate-400">
                Ideal para: Ropa de marca (fardos), tecnología reacondicionada, repuestos automotrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
