import { Globe2, TrendingUp, ShieldCheck } from 'lucide-react';

export default function CompanyHistory() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Atlas Export Company nació con una misión clara: democratizar el acceso a los mercados internacionales para empresas y emprendedores de cualquier tamaño.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Con años de experiencia en sourcing global, hemos construido una red de proveedores verificados en Asia, Norteamérica y Europa. Entendemos que la importación puede ser compleja, por eso diseñamos un sistema que elimina las barreras logísticas, aduaneras y de idioma.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Globe2 className="w-8 h-8 text-rose-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Red Global</h4>
                  <p className="text-sm text-slate-500">Conexión directa con fábricas y mayoristas internacionales.</p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="w-8 h-8 text-rose-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Sourcing Seguro</h4>
                  <p className="text-sm text-slate-500">Auditorías de calidad y verificación estricta de proveedores.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/20 to-indigo-600/20 rounded-3xl transform rotate-3 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop" 
              alt="Logística Global" 
              className="relative z-10 rounded-3xl shadow-2xl border border-slate-800 object-cover h-96 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
