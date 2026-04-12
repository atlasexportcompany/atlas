import { motion } from 'motion/react';
import { Activity, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function SystemStatus() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20"
          >
            <Activity className="w-4 h-4 mr-2" />
            Sistema en Funcionamiento
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Operaciones en Tiempo Real
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white flex items-center">
                <Clock className="w-5 h-5 text-rose-500 mr-2" />
                Cotizaciones Activas
              </h3>
              <span className="bg-rose-500/20 text-rose-400 text-xs font-bold px-2 py-1 rounded">142</span>
            </div>
            <div className="space-y-4">
              {[
                { item: 'Contenedor 40ft - Electrónica', dest: 'México', time: 'Hace 5 min' },
                { item: 'Lote Maquinaria Industrial', dest: 'Colombia', time: 'Hace 12 min' },
                { item: '20 Fardos Textiles Premium', dest: 'Chile', time: 'Hace 28 min' },
              ].map((q, i) => (
                <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800/50 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-white">{q.item}</p>
                    <p className="text-xs text-slate-500">Destino: {q.dest}</p>
                  </div>
                  <span className="text-xs text-slate-400">{q.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                Pedidos Recientes
              </h3>
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">Hoy: 28</span>
            </div>
            <div className="space-y-4">
              {[
                { item: 'Lote Smartphones OEM', status: 'En Producción', color: 'text-orange-400' },
                { item: 'Contenedor Fardos USA', status: 'En Tránsito', color: 'text-blue-400' },
                { item: 'Repuestos Automotrices', status: 'Aduana', color: 'text-purple-400' },
              ].map((p, i) => (
                <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800/50 flex justify-between items-center">
                  <p className="text-sm font-medium text-white">{p.item}</p>
                  <span className={`text-xs font-bold ${p.color}`}>{p.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white flex items-center">
                <ShieldCheck className="w-5 h-5 text-indigo-500 mr-2" />
                Proveedores Verificados
              </h3>
              <span className="bg-indigo-500/20 text-indigo-400 text-xs font-bold px-2 py-1 rounded">+850</span>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Shenzhen Tech Manufacturing', type: 'Electrónica', rating: '99.8%' },
                { name: 'Texas Premium Textiles', type: 'Fardos', rating: '99.5%' },
                { name: 'Guangzhou Industrial', type: 'Maquinaria', rating: '98.9%' },
              ].map((s, i) => (
                <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800/50">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium text-white">{s.name}</p>
                    <span className="text-xs font-bold text-green-400">{s.rating}</span>
                  </div>
                  <p className="text-xs text-slate-500">Categoría: {s.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
