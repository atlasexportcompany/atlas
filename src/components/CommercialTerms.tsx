import { ShieldCheck, CreditCard, CheckCircle2 } from 'lucide-react';

export default function CommercialTerms() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Condiciones Comerciales Claras
          </h2>
          <p className="text-lg text-slate-400">
            Trabajamos con total transparencia para proteger tu inversión y garantizar el éxito de la importación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <CreditCard className="w-24 h-24 text-rose-500" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-black text-rose-500 mb-4">50%</div>
              <h3 className="text-xl font-bold text-white mb-3">Seña Inicial</h3>
              <p className="text-slate-400 mb-6">
                Para confirmar el pedido y asegurar el producto con el proveedor internacional. Este monto cubre los costos operativos iniciales y la reserva de inventario.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 mr-2" />
                  Asegura el stock
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 mr-2" />
                  Inicia proceso de control de calidad
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-24 h-24 text-rose-500" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-black text-rose-500 mb-4">50%</div>
              <h3 className="text-xl font-bold text-white mb-3">Al Completar</h3>
              <p className="text-slate-400 mb-6">
                El saldo restante se abona una vez que la mercancía ha pasado la inspección de calidad y está lista para el despacho aduanero o entrega final.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 mr-2" />
                  Garantía de calidad verificada
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 mr-2" />
                  Documentación de importación lista
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
