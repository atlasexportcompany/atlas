import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Globe, Package, TrendingUp, Info, CheckCircle2, ArrowRight, Loader2, ShoppingCart } from 'lucide-react';

const countries = [
  { id: 'AR', name: 'Argentina' },
  { id: 'MX', name: 'México' },
  { id: 'CO', name: 'Colombia' },
  { id: 'CL', name: 'Chile' },
  { id: 'CA', name: 'Centroamérica' },
];

const operationTypes = [
  { id: 'lote', name: 'Lote Menor' },
  { id: 'compartido', name: 'Contenedor Compartido' },
  { id: 'completo', name: 'Contenedor Completo' },
];

const productsData = [
  {
    id: 'smartphones',
    name: 'Smartphones Gama Alta',
    cost: { min: 1000, max: 1100 },
    resale: {
      AR: { min: 1400, max: 1600, demand: 'Muy Alta' },
      MX: { min: 1200, max: 1400, demand: 'Alta' },
      CO: { min: 1100, max: 1350, demand: 'Alta' },
      CL: { min: 1200, max: 1450, demand: 'Media' },
      CA: { min: 1150, max: 1400, demand: 'Alta' },
      default: { min: 1200, max: 1400, demand: 'Alta' }
    }
  },
  {
    id: 'tv',
    name: 'Smart TV 55" 4K',
    cost: { min: 780, max: 820 },
    resale: { default: { min: 1000, max: 1300, demand: 'Alta' } }
  },
  {
    id: 'laptop',
    name: 'Laptop i7',
    cost: { min: 780, max: 820 },
    resale: { default: { min: 1000, max: 1300, demand: 'Alta' } }
  },
  {
    id: 'consolas',
    name: 'Consolas de Videojuegos',
    cost: { min: 670, max: 720 },
    resale: { default: { min: 900, max: 1100, demand: 'Muy Alta' } }
  },
  {
    id: 'fardos',
    name: 'Fardos Ropa Premium',
    cost: { min: 350, max: 350 },
    resale: { default: { min: 800, max: 1500, demand: 'Extrema' } }
  },
  {
    id: 'zapatillas',
    name: 'Zapatillas Deportivas',
    cost: { min: 70, max: 80 },
    resale: { default: { min: 130, max: 200, demand: 'Alta' } }
  },
  {
    id: 'auriculares',
    name: 'Auriculares Inalámbricos',
    cost: { min: 15, max: 22 },
    resale: { default: { min: 40, max: 70, demand: 'Muy Alta' } }
  },
  {
    id: 'smartwatch',
    name: 'Smartwatches',
    cost: { min: 35, max: 60 },
    resale: { default: { min: 80, max: 150, demand: 'Alta' } }
  },
  {
    id: 'accesorios',
    name: 'Accesorios Celular',
    cost: { min: 4, max: 8 },
    resale: { default: { min: 10, max: 25, demand: 'Constante' } }
  },
  {
    id: 'ropa-deportiva',
    name: 'Ropa Deportiva',
    cost: { min: 35, max: 55 },
    resale: { default: { min: 80, max: 140, demand: 'Alta' } }
  }
];

