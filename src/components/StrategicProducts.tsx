import { motion } from 'motion/react';
import { Package, Ship, TrendingUp, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 'iphone-17',
    name: 'Smartphones Gama Alta',
    price: 1050,
    suggestedQty: '20-50 unidades',
    category: 'Tecnología',
    demand: 'Alta',
    availability: 'Stock limitado',
    rotation: 'Alta',
    complexity: 'Medio',
    recommended: 'Reventa',
    flag: 'USA',
    specs: ['10-20 uds: 1100 USD', '20-50 uds: 1050 USD', '50+ uds: 1000 USD'],
    profitSim: { invest: 21000, sell: 26000, profit: 5000 }
  },
  {
    id: 'smart-tv-55',
    name: 'Smart TV 55" 4K UHD Premium',
    price: 820,
    suggestedQty: 'Contenedor compartido',
    category: 'Electrónica',
    demand: 'Alta demanda en eventos deportivos y temporadas globales como el mundial, ideal para reventa',
    availability: 'Disponible',
    rotation: 'Media',
    complexity: 'Bajo',
    recommended: 'Empresas / Retail',
    flag: 'China',
    specs: ['10-20 uds: 900 USD', '20-50 uds: 820 USD', '50+ uds: 800 USD'],
    profitSim: { invest: 16400, sell: 24000, profit: 7600 }
  },
  {
    id: 'laptop-corp',
    name: 'Laptop Empresarial i7 Alta Gama',
    price: 900,
    suggestedQty: '20-100 unidades',
    category: 'Informática',
    demand: 'Estable',
    availability: 'Stock limitado',
    rotation: 'Alta',
    complexity: 'Medio',
    recommended: 'Licitaciones / Empresas',
    flag: 'China',
    specs: ['10-20 uds: 1000 USD', '20-50 uds: 900 USD', '50+ uds: 800 USD'],
    profitSim: { invest: 18000, sell: 26000, profit: 8000 }
  },
  {
    id: 'ps5',
    name: 'PlayStation 5 Slim o Standard',
    price: 800,
    suggestedQty: '20-50 unidades',
    category: 'Entretenimiento',
    demand: 'Alta',
    availability: 'Stock limitado',
    rotation: 'Media',
    complexity: 'Medio',
    recommended: 'Tiendas especializadas',
    flag: 'USA',
    specs: ['10-20 uds: 900 USD', '20-50 uds: 800 USD', '50+ uds: 750 USD'],
    profitSim: { invest: 16000, sell: 22000, profit: 6000 }
  },
  {
    id: 'xbox',
    name: 'Xbox Series X',
    price: 750,
    suggestedQty: '20-50 unidades',
    category: 'Entretenimiento',
    demand: 'Alta',
    availability: 'Stock limitado',
    rotation: 'Media',
    complexity: 'Medio',
    recommended: 'Tiendas especializadas',
    flag: 'USA',
    specs: ['10-20 uds: 850 USD', '20-50 uds: 750 USD', '50+ uds: 700 USD'],
    profitSim: { invest: 15000, sell: 21000, profit: 6000 }
  },
  {
    id: 'zapatillas',
    name: 'Zapatillas Deportivas Premium',
    price: 80,
    suggestedQty: '50-100 pares',
    category: 'Calzado',
    demand: 'Alta',
    availability: 'Disponible',
    rotation: 'Alta',
    complexity: 'Bajo',
    recommended: 'Tiendas deportivas / Reventa',
    flag: 'China',
    specs: ['10-20 uds: 90 USD', '20-50 uds: 85 USD', '50+ uds: 80 USD'],
    profitSim: { invest: 8000, sell: 15000, profit: 7000 }
  },
  {
    id: 'ropa-deportiva',
    name: 'Ropa Deportiva Alta Calidad',
    price: 35,
    suggestedQty: '100-300 prendas',
    category: 'Textiles',
    demand: 'Alta',
    availability: 'Disponible',
    rotation: 'Alta',
    complexity: 'Bajo',
    recommended: 'Gimnasios / Tiendas',
    flag: 'China',
    specs: ['10-20 uds: 40 USD', '20-50 uds: 35 USD', '50+ uds: 25 USD'],
    profitSim: { invest: 10500, sell: 20000, profit: 9500 }
  },
  {
    id: 'accesorios-celular',
    name: 'Accesorios para Celular Alta Rotación',
    price: 8,
    suggestedQty: '200-500 unidades',
    category: 'Accesorios',
    demand: 'Constante',
    availability: 'Stock amplio',
    rotation: 'Muy Alta',
    complexity: 'Bajo',
    recommended: 'Mayoristas / Distribuidores',
    flag: 'China',
    specs: ['10-20 uds: 10 USD', '20-50 uds: 8 USD', '50+ uds: 5 USD'],
    profitSim: { invest: 4000, sell: 10000, profit: 6000 }
  }
];

