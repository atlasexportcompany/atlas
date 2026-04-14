import { motion, AnimatePresence } from 'motion/react';
import { Package, Globe, TrendingUp, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { useState } from 'react';

const countries = [
  { id: 'AR', name: 'Argentina' }, { id: 'MX', name: 'México' }, { id: 'CO', name: 'Colombia' }, { id: 'CL', name: 'Chile' }, { id: 'PE', name: 'Perú' }, { id: 'ES', name: 'España' }, { id: 'US', name: 'Estados Unidos' }
];

const operationTypes = [
  { id: 'lote', name: 'Lote Menor' },
  { id: 'compartido', name: 'Contenedor Compartido' },
  { id: 'completo', name: 'Contenedor Completo' },
];

const products = [
  {
    id: 'iphone-17',
    name: 'Smartphones Gama Alta',
    price: 1050,
    cost: { min: 1000, max: 1100 },
    resale: { min: 1200, max: 1400, demand: 'Alta' },
    suggestedQty: '20-50 unidades',
    category: 'Tecnología',
    flag: 'USA',
  },
  {
    id: 'smart-tv-55',
    name: 'Smart TV 55" 4K UHD Premium',
    price: 820,
    cost: { min: 800, max: 900 },
    resale: { min: 1100, max: 1400, demand: 'Alta' },
    suggestedQty: 'Contenedor compartido',
    category: 'Electrónica',
    flag: 'China',
  },
  {
    id: 'laptop-corp',
    name: 'Laptop Empresarial i7 Alta Gama',
    price: 900,
    cost: { min: 800, max: 1000 },
    resale: { min: 1200, max: 1500, demand: 'Alta' },
    suggestedQty: '20-100 unidades',
    category: 'Informática',
    flag: 'China',
  },
  {
    id: 'ps5',
    name: 'PlayStation 5 Slim o Standard',
    price: 800,
    cost: { min: 750, max: 900 },
    resale: { min: 950, max: 1200, demand: 'Muy Alta' },
    suggestedQty: '20-50 unidades',
    category: 'Entretenimiento',
    flag: 'USA',
  },
  {
    id: 'xbox',
    name: 'Xbox Series X',
    price: 750,
    cost: { min: 700, max: 850 },
    resale: { min: 950, max: 1150, demand: 'Muy Alta' },
    suggestedQty: '20-50 unidades',
    category: 'Entretenimiento',
    flag: 'USA',
  },
  {
    id: 'zapatillas',
    name: 'Zapatillas Deportivas Premium',
    price: 80,
    cost: { min: 80, max: 90 },
    resale: { min: 130, max: 200, demand: 'Alta' },
    suggestedQty: '50-100 pares',
    category: 'Calzado',
    flag: 'China',
  },
  {
    id: 'ropa-deportiva',
    name: 'Ropa Deportiva Alta Calidad',
    price: 35,
    cost: { min: 25, max: 40 },
    resale: { min: 80, max: 140, demand: 'Alta' },
    suggestedQty: '100-300 prendas',
    category: 'Textiles',
    flag: 'China',
  },
  {
    id: 'accesorios-celular',
    name: 'Accesorios para Celular Alta Rotación',
    price: 8,
    cost: { min: 5, max: 10 },
    resale: { min: 15, max: 30, demand: 'Constante' },
    suggestedQty: '200-500 unidades',
    category: 'Accesorios',
    flag: 'China',
  }
];

export default function StrategicProducts() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [selectedCountry, setSelectedCountry] = useState('AR');
  const [operationType, setOperationType] = useState('lote');
  const [quantity, setQuantity] = useState(50);
  
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    city: '',
    email: '',
    whatsapp: '',
    sellingTime: '',
    paymentMethod: 'Transferencia',
    receipt: null as File | null
  });

  const [operationId, setOperationId] = useState('');
  
  const [isValidating, setIsValidating] = useState(false);
  const [validationProgress, setValidationProgress] = useState(0);
  const [validationText, setValidationText] = useState('Verificando transacción...');
  const [isValidated, setIsValidated] = useState(false);

  const product = products.find(p => p.id === selectedProduct)!;
  
  let unitCost = product.cost.max;
  if (operationType === 'compartido') unitCost = (product.cost.min + product.cost.max) / 2;
  if (operationType === 'completo') unitCost = product.cost.min;

  const totalInvestment = unitCost * quantity;
  const avgResalePrice = (product.resale.min + product.resale.max) / 2;
  const totalRevenue = avgResalePrice * quantity;
  const netProfit = totalRevenue - totalInvestment;
  const margin = (netProfit / totalRevenue) * 100;

  const handleNext = () => {
    if (step === 3) {
      setOperationId(`ATX-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    }
    setStep((prev) => (prev + 1) as any);
  };

  const handleBack = () => {
    setStep((prev) => (prev - 1) as any);
  };

  const handleStartValidation = () => {
    setStep(5);
    setIsValidating(true);
    setValidationProgress(0);
    setIsValidated(false);
    setValidationText('Verificando transacción...');

    const totalTime = 6000; // 6 seconds
    const intervalTime = 100;
    const steps = totalTime / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = (currentStep / steps) * 100;
      setValidationProgress(progress);

      if (progress > 30 && progress < 60) {
        setValidationText('Validando datos...');
      } else if (progress >= 60 && progress < 100) {
        setValidationText('Confirmando operación...');
      }

      if (progress >= 100) {
        clearInterval(interval);
        setIsValidating(false);
        setIsValidated(true);
      }
    }, intervalTime);
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hola, ya realicé el pago del 50% para mi operación.

ID: ${operationId}
Producto: ${product.name}
Cantidad: ${quantity}
Monto enviado: ${(totalInvestment / 2).toLocaleString('en-US', {maximumFractionDigits: 0})} USD

Adjunto comprobante.`;

    const whatsappUrl = `https://wa.me/50584510505?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSubmit = () => {
    const subject = `Comprobante de Pago - Operación ${operationId}`;
    const body = `Hola, adjunto el comprobante de pago del 50% para mi operación.

Datos del cliente:
Nombre/Empresa: ${formData.name}
País: ${formData.country}
Ciudad/Puerto: ${formData.city}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Tiempo estimado de venta: ${formData.sellingTime}

Datos de la operación:
ID: ${operationId}
Producto: ${product.name}
Cantidad: ${quantity}
Monto enviado: ${(totalInvestment / 2).toLocaleString('en-US', {maximumFractionDigits: 0})} USD
Método de pago: ${formData.paymentMethod}

Por favor, confirmar recepción.`;

    const mailtoUrl = `mailto:contacto@atlasexport.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="strategic-products" className="py-24 bg-slate-950 border-t border-slate-900 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {step < 5 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Configurar Operación</h2>
              <span className="text-rose-500 font-bold bg-rose-500/10 px-3 py-1 rounded-full text-sm">
                Paso {step} de 4
              </span>
            </div>
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
              <motion.div 
                className="bg-rose-500 h-full"
                initial={{ width: `${((step - 1) / 4) * 100}%` }}
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-rose-500" />
                  Selección de Producto
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Producto</label>
                  <select 
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                  >
                    {products.map(p => <option key={p.id} value={p.id}>{p.name} - {p.flag}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">País Destino</label>
                  <select 
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none transition-all"
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
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                  />
                </div>

                <button 
                  onClick={handleNext}
                  className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 mt-8"
                >
                  Continuar
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center mb-6">
                  <button onClick={handleBack} className="text-slate-400 hover:text-white mr-4">← Volver</button>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-rose-500" />
                    Proyección de Rentabilidad
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      <TrendingUp className="w-4 h-4 mr-1" /> Reventa est.: ${product.resale.min} - ${product.resale.max} USD/ud
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

                <button 
                  onClick={handleNext}
                  className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20"
                >
                  Continuar a Datos de Envío
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center mb-6">
                  <button onClick={handleBack} className="text-slate-400 hover:text-white mr-4">← Volver</button>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-rose-500" />
                    Datos de Operación y Envío
                  </h3>
                </div>

                <div className="space-y-4">
                  <input type="text" placeholder="Nombre / Empresa" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="País" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} />
                    <input type="text" placeholder="Ciudad / Puerto de destino" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    <input type="tel" placeholder="WhatsApp" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">¿En cuánto tiempo planeás vender esta mercadería?</label>
                    <select 
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 outline-none"
                      value={formData.sellingTime}
                      onChange={e => setFormData({...formData, sellingTime: e.target.value})}
                    >
                      <option value="" disabled>Seleccionar tiempo estimado</option>
                      <option value="Menos de 1 mes">Menos de 1 mes</option>
                      <option value="1 a 3 meses">1 a 3 meses</option>
                      <option value="3 a 6 meses">3 a 6 meses</option>
                      <option value="Más de 6 meses">Más de 6 meses</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={handleNext}
                  disabled={!formData.name || !formData.country || !formData.city || !formData.email || !formData.whatsapp || !formData.sellingTime}
                  className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                >
                  Continuar a Pago
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center mb-6">
                  <button onClick={handleBack} className="text-slate-400 hover:text-white mr-4">← Volver</button>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2 text-rose-500" />
                    Reserva y Pago
                  </h3>
                </div>

                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 mb-6">
                  <h4 className="text-white font-bold mb-4 border-b border-slate-800 pb-2">Resumen de la Operación</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-slate-400">ID Operación:</span> <span className="text-white font-bold">{operationId}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Producto:</span> <span className="text-white font-bold">{product.name}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Cantidad:</span> <span className="text-white font-bold">{quantity} unidades</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Destino:</span> <span className="text-white font-bold">{formData.city}, {formData.country}</span></div>
                    <div className="flex justify-between pt-3 border-t border-slate-800"><span className="text-slate-400">Inversión Total:</span> <span className="text-white font-bold">${totalInvestment.toLocaleString('en-US', {maximumFractionDigits: 0})} USD</span></div>
                  </div>
                </div>

                <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-6 text-center mb-6">
                  <p className="text-rose-400 font-bold mb-2 text-lg">Pago Inicial (50%)</p>
                  <p className="text-4xl font-black text-white mb-4">${(totalInvestment / 2).toLocaleString('en-US', {maximumFractionDigits: 0})} USD</p>
                  <p className="text-sm text-rose-200">
                    El pago inicial del 50% se utiliza para asegurar stock, cubrir logística internacional y reservar tu operación.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a 
                    href="https://link.mercadopago.com.ar/camdiaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#009EE3] text-white rounded-xl font-bold text-lg hover:bg-[#0080B7] transition-colors flex items-center justify-center"
                  >
                    Pagar 50%
                  </a>
                  <button 
                    onClick={handleStartValidation} 
                    className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 transition-colors flex items-center justify-center"
                  >
                    Ya realicé el pago
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="validation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                {isValidating ? (
                  <div className="flex flex-col items-center justify-center">
                    <Loader2 className="w-16 h-16 text-rose-500 animate-spin mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-2">Validando pago</h2>
                    <p className="text-slate-400 mb-8">{validationText}</p>
                    
                    <div className="w-full max-w-md bg-slate-950 rounded-full h-3 mb-2 overflow-hidden border border-slate-800">
                      <motion.div 
                        className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${validationProgress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                      />
                    </div>
                    <p className="text-slate-500 text-sm font-medium">{Math.round(validationProgress)}% completado</p>
                  </div>
                ) : isValidated ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Pago registrado correctamente</h2>
                    <p className="text-lg text-slate-400 mb-8">
                      Tu operación está en proceso de validación y preparación logística.
                    </p>
                    <p className="text-slate-500 mb-8">ID de operación: <span className="text-white font-bold">{operationId}</span></p>
                    
                    <div className="w-full max-w-md space-y-4 text-left">
                      <div className="relative mb-6">
                        <input type="file" id="receipt" className="hidden" onChange={e => setFormData({...formData, receipt: e.target.files?.[0] || null})} accept="image/*,.pdf" />
                        <label htmlFor="receipt" className="w-full px-4 py-4 bg-slate-900 border border-slate-700 text-slate-300 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors font-bold">
                          {formData.receipt ? formData.receipt.name : 'Subir comprobante (Imagen o PDF)'}
                        </label>
                      </div>

                      <button onClick={handleWhatsAppSubmit} className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-colors flex items-center justify-center">
                        Enviar comprobante por WhatsApp
                      </button>
                      <button onClick={handleEmailSubmit} className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 transition-colors flex items-center justify-center">
                        Enviar comprobante por Email
                      </button>
                    </div>
                  </div>
                ) : null}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