export default function Simulator() {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0].id);
  const [selectedCountry, setSelectedCountry] = useState('AR');
  const [operationType, setOperationType] = useState('lote');
  const [quantity, setQuantity] = useState<number>(50);
  
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleCalculate = () => {
    setIsCalculating(true);
    setShowResults(false);
    setProgress(0);
    
    const totalTime = 3000; // 3 seconds
    const intervalTime = 100;
    const steps = totalTime / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = (currentStep / steps) * 100;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsCalculating(false);
        setShowResults(true);
      }
    }, intervalTime);
  };

  const product = productsData.find(p => p.id === selectedProduct)!;
  // @ts-ignore
  const resaleData = product.resale[selectedCountry] || product.resale.default;

  let unitCost = product.cost.max;
  if (operationType === 'compartido') unitCost = (product.cost.min + product.cost.max) / 2;
  if (operationType === 'completo') unitCost = product.cost.min;

  const totalInvestment = unitCost * quantity;
  const avgResalePrice = (resaleData.min + resaleData.max) / 2;
  const totalRevenue = avgResalePrice * quantity;
  const netProfit = totalRevenue - totalInvestment;
  const margin = (netProfit / totalRevenue) * 100;

  return (
    <section id="simulator" className="py-24 bg-black border-t border-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Simulador de Negocio
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Proyección de Rentabilidad
          </h2>
          <p className="text-xl text-slate-400 font-medium">
            Simulación basada en datos reales de mercado internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Package className="w-5 h-5 mr-2 text-rose-500" />
                Configurar Operación
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Producto</label>
                  <select 
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  >
                    {productsData.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">País de Venta (Destino)</label>
                  <select 
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  >
                    {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Operación</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {operationTypes.map(t => (
                      <button
                        key={t.id}
                        onClick={() => setOperationType(t.id)}
                        className={`py-3 px-2 text-xs font-medium rounded-xl border transition-all ${operationType === t.id ? 'bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-600/20' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600'}`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Cantidad (Unidades)</label>
                  <input 
                    type="number" 
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  />
                </div>

                <button 
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 flex items-center justify-center disabled:opacity-70 mt-4"
                >
                  {isCalculating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Calculando Mercado...
                    </>
                  ) : (
                    'Simular Rentabilidad'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {isCalculating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[500px]"
                >
                  <Loader2 className="w-16 h-16 text-rose-500 animate-spin mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">Analizando mercado en tiempo real...</h3>
                  <p className="text-slate-400 mb-8">Consultando precios y demanda en {countries.find(c => c.id === selectedCountry)?.name}</p>
                  
                  <div className="w-full max-w-md bg-slate-950 rounded-full h-3 mb-2 overflow-hidden border border-slate-800">
                    <motion.div 
                      className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear", duration: 0.1 }}
                    />
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{Math.round(progress)}% completado</p>
                </motion.div>
              ) : showResults ? (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-800 pb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Resultados de Simulación</h3>
                        <p className="text-slate-400 flex items-center">
                          <Globe className="w-4 h-4 mr-1" /> Mercado: {countries.find(c => c.id === selectedCountry)?.name}
                        </p>
                      </div>
                      <div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-lg">
                        <span className="text-sm text-slate-400">Nivel de Demanda:</span>
                        <span className="text-rose-400 ml-2 font-bold">{resaleData.demand}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <p className="text-slate-400 mb-2 font-medium">Inversión Total Estimada</p>
                        <p className="text-4xl font-black text-white">${totalInvestment.toLocaleString('en-US', {maximumFractionDigits: 0})} <span className="text-lg text-slate-500 font-normal">USD</span></p>
                        <p className="text-sm text-slate-500 mt-3 flex items-center">
                          <Package className="w-4 h-4 mr-1" /> Costo por unidad: ${unitCost.toLocaleString('en-US', {maximumFractionDigits: 0})} USD
                        </p>
                      </div>
                      
                      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <p className="text-slate-400 mb-2 font-medium">Ingresos Proyectados</p>
                        <p className="text-4xl font-black text-white">${totalRevenue.toLocaleString('en-US', {maximumFractionDigits: 0})} <span className="text-lg text-slate-500 font-normal">USD</span></p>
                        <p className="text-sm text-slate-500 mt-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" /> Reventa est.: ${resaleData.min} - ${resaleData.max} USD/ud
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/20 to-slate-900 border border-green-500/30 rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between">
                      <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p className="text-green-400 font-bold mb-1 text-lg">Ganancia Neta Estimada</p>
                        <p className="text-5xl font-black text-green-500">${netProfit.toLocaleString('en-US', {maximumFractionDigits: 0})} <span className="text-xl font-bold">USD</span></p>
                      </div>
                      <div className="text-center md:text-right">
                        <p className="text-slate-400 mb-1 font-medium">Margen de Rentabilidad</p>
                        <p className="text-4xl font-bold text-white">{margin.toFixed(1)}%</p>
                      </div>
                    </div>

                    {/* Recomendación Automática */}
                    <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-5 flex items-start">
                      <Info className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-bold mb-1">Recomendación Estratégica</p>
                        <p className="text-sm text-indigo-200 leading-relaxed">
                          {totalInvestment < 10000 
                            ? "Con una inversión mayor, el costo por unidad disminuye y el margen mejora significativamente. Considera escalar a un contenedor compartido."
                            : "Basado en tu inversión, podrías mejorar tu rentabilidad aumentando el volumen de compra para acceder a precios de contenedor completo."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bloque Final Impacto */}
                  <div className="bg-rose-600 rounded-3xl p-8 text-center shadow-2xl shadow-rose-900/20">
                    <h4 className="text-2xl font-bold text-white mb-6">Ejemplo de Escalamiento Automático</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white/90 mb-8 bg-black/20 p-6 rounded-2xl">
                      <div>
                        <p className="text-sm uppercase tracking-wider mb-1 opacity-80 font-medium">Invertís</p>
                        <p className="text-3xl font-black">10,000 USD</p>
                      </div>
                      <ArrowRight className="w-8 h-8 hidden md:block opacity-50" />
                      <div>
                        <p className="text-sm uppercase tracking-wider mb-1 opacity-80 font-medium">Generás</p>
                        <p className="text-3xl font-black">18,000 USD</p>
                      </div>
                      <ArrowRight className="w-8 h-8 hidden md:block opacity-50" />
                      <div>
                        <p className="text-sm uppercase tracking-wider mb-1 text-green-300 font-bold">Ganancia</p>
                        <p className="text-3xl font-black text-green-300">8,000 USD</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <p className="text-xl font-bold text-white">Esto no es una compra, es una operación de reventa.</p>
                    </div>

                    <a 
                      href="https://link.mercadopago.com.ar/camdiaz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-10 py-5 bg-white text-rose-600 rounded-full font-black text-xl hover:bg-slate-100 transition-transform hover:scale-105 shadow-xl"
                    >
                      <ShoppingCart className="w-6 h-6 mr-3" />
                      PAGAR 50% INICIAL
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full bg-slate-900/50 border border-slate-800 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[500px]"
                >
                  <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                    <Calculator className="w-10 h-10 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Esperando parámetros</h3>
                  <p className="text-slate-400 max-w-md text-lg">
                    Configura tu operación en el panel izquierdo y haz clic en "Simular Rentabilidad" para ver la proyección de mercado.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
