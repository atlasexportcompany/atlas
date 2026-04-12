import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, Clock, TrendingUp, Info, CheckCircle2 } from 'lucide-react';

export default function Simulator() {
  const [price, setPrice] = useState<number>(5000);
  const [quantity, setQuantity] = useState<number>(1);
  const [shippingCost, setShippingCost] = useState<number>(800);
  const [resalePrice, setResalePrice] = useState<number>(8500);

  // Simulation Logic
  const productTotal = price * quantity;
  const totalInvestment = productTotal + shippingCost;
  const totalRevenue = resalePrice * quantity;
  const netProfit = totalRevenue - totalInvestment;
  const margin = (netProfit / totalRevenue) * 100;

  // Import Simulator Logic
  const estimatedTime = shippingCost < 1000 ? '15-25 días (Marítimo)' : '7-12 días (Aéreo)';
  const recommendation = netProfit > 2000 ? 'Operación Altamente Rentable' : 'Operación Viable';

  return (
    <section id="simulator" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calculadora Universal de Importación
          </h2>
          <p className="text-lg text-slate-400">
            Proyecta tu inversión y rentabilidad antes de iniciar la operación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-rose-500" />
                Datos de la Operación
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Precio de Compra Total (USD)</label>
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Cantidad (Lotes/Contenedores)</label>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Costo de Envío Estimado (USD)</label>
                  <input 
                    type="number" 
                    value={shippingCost}
                    onChange={(e) => setShippingCost(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Precio de Venta Total (USD)</label>
                  <input 
                    type="number" 
                    value={resalePrice}
                    onChange={(e) => setResalePrice(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800">
              <h3 className="text-2xl font-bold mb-8 border-b border-slate-800 pb-4">Análisis de Rentabilidad</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Inversión Total (Producto + Envío)</span>
                  <span className="font-medium text-xl">${totalInvestment.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Ingresos Proyectados</span>
                  <span className="font-medium text-xl">${totalRevenue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                
                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-lg font-bold">Ganancia Neta</span>
                  <span className="text-3xl font-bold text-rose-500">${netProfit.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Margen de Ganancia</span>
                  <span className="font-bold text-rose-400">{margin.toFixed(2)}%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 p-8 rounded-3xl shadow-sm border border-indigo-500/20">
              <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Simulador de Importación
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <p className="text-sm text-slate-500 mb-1">Tiempo Estimado</p>
                  <p className="text-lg font-bold text-white">{estimatedTime}</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <p className="text-sm text-slate-500 mb-1">Recomendación Atlas</p>
                  <p className="text-lg font-bold text-green-400 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    {recommendation}
                  </p>
                </div>
              </div>

              <div className="flex items-start text-sm text-indigo-300 bg-indigo-500/10 p-4 rounded-xl">
                <Info className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Nota:</strong> Los costos de envío e impuestos aduaneros finales se confirmarán en la cotización formal. Esta herramienta es para proyección inicial de operaciones mayoristas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
