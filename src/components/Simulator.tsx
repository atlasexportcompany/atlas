import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, Clock, TrendingUp, Info } from 'lucide-react';

export default function Simulator() {
  const [price, setPrice] = useState<number>(250);
  const [quantity, setQuantity] = useState<number>(10);
  const [shippingType, setShippingType] = useState<'sea' | 'air'>('sea');
  const [region, setRegion] = useState('latam');
  const [resalePrice, setResalePrice] = useState<number>(15);
  const [itemsPerUnit, setItemsPerUnit] = useState<number>(100); // e.g., 100 clothes per bale

  // Simulation Logic
  const productTotal = price * quantity;
  
  // Shipping cost estimation
  const shippingRate = shippingType === 'air' ? 0.30 : 0.15; // 30% air, 15% sea average
  const shippingCost = productTotal * shippingRate;
  
  // Taxes estimation (varies by region, using average 25%)
  const taxRate = 0.25;
  const taxCost = productTotal * taxRate;
  
  // Atlas Margin (average 20%)
  const marginRate = 0.20;
  const marginCost = productTotal * marginRate;

  const totalCost = productTotal + shippingCost + taxCost + marginCost;
  const costPerUnit = totalCost / quantity;
  const costPerItem = costPerUnit / itemsPerUnit;

  // Resale Logic
  const totalItems = quantity * itemsPerUnit;
  const totalRevenue = totalItems * resalePrice;
  const netProfit = totalRevenue - totalCost;
  const roi = (netProfit / totalCost) * 100;

  return (
    <section id="simulator" className="py-24 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simulador de Importación y Reventa
          </h2>
          <p className="text-lg text-slate-400">
            Calcula los costos estimados de tu importación y proyecta tu rentabilidad. Transparencia total en cada paso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-blue-600" />
                Parámetros de Importación
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Precio del Producto (USD)</label>
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                  <p className="text-xs text-slate-400 mt-1">Ej: 250 para un fardo premium.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Cantidad (Unidades/Fardos)</label>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Tipo de Envío</label>
                    <select 
                      value={shippingType}
                      onChange={(e) => setShippingType(e.target.value as 'sea' | 'air')}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    >
                      <option value="sea">Marítimo (Económico)</option>
                      <option value="air">Aéreo (Rápido)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Región Destino</label>
                    <select 
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    >
                      <option value="latam">Latinoamérica</option>
                      <option value="na">Norteamérica</option>
                      <option value="eu">Europa</option>
                      <option value="asia">Asia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Proyección de Reventa
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Artículos por Unidad/Fardo</label>
                  <input 
                    type="number" 
                    value={itemsPerUnit}
                    onChange={(e) => setItemsPerUnit(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                  <p className="text-xs text-slate-400 mt-1">Ej: 100 prendas por fardo.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Precio de Venta Sugerido (USD por artículo)</label>
                  <input 
                    type="number" 
                    value={resalePrice}
                    onChange={(e) => setResalePrice(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-8 border-b border-slate-700 pb-4">Cotización Estimada</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Costo del Producto ({quantity} uds)</span>
                  <span className="font-medium">${productTotal.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Logística ({shippingType === 'air' ? 'Aérea' : 'Marítima'})</span>
                  <span className="font-medium">${shippingCost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Impuestos Estimados</span>
                  <span className="font-medium">${taxCost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Gestión Atlas</span>
                  <span className="font-medium">${marginCost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                
                <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
                  <span className="text-lg font-bold">Inversión Total Estimada</span>
                  <span className="text-3xl font-bold text-blue-400">${totalCost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <p className="text-sm text-slate-400 mb-1">Costo por Unidad/Fardo</p>
                  <p className="text-xl font-bold">${costPerUnit.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <p className="text-sm text-slate-400 mb-1">Costo por Artículo</p>
                  <p className="text-xl font-bold">${costPerItem.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-2xl shadow-sm border border-green-500/20">
              <h3 className="text-xl font-bold text-green-400 mb-6">Análisis de Rentabilidad</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-green-500 mb-1">Ingresos Proyectados</p>
                  <p className="text-2xl font-bold text-green-400">${totalRevenue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                </div>
                <div>
                  <p className="text-sm text-green-500 mb-1">Ganancia Neta</p>
                  <p className="text-2xl font-bold text-green-400">${netProfit.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                </div>
                <div>
                  <p className="text-sm text-green-500 mb-1">ROI Estimado</p>
                  <p className="text-2xl font-bold text-green-400">{roi.toFixed(0)}%</p>
                </div>
              </div>

              <div className="mt-6 flex items-start text-sm text-green-400 bg-green-500/10 p-4 rounded-lg">
                <Info className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Nota:</strong> Estos valores son estimaciones para fines de planificación. Los costos reales de envío e impuestos pueden variar según las regulaciones aduaneras específicas del momento de la importación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
