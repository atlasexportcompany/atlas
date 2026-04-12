import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold tracking-tight text-white">
                ATLAS EXPORT
              </span>
            </div>
            <p className="text-sm max-w-sm">
              Plataforma global de sourcing e importación bajo demanda. Simplificamos el comercio internacional para que tú te enfoques en vender.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">Cómo Funciona</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Productos Base</a></li>
              <li><a href="#simulator" className="hover:text-blue-400 transition-colors">Simulador</a></li>
              <li><a href="#custom-order" className="hover:text-blue-400 transition-colors">Pedido Personalizado</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/1234567890" className="hover:text-blue-400 transition-colors">WhatsApp</a></li>
              <li><a href="mailto:contacto@atlasexport.com" className="hover:text-blue-400 transition-colors">contacto@atlasexport.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Atlas Export Company. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
