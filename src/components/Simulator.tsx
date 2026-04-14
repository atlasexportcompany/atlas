import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Globe, Package, TrendingUp, Info, CheckCircle2, ArrowRight, Loader2, ShoppingCart } from 'lucide-react';

const countries = [
  { id: 'AF', name: 'Afganistán' }, { id: 'AL', name: 'Albania' }, { id: 'DE', name: 'Alemania' }, { id: 'AD', name: 'Andorra' }, { id: 'AO', name: 'Angola' }, { id: 'AG', name: 'Antigua y Barbuda' }, { id: 'SA', name: 'Arabia Saudita' }, { id: 'DZ', name: 'Argelia' }, { id: 'AR', name: 'Argentina' }, { id: 'AM', name: 'Armenia' }, { id: 'AU', name: 'Australia' }, { id: 'AT', name: 'Austria' }, { id: 'AZ', name: 'Azerbaiyán' }, { id: 'BS', name: 'Bahamas' }, { id: 'BD', name: 'Bangladés' }, { id: 'BB', name: 'Barbados' }, { id: 'BH', name: 'Baréin' }, { id: 'BE', name: 'Bélgica' }, { id: 'BZ', name: 'Belice' }, { id: 'BJ', name: 'Benín' }, { id: 'BY', name: 'Bielorrusia' }, { id: 'MM', name: 'Birmania' }, { id: 'BO', name: 'Bolivia' }, { id: 'BA', name: 'Bosnia y Herzegovina' }, { id: 'BW', name: 'Botsuana' }, { id: 'BR', name: 'Brasil' }, { id: 'BN', name: 'Brunéi' }, { id: 'BG', name: 'Bulgaria' }, { id: 'BF', name: 'Burkina Faso' }, { id: 'BI', name: 'Burundi' }, { id: 'BT', name: 'Bután' }, { id: 'CV', name: 'Cabo Verde' }, { id: 'KH', name: 'Camboya' }, { id: 'CM', name: 'Camerún' }, { id: 'CA', name: 'Canadá' }, { id: 'QA', name: 'Catar' }, { id: 'TD', name: 'Chad' }, { id: 'CL', name: 'Chile' }, { id: 'CN', name: 'China' }, { id: 'CY', name: 'Chipre' }, { id: 'VA', name: 'Ciudad del Vaticano' }, { id: 'CO', name: 'Colombia' }, { id: 'KM', name: 'Comoras' }, { id: 'KP', name: 'Corea del Norte' }, { id: 'KR', name: 'Corea del Sur' }, { id: 'CI', name: 'Costa de Marfil' }, { id: 'CR', name: 'Costa Rica' }, { id: 'HR', name: 'Croacia' }, { id: 'CU', name: 'Cuba' }, { id: 'DK', name: 'Dinamarca' }, { id: 'DM', name: 'Dominica' }, { id: 'EC', name: 'Ecuador' }, { id: 'EG', name: 'Egipto' }, { id: 'SV', name: 'El Salvador' }, { id: 'AE', name: 'Emiratos Árabes Unidos' }, { id: 'ER', name: 'Eritrea' }, { id: 'SK', name: 'Eslovaquia' }, { id: 'SI', name: 'Eslovenia' }, { id: 'ES', name: 'España' }, { id: 'US', name: 'Estados Unidos' }, { id: 'EE', name: 'Estonia' }, { id: 'ET', name: 'Etiopía' }, { id: 'PH', name: 'Filipinas' }, { id: 'FI', name: 'Finlandia' }, { id: 'FJ', name: 'Fiyi' }, { id: 'FR', name: 'Francia' }, { id: 'GA', name: 'Gabón' }, { id: 'GM', name: 'Gambia' }, { id: 'GE', name: 'Georgia' }, { id: 'GH', name: 'Ghana' }, { id: 'GD', name: 'Granada' }, { id: 'GR', name: 'Grecia' }, { id: 'GT', name: 'Guatemala' }, { id: 'GY', name: 'Guyana' }, { id: 'GN', name: 'Guinea' }, { id: 'GQ', name: 'Guinea Ecuatorial' }, { id: 'GW', name: 'Guinea-Bisáu' }, { id: 'HT', name: 'Haití' }, { id: 'HN', name: 'Honduras' }, { id: 'HU', name: 'Hungría' }, { id: 'IN', name: 'India' }, { id: 'ID', name: 'Indonesia' }, { id: 'IQ', name: 'Irak' }, { id: 'IR', name: 'Irán' }, { id: 'IE', name: 'Irlanda' }, { id: 'IS', name: 'Islandia' }, { id: 'MH', name: 'Islas Marshall' }, { id: 'SB', name: 'Islas Salomón' }, { id: 'IL', name: 'Israel' }, { id: 'IT', name: 'Italia' }, { id: 'JM', name: 'Jamaica' }, { id: 'JP', name: 'Japón' }, { id: 'JO', name: 'Jordania' }, { id: 'KZ', name: 'Kazajistán' }, { id: 'KE', name: 'Kenia' }, { id: 'KG', name: 'Kirguistán' }, { id: 'KI', name: 'Kiribati' }, { id: 'KW', name: 'Kuwait' }, { id: 'LA', name: 'Laos' }, { id: 'LS', name: 'Lesoto' }, { id: 'LV', name: 'Letonia' }, { id: 'LB', name: 'Líbano' }, { id: 'LR', name: 'Liberia' }, { id: 'LY', name: 'Libia' }, { id: 'LI', name: 'Liechtenstein' }, { id: 'LT', name: 'Lituania' }, { id: 'LU', name: 'Luxemburgo' }, { id: 'MK', name: 'Macedonia del Norte' }, { id: 'MG', name: 'Madagascar' }, { id: 'MY', name: 'Malasia' }, { id: 'MW', name: 'Malaui' }, { id: 'MV', name: 'Maldivas' }, { id: 'ML', name: 'Malí' }, { id: 'MT', name: 'Malta' }, { id: 'MA', name: 'Marruecos' }, { id: 'MU', name: 'Mauricio' }, { id: 'MR', name: 'Mauritania' }, { id: 'MX', name: 'México' }, { id: 'FM', name: 'Micronesia' }, { id: 'MD', name: 'Moldavia' }, { id: 'MC', name: 'Mónaco' }, { id: 'MN', name: 'Mongolia' }, { id: 'ME', name: 'Montenegro' }, { id: 'MZ', name: 'Mozambique' }, { id: 'NA', name: 'Namibia' }, { id: 'NR', name: 'Nauru' }, { id: 'NP', name: 'Nepal' }, { id: 'NI', name: 'Nicaragua' }, { id: 'NE', name: 'Níger' }, { id: 'NG', name: 'Nigeria' }, { id: 'NO', name: 'Noruega' }, { id: 'NZ', name: 'Nueva Zelanda' }, { id: 'OM', name: 'Omán' }, { id: 'NL', name: 'Países Bajos' }, { id: 'PK', name: 'Pakistán' }, { id: 'PW', name: 'Palaos' }, { id: 'PA', name: 'Panamá' }, { id: 'PG', name: 'Papúa Nueva Guinea' }, { id: 'PY', name: 'Paraguay' }, { id: 'PE', name: 'Perú' }, { id: 'PL', name: 'Polonia' }, { id: 'PT', name: 'Portugal' }, { id: 'GB', name: 'Reino Unido' }, { id: 'CF', name: 'República Centroafricana' }, { id: 'CZ', name: 'República Checa' }, { id: 'CG', name: 'República del Congo' }, { id: 'CD', name: 'República Democrática del Congo' }, { id: 'DO', name: 'República Dominicana' }, { id: 'RW', name: 'Ruanda' }, { id: 'RO', name: 'Rumania' }, { id: 'RU', name: 'Rusia' }, { id: 'WS', name: 'Samoa' }, { id: 'KN', name: 'San Cristóbal y Nieves' }, { id: 'SM', name: 'San Marino' }, { id: 'VC', name: 'San Vicente y las Granadinas' }, { id: 'LC', name: 'Santa Lucía' }, { id: 'ST', name: 'Santo Tomé y Príncipe' }, { id: 'SN', name: 'Senegal' }, { id: 'RS', name: 'Serbia' }, { id: 'SC', name: 'Seychelles' }, { id: 'SL', name: 'Sierra Leona' }, { id: 'SG', name: 'Singapur' }, { id: 'SY', name: 'Siria' }, { id: 'SO', name: 'Somalia' }, { id: 'LK', name: 'Sri Lanka' }, { id: 'SZ', name: 'Suazilandia' }, { id: 'ZA', name: 'Sudáfrica' }, { id: 'SD', name: 'Sudán' }, { id: 'SS', name: 'Sudán del Sur' }, { id: 'SE', name: 'Suecia' }, { id: 'CH', name: 'Suiza' }, { id: 'SR', name: 'Surinam' }, { id: 'TH', name: 'Tailandia' }, { id: 'TZ', name: 'Tanzania' }, { id: 'TJ', name: 'Tayikistán' }, { id: 'TL', name: 'Timor Oriental' }, { id: 'TG', name: 'Togo' }, { id: 'TO', name: 'Tonga' }, { id: 'TT', name: 'Trinidad y Tobago' }, { id: 'TN', name: 'Túnez' }, { id: 'TM', name: 'Turkmenistán' }, { id: 'TR', name: 'Turquía' }, { id: 'TV', name: 'Tuvalu' }, { id: 'UA', name: 'Ucrania' }, { id: 'UG', name: 'Uganda' }, { id: 'UY', name: 'Uruguay' }, { id: 'UZ', name: 'Uzbekistán' }, { id: 'VU', name: 'Vanuatu' }, { id: 'VE', name: 'Venezuela' }, { id: 'VN', name: 'Vietnam' }, { id: 'YE', name: 'Yemen' }, { id: 'DJ', name: 'Yibuti' }, { id: 'ZM', name: 'Zambia' }, { id: 'ZW', name: 'Zimbabue' }
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
    name: 'Smart TV 55" 4K UHD Premium',
    cost: { min: 800, max: 900 },
    resale: { default: { min: 1100, max: 1400, demand: 'Alta' } }
  },
  {
    id: 'laptop',
    name: 'Laptop Empresarial i7 Alta Gama',
    cost: { min: 800, max: 1000 },
    resale: { default: { min: 1200, max: 1500, demand: 'Alta' } }
  },
  {
    id: 'ps5',
    name: 'PlayStation 5 Slim o Standard',
    cost: { min: 750, max: 900 },
    resale: { default: { min: 950, max: 1200, demand: 'Muy Alta' } }
  },
  {
    id: 'xbox',
    name: 'Xbox Series X',
    cost: { min: 700, max: 850 },
    resale: { default: { min: 950, max: 1150, demand: 'Muy Alta' } }
  },
  {
    id: 'fardos',
    name: 'Fardos Ropa Premium',
    cost: { min: 350, max: 350 },
    resale: { default: { min: 800, max: 1500, demand: 'Extrema' } }
  },
  {
    id: 'zapatillas',
    name: 'Zapatillas Deportivas Premium',
    cost: { min: 80, max: 90 },
    resale: { default: { min: 130, max: 200, demand: 'Alta' } }
  },
  {
    id: 'ropa-deportiva',
    name: 'Ropa Deportiva Alta Calidad',
    cost: { min: 25, max: 40 },
    resale: { default: { min: 80, max: 140, demand: 'Alta' } }
  },
  {
    id: 'accesorios',
    name: 'Accesorios Celular Alta Rotación',
    cost: { min: 5, max: 10 },
    resale: { default: { min: 15, max: 30, demand: 'Constante' } }
  }
];

export default function Simulator() {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0].id);
  const [selectedCountry, setSelectedCountry] = useState('AR');
  const [countrySearch, setCountrySearch] = useState('Argentina');
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
                  <input 
                    list="countries-list"
                    placeholder="Buscar país..."
                    value={countrySearch}
                    onChange={(e) => {
                      setCountrySearch(e.target.value);
                      const country = countries.find(c => c.name === e.target.value);
                      if (country) setSelectedCountry(country.id);
                    }}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  />
                  <datalist id="countries-list">
                    {countries.map(c => <option key={c.id} value={c.name} />)}
                  </datalist>
                  <p className="text-xs text-slate-500 mt-2">
                    Operamos en más de 180 países con logística internacional adaptada a cada mercado
                  </p>
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
                    Configura tu operación en el panel izquierdo y haz clic en Simular Rentabilidad para ver la proyección de mercado.
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
