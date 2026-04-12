import { Globe, Menu, X, Search, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Textiles', href: '#textiles' },
    { name: 'Tecnología', href: '#tecnologia' },
    { name: 'Pedidos Personalizados', href: '#custom-order' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-slate-800">
      {/* Top Bar - Contact Info */}
      <div className="hidden md:block bg-slate-950 border-b border-slate-900 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end space-x-6 text-xs font-medium text-slate-400">
          <a href="mailto:atlasexportcompany@gmail.com" className="flex items-center hover:text-rose-400 transition-colors">
            <Mail className="w-3 h-3 mr-2" />
            atlasexportcompany@gmail.com
          </a>
          <a href="https://wa.me/50584510505" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-rose-400 transition-colors">
            <Phone className="w-3 h-3 mr-2" />
            +505 8451 0505
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Globe className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-bold tracking-tight text-white">
              ATLAS EXPORT
            </span>
          </div>
          
          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500 group-focus-within:text-rose-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-700 rounded-full leading-5 bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all sm:text-sm"
                placeholder="Buscar operaciones, servicios, destinos..."
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-rose-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/50584510505" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-4 py-4">
            <div className="relative w-full mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                placeholder="Buscar operaciones..."
              />
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-800 space-y-3">
                <a href="mailto:atlasexportcompany@gmail.com" className="flex items-center text-slate-400 px-3">
                  <Mail className="w-5 h-5 mr-3" />
                  atlasexportcompany@gmail.com
                </a>
                <a
                  href="https://wa.me/50584510505"
                  className="flex items-center justify-center w-full bg-rose-600 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-rose-700"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
