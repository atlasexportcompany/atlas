import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Send } from 'lucide-react';

export default function CustomOrder() {
  return (
    <section id="custom-order" className="py-24 bg-black relative overflow-hidden border-t border-slate-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            ¿No encontrás lo que buscás?
          </motion.h2>
          <p className="text-xl text-slate-400">
            Nuestro equipo de sourcing global puede conseguir cualquier producto que necesites para tu negocio.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Form Section */}
            <div className="p-8 lg:p-12 lg:col-span-3">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-rose-500" />
                Solicitud de Sourcing a Medida
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Producto Específico</label>
                    <input type="text" placeholder="Ej: Laptops Dell Latitude i7" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Cantidad Requerida</label>
                    <input type="text" placeholder="Ej: 50 unidades / 1 contenedor" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Precio Objetivo (USD)</label>
                    <input type="number" placeholder="Presupuesto por unidad" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Fecha Estimada de Compra</label>
                    <select className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all">
                      <option>Lo antes posible</option>
                      <option>En 1-2 meses</option>
                      <option>En 3-6 meses</option>
                      <option>Solo cotizando</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">País de Origen (Opcional)</label>
                    <select className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all">
                      <option>Cualquiera (Mejor precio)</option>
                      <option>China</option>
                      <option>Estados Unidos</option>
                      <option>Europa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">País Destino</label>
                    <input type="text" placeholder="Ej: México, Colombia, España" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Detalles Adicionales</label>
                  <textarea rows={4} placeholder="Especificaciones técnicas, marcas preferidas, restricciones..." className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all resize-none"></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 flex items-center justify-center group">
                  PEDIR PRODUCTO
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Info Section */}
            <div className="bg-slate-950 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-center lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8">¿Por qué pedir con nosotros?</h3>
              
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 border border-rose-500/20 mt-1">
                    <span className="text-rose-500 font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white mb-1">Búsqueda Global</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Accedemos a fábricas y mayoristas en Asia, Norteamérica y Europa que no están en internet público.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 border border-rose-500/20 mt-1">
                    <span className="text-rose-500 font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white mb-1">Negociación Directa</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Conseguimos precios de fábrica y negociamos los MOQ (Cantidades Mínimas de Pedido) por ti.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 border border-rose-500/20 mt-1">
                    <span className="text-rose-500 font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white mb-1">Logística Llave en Mano</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Nos encargamos de la inspección de calidad, consolidación, aduanas y envío hasta tu puerta.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