export default function StrategicProducts() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [showSummary, setShowSummary] = useState(false);
  const [quantity, setQuantity] = useState(15);

  const getQuickSuggestions = (productId: string) => {
    if (productId === 'fardos-premium' || productId === 'ropa-deportiva') return [20, 50, 100, 200];
    return [10, 20, 50, 100];
  };

  const unitPrice = selectedProduct.price;
  const totalInvestment = unitPrice * quantity;
  const profitMargin = selectedProduct.profitSim.profit / selectedProduct.profitSim.invest;
  const estimatedResale = totalInvestment * (1 + profitMargin);
  const estimatedProfit = estimatedResale - totalInvestment;

  return (
    <section id="strategic-products" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20"
          >
            <Package className="w-4 h-4 mr-2" />
            Oportunidades de Inversión
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Productos Estratégicos
          </h2>
          <p className="text-xl text-slate-400">
            Operaciones mayoristas verificadas con alta rentabilidad. Inversión mínima requerida: 5,000 USD.
          </p>
        </div>
        
        <div className="text-center mb-12">
          <p className="inline-block px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-rose-400 font-bold shadow-lg">
            Productos seleccionados de calidad premium para reventa profesional
          </p>
        </div>

        {/* Container Status Alert */}
        <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Ship className="w-8 h-8 text-indigo-400 mr-4" />
            <div>
              <h4 className="text-white font-bold text-lg">Contenedor Consolidado - Salida en 2 días</h4>
              <p className="text-indigo-300 text-sm">Estado: 70% ocupado. Opciones: Lote, Contenedor Compartido, Contenedor Completo.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs text-slate-400 mb-1">Capacidad Disponible</p>
              <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[30%]"></div>
              </div>
            </div>
            <a href="#custom-order" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-colors">
              Reservar Espacio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="lg:col-span-1 space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
            {products.map((product) => (
              <div 
                key={product.id}
                onClick={() => { setSelectedProduct(product); setShowSummary(false); }}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${selectedProduct.id === product.id ? 'bg-slate-900 border-rose-500 shadow-lg shadow-rose-900/20' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  <span className="text-xs font-bold px-2 py-1 bg-slate-800 text-slate-300 rounded">{product.flag}</span>
                </div>
                <p className="text-2xl font-black text-rose-500 mb-2">${product.price} <span className="text-sm text-slate-500 font-normal">USD / ud.</span></p>
                <div className="flex items-center text-xs text-slate-400">
                  <Package className="w-3 h-3 mr-1" />
                  Sugerido: {product.suggestedQty}
                </div>
              </div>
            ))}
          </div>

          {/* Product Details & Purchase Flow */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
            {!showSummary ? (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-rose-500/20 text-rose-400 text-xs font-bold rounded">Operación #A-{Math.floor(Math.random() * 9000) + 1000}</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> {selectedProduct.availability}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProduct.name}</h2>
                    <p className="text-slate-400">Categoría: {selectedProduct.category} | Complejidad: {selectedProduct.complexity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400 mb-1">Precio Mayorista</p>
                    <p className="text-4xl font-black text-white">${selectedProduct.price}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-bold mb-3">Escala de Precios</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.specs.map((spec, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3 italic">
                    * Precios mayoristas internacionales sujetos a volumen y disponibilidad
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/50 col-span-2 md:col-span-1">
                    <p className="text-xs text-slate-500 mb-1">Demanda</p>
                    <p className="text-sm font-bold text-white">{selectedProduct.demand}</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/50">
                    <p className="text-xs text-slate-500 mb-1">Rotación</p>
                    <p className="text-sm font-bold text-white">{selectedProduct.rotation}</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/50">
                    <p className="text-xs text-slate-500 mb-1">Recomendado para</p>
                    <p className="text-sm font-bold text-white">{selectedProduct.recommended}</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/50">
                    <p className="text-xs text-slate-500 mb-1">Historial Precio</p>
                    <p className="text-sm font-bold text-green-400">Estable</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-white font-bold mb-4">Configurar Operación</h4>
                  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 mb-4">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Cantidad a importar (Mínimo 15)</label>
                    <div className="flex items-center gap-4 mb-4">
                      <input 
                        type="number" 
                        min="15"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(15, parseInt(e.target.value) || 15))}
                        className="w-32 px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none text-center font-bold text-lg"
                      />
                      <span className="text-slate-400">{selectedProduct.id === 'fardos-premium' ? 'fardos' : 'unidades'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getQuickSuggestions(selectedProduct.id).map(qty => (
                        <button
                          key={qty}
                          onClick={() => setQuantity(Math.max(15, qty))}
                          className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${quantity === Math.max(15, qty) ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                        >
                          {qty} {selectedProduct.id === 'fardos-premium' ? 'fardos' : 'unidades'}
                        </button>
                      ))}
                    </div>
                    {selectedProduct.id === 'fardos-premium' && (
                      <p className="text-xs text-rose-400 mt-3 font-medium">
                        Disponible para operaciones de alto volumen y distribución mayorista
                      </p>
                    )}
                  </div>

                  <h4 className="text-white font-bold mb-4">Resumen de Operación</h4>
                  <div className="bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 rounded-xl p-6 mb-4">
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-800/50">
                      <div>
                        <p className="text-sm text-slate-400">Precio por unidad</p>
                        <p className="text-lg font-bold text-white">${unitPrice.toLocaleString('en-US', {maximumFractionDigits: 0})} USD</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Cantidad seleccionada</p>
                        <p className="text-lg font-bold text-white">{quantity} {selectedProduct.id === 'fardos-premium' ? 'fardos' : 'unidades'}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm text-slate-400">Inversión Total</p>
                        <p className="text-xl font-bold text-white">${totalInvestment.toLocaleString('en-US', {maximumFractionDigits: 0})} USD</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-600 hidden md:block" />
                      <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm text-slate-400">Reventa Estimada</p>
                        <p className="text-xl font-bold text-white">${estimatedResale.toLocaleString('en-US', {maximumFractionDigits: 0})} USD</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-600 hidden md:block" />
                      <div className="text-center md:text-left">
                        <p className="text-sm text-rose-400 font-bold uppercase tracking-wider mb-1">Ganancia Neta</p>
                        <p className="text-4xl font-black text-rose-500">${estimatedProfit.toLocaleString('en-US', {maximumFractionDigits: 0})} USD</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-3 text-center">
                    <p className="text-indigo-300 text-sm font-medium">💡 Clientes exitosos invierten entre 15,000 USD y 50,000 USD</p>
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setShowSummary(true)}
                    className="flex-1 py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 flex items-center justify-center"
                  >
                    Confirmar Operación
                  </button>
                  <a 
                    href={`https://wa.me/50584510505?text=Hola, quiero cotizar la operación de ${selectedProduct.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 transition-colors flex items-center justify-center"
                  >
                    Consultar Asesor
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="summary"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <button onClick={() => setShowSummary(false)} className="text-slate-400 hover:text-white mr-4">
                    ← Volver
                  </button>
                  <h2 className="text-2xl font-bold text-white">Resumen de Operación</h2>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 mb-8">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Producto</span>
                    <span className="text-white font-bold">{selectedProduct.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Cantidad</span>
                    <span className="text-white font-bold">{quantity} {selectedProduct.id === 'fardos-premium' ? 'fardos' : 'unidades'}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Inversión Estimada</span>
                    <span className="text-white font-bold">${totalInvestment.toLocaleString('en-US', {maximumFractionDigits: 0})} USD</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Desglose de Costos</span>
                    <span className="text-slate-300 text-sm">Producto / Envío / Gestión Aduanera</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-rose-400 font-bold">Pago Inicial Requerido (50%)</span>
                    <span className="text-2xl font-black text-rose-500">${(totalInvestment / 2).toLocaleString('en-US', {maximumFractionDigits: 0})} USD</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 mb-8 flex items-start">
                  <ShieldCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400">
                    Para iniciar la operación se requiere un pago inicial del 50%. Operación verificada y confidencial. Proveedores auditados.
                  </p>
                </div>

                <div className="mt-auto">
                  <a 
                    href="https://link.mercadopago.com.ar/camdiaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 flex items-center justify-center group"
                  >
                    PAGAR 50% INICIAL
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Serás redirigido a Mercado Pago para un pago seguro.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
