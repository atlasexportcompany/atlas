import { motion } from 'motion/react';
import { Package, Monitor, Briefcase } from 'lucide-react';

export default function OperationTypes() {
  return (
    <section id="operations" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tipos de Operaciones
          </h2>
          <p className="text-xl text-slate-400">
            Gestionamos importaciones a gran escala adaptadas a las necesidades de tu negocio. No somos una tienda minorista, somos tu brazo logístico internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
            <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/20">
              <Package className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Importación de Fardos Textiles</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Coordinamos la compra y envío de fardos de ropa premium desde Norteamérica y Asia. Ideal para distribuidores y mayoristas que buscan volumen y calidad constante con márgenes predecibles.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Volumen alto</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Calidad verificada</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Logística marítima optimizada</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
            <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/20">
              <Monitor className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Contenedores de Tecnología</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Sourcing directo de fábricas de electrónica. Desde lotes de smartphones OEM hasta contenedores de Smart TVs. Gestionamos certificaciones y controles de calidad estrictos antes del embarque.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Proveedores certificados</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Inspección pre-embarque</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Seguros de carga de alto valor</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
            <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/20">
              <Briefcase className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Pedidos Personalizados</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Búsqueda de maquinaria industrial, insumos específicos o desarrollo de productos marca blanca. Nuestro equipo en origen negocia directamente con los fabricantes para obtener las mejores condiciones.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Sourcing a medida</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Negociación de MOQ</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Auditoría de fábricas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
