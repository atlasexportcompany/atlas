import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export default function SuccessCases() {
  return (
    <section className="py-24 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Casos Reales Detallados
          </h2>
          <p className="text-xl text-slate-400">
            Resultados tangibles de operaciones gestionadas por nuestro equipo. Escala tu negocio con importaciones estratégicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Case 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 mr-4">
                  <span className="text-xl font-bold text-rose-500">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Escalamiento en Electrónica</h3>
                  <p className="text-slate-400 text-sm">Cliente en México</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-slate-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Inicio Conservador</h4>
                    <p className="text-slate-400 text-sm">Inversión inicial de $2,500 USD en lote de 5 Smart TVs para prueba de mercado local.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-slate-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Re-inversión de Capital</h4>
                    <p className="text-slate-400 text-sm">Venta rápida con 40% de margen. Re-inversión en lote de 20 unidades ($9,000 USD).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-rose-400 font-medium mb-1">Operación a Escala</h4>
                    <p className="text-slate-400 text-sm">Actualmente importa medio contenedor mensual (aprox. $45,000 USD) consolidando carga en Shenzhen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 mr-4">
                  <span className="text-xl font-bold text-indigo-500">J</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Transición a Mayorista Textil</h3>
                  <p className="text-slate-400 text-sm">Cliente en Colombia</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-slate-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Compra Minorista Local</h4>
                    <p className="text-slate-400 text-sm">Compraba fardos a importadores locales con márgenes reducidos (15-20%).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-slate-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Primera Importación Directa</h4>
                    <p className="text-slate-400 text-sm">Asesoría para importar 5 fardos premium directo desde USA. Reducción de costo unitario en 35%.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-indigo-400 font-medium mb-1">Distribución Regional</h4>
                    <p className="text-slate-400 text-sm">Hoy recibe contenedores de 40 pies consolidados en Miami, distribuyendo a minoristas en su región.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
