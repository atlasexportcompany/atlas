import { motion } from 'motion/react';
import { MapPin, ArrowRight, Package, Truck, ShieldCheck, CheckCircle } from 'lucide-react';

export default function GlobalLogistics() {
  return (
    <section className="py-24 bg-black border-t border-slate-900 relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
        {/* Simplified SVG map representation for visual effect */}
        <svg viewBox="0 0 1000 500" className="w-full h-full max-w-5xl text-slate-700 fill-current">
          <path d="M200,150 Q250,100 300,150 T400,150 T500,200 T600,150 T700,200 T800,150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
          <circle cx="200" cy="150" r="5" className="text-rose-500 fill-current" />
          <circle cx="800" cy="150" r="5" className="text-rose-500 fill-current" />
          <circle cx="500" cy="200" r="5" className="text-indigo-500 fill-current" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Disponibilidad Global
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Operando en +150 países
          </h2>
          <p className="text-xl text-slate-400">
            Red activa en China y Estados Unidos. Gestionamos +20 contenedores mensuales con logística optimizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tracking UI Simulation */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <Truck className="w-5 h-5 mr-3 text-rose-500" />
              Tracking de Operaciones en Tiempo Real
            </h3>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800"></div>
              
              <div className="space-y-8 relative">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center z-10 shadow-lg shadow-rose-600/20 flex-shrink-0">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-6 pt-2">
                    <h4 className="text-white font-bold">Operación Confirmada</h4>
                    <p className="text-sm text-slate-400">Proveedor en Shenzhen preparando mercancía.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center z-10 shadow-lg shadow-rose-600/20 flex-shrink-0">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-6 pt-2">
                    <h4 className="text-white font-bold">En Tránsito</h4>
                    <p className="text-sm text-slate-400">Contenedor a bordo del buque MSC Oscar.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-rose-500 flex items-center justify-center z-10 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="ml-6 pt-2">
                    <h4 className="text-rose-400 font-bold">Aduana (Actual)</h4>
                    <p className="text-sm text-slate-400">Procesando documentación de importación.</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex items-start opacity-50">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center z-10 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-slate-500" />
                  </div>
                  <div className="ml-6 pt-2">
                    <h4 className="text-slate-300 font-bold">Entregado</h4>
                    <p className="text-sm text-slate-500">Pendiente de liberación aduanera.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex items-start hover:border-rose-500/30 transition-colors">
              <div className="bg-slate-950 p-3 rounded-xl mr-4">
                <span className="text-2xl font-black text-rose-500">🇨🇳</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Ruta Asia</h4>
                <p className="text-slate-400 text-sm mb-2">Shenzhen, Guangzhou, Yiwu</p>
                <div className="flex items-center text-xs font-medium text-rose-400 bg-rose-500/10 px-2 py-1 rounded w-fit">
                  Tiempos: 15–45 días
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex items-start hover:border-rose-500/30 transition-colors">
              <div className="bg-slate-950 p-3 rounded-xl mr-4">
                <span className="text-2xl font-black text-rose-500">🇺🇸</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Ruta Norteamérica</h4>
                <p className="text-slate-400 text-sm mb-2">Miami, Los Angeles, Texas</p>
                <div className="flex items-center text-xs font-medium text-rose-400 bg-rose-500/10 px-2 py-1 rounded w-fit">
                  Tiempos: 7–20 días
                </div>
              </div>
            </div>

            <div className="bg-rose-600 rounded-2xl p-6 text-white shadow-lg shadow-rose-600/20">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2" />
                Garantía Atlas
              </h4>
              <p className="text-rose-100 text-sm">
                Trabajamos exclusivamente con proveedores verificados y certificados. Tu inversión está protegida desde el origen hasta el destino final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
