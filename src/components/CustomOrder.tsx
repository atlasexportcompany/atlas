import { motion } from 'motion/react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function CustomOrder() {
  return (
    <section id="custom-order" className="py-24 bg-black relative overflow-hidden border-t border-slate-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20 w-fit">
                <MessageSquare className="w-4 h-4 mr-2" />
                Sourcing a Medida
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                ¿Buscas un producto específico?
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                No te limites a nuestro catálogo base. Cuéntanos qué necesitas, especificaciones, cantidades y mercado objetivo. Nuestro equipo buscará los mejores proveedores globales para ti.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Búsqueda de proveedores verificados
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Negociación de precios y MOQ
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Evaluación de viabilidad y rentabilidad
                </li>
              </ul>

              <a 
                href="https://wa.me/1234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20 w-full sm:w-auto group"
              >
                Hacer Pedido Personalizado
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="bg-slate-800 p-10 lg:p-16 border-l border-slate-700 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Ejemplos de Sourcing</h3>
              <div className="space-y-6">
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">Electrónica</span>
                  <h4 className="text-lg font-semibold text-white mb-2">Accesorios para Smartphones</h4>
                  <p className="text-sm text-slate-400">Fundas, cargadores y audífonos OEM desde Shenzhen con empaque personalizado.</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">Hogar</span>
                  <h4 className="text-lg font-semibold text-white mb-2">Artículos de Decoración Minimalista</h4>
                  <p className="text-sm text-slate-400">Lámparas y organizadores desde fábricas verificadas en Yiwu.</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">Maquinaria</span>
                  <h4 className="text-lg font-semibold text-white mb-2">Equipos para PyMEs</h4>
                  <p className="text-sm text-slate-400">Máquinas empacadoras e impresoras 3D industriales con garantía y soporte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
