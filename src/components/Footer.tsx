import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-xl font-bold tracking-tight text-white">
                ATLAS EXPORT
              </span>
            </div>
            <p className="text-sm max-w-sm mb-4">
              Plataforma global de sourcing e importación mayorista. Operaciones seguras, verificadas y de alto volumen para inversores y empresas.
            </p>
            <p className="text-xs text-slate-500">
              Negocio registrado y operando bajo las normativas de comercio internacional vigentes.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#strategic-products" className="hover:text-rose-400 transition-colors">Oportunidades de Inversión</a></li>
              <li><a href="#simulator" className="hover:text-rose-400 transition-colors">Calculadora Universal</a></li>
              <li><a href="#financing" className="hover:text-rose-400 transition-colors">Línea de Crédito</a></li>
              <li><a href="#custom-order" className="hover:text-rose-400 transition-colors">Sourcing a Medida</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/50584510505" className="hover:text-rose-400 transition-colors">WhatsApp: +505 8451 0505</a></li>
              <li><a href="mailto:atlasexportcompany@gmail.com" className="hover:text-rose-400 transition-colors">atlasexportcompany@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Atlas Export Company. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
