import { motion } from 'motion/react';
import { Filter, ChevronDown, Package, Smartphone, Tv, Laptop } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Fardos de Ropa Premium Mixto",
    category: "Textiles",
    price: "USD 250",
    image: "https://images.unsplash.com/photo-1528328483432-fd89288e2524?q=80&w=800&auto=format&fit=crop",
    tag: "Más vendido",
    specs: "45-55kg | 80-120 prendas"
  },
  {
    id: 2,
    name: "Fardos Streetwear & Vintage",
    category: "Textiles",
    price: "USD 280",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    tag: "Alta rentabilidad",
    specs: "Selección curada | 45kg"
  },
  {
    id: 3,
    name: "Lote Laptops Empresariales",
    category: "Tecnología",
    price: "USD 15,000",
    image: "https://images.unsplash.com/photo-1531297172820-f0a1ce00c80d?q=80&w=800&auto=format&fit=crop",
    tag: "Oportunidad",
    specs: "Lote x100 | Core i5/i7"
  },
  {
    id: 4,
    name: "Smartphones Gama Alta (OEM)",
    category: "Tecnología",
    price: "USD 8,500",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    tag: "Nuevo",
    specs: "Lote x50 | 256GB"
  },
  {
    id: 5,
    name: "Contenedor Smart TVs 55\"",
    category: "Tecnología",
    price: "USD 22,000",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop",
    tag: "",
    specs: "4K UHD | 120 Unidades"
  },
  {
    id: 6,
    name: "Fardos Ropa de Invierno",
    category: "Textiles",
    price: "USD 220",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    tag: "Temporada",
    specs: "Abrigos y Chaquetas | 50kg"
  }
];

export default function ProductCatalog() {
  return (
    <section id="catalog" className="py-24 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-rose-500" />
                  Filtros
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Categorías</h4>
                  <ul className="space-y-2">
                    <li>
                      <label className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-rose-500 bg-slate-800 border-slate-700 rounded focus:ring-rose-500 focus:ring-offset-slate-900" defaultChecked />
                        <span className="ml-3 text-slate-400 group-hover:text-white transition-colors">Todos</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-rose-500 bg-slate-800 border-slate-700 rounded focus:ring-rose-500 focus:ring-offset-slate-900" />
                        <span className="ml-3 text-slate-400 group-hover:text-white transition-colors">Textiles</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-rose-500 bg-slate-800 border-slate-700 rounded focus:ring-rose-500 focus:ring-offset-slate-900" />
                        <span className="ml-3 text-slate-400 group-hover:text-white transition-colors">Tecnología</span>
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Rango de Inversión</h4>
                  <ul className="space-y-2">
                    <li>
                      <label className="flex items-center cursor-pointer group">
                        <input type="radio" name="price" className="form-radio h-4 w-4 text-rose-500 bg-slate-800 border-slate-700 focus:ring-rose-500 focus:ring-offset-slate-900" />
                        <span className="ml-3 text-slate-400 group-hover:text-white transition-colors">Menos de $1,000</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center cursor-pointer group">
                        <input type="radio" name="price" className="form-radio h-4 w-4 text-rose-500 bg-slate-800 border-slate-700 focus:ring-rose-500 focus:ring-offset-slate-900" />
                        <span className="ml-3 text-slate-400 group-hover:text-white transition-colors">$1,000 - $10,000</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center cursor-pointer group">
                        <input type="radio" name="price" className="form-radio h-4 w-4 text-rose-500 bg-slate-800 border-slate-700 focus:ring-rose-500 focus:ring-offset-slate-900" />
                        <span className="ml-3 text-slate-400 group-hover:text-white transition-colors">Más de $10,000</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Catálogo de Importación</h2>
              <div className="flex items-center text-sm text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors">
                Ordenar por: Relevancia <ChevronDown className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/10 hover:border-slate-700 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.tag && (
                      <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {product.tag}
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg">
                      {product.category === 'Textiles' ? <Package className="w-4 h-4 text-slate-300" /> : <Tv className="w-4 h-4 text-slate-300" />}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="text-xs text-rose-400 font-medium mb-2 uppercase tracking-wider">{product.category}</div>
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-slate-400 mb-4">{product.specs}</p>
                    
                    <div className="flex items-end justify-between mt-4 pt-4 border-t border-slate-800">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Inversión est.</p>
                        <p className="text-xl font-bold text-white">{product.price}</p>
                      </div>
                      <a 
                        href="https://wa.me/50584510505" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800 text-white hover:bg-rose-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-700 hover:border-rose-600"
                      >
                        Cotizar
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
