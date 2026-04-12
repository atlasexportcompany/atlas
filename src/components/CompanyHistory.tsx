import { motion } from 'motion/react';
import { Globe, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CompanyHistory() {
  return (
    <section className="py-24 bg-black border-t border-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-900/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Nuestra Trayectoria
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              De resolver problemas locales a operar a escala global
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Atlas Export Company nació con un propósito claro: eliminar las barreras que impiden a las empresas acceder a los mercados internacionales. En nuestros inicios, identificamos que la mayoría de los importadores enfrentaban los mismos obstáculos: barreras de idioma, logística compleja y un alto riesgo al tratar con proveedores desconocidos.
              </p>
              <p>
                Comenzamos gestionando pequeñas operaciones de sourcing, asegurándonos de que cada contenedor llegara a su destino sin contratiempos. Esta dedicación nos permitió entender a fondo la cadena de suministro global y construir una infraestructura logística robusta.
              </p>
              <p>
                Hoy, hemos evolucionado hacia una plataforma integral que simplifica todo el proceso de importación. No somos un simple intermediario; somos el brazo logístico y estratégico de cientos de empresas que confían en nosotros para escalar sus operaciones.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20 mr-4">
                  <Globe className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Expansión global</h3>
              </div>
              <p className="text-slate-400">
                Mantenemos presencia activa y operaciones consolidadas en múltiples regiones, conectando los principales centros de manufactura en Asia y Norteamérica con mercados emergentes.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20 mr-4">
                  <ShieldCheck className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Red de proveedores</h3>
              </div>
              <p className="text-slate-400">
                Hemos desarrollado relaciones directas y duraderas con fábricas verificadas. Nuestro equipo en origen realiza auditorías constantes para garantizar estándares de calidad internacionales.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20 mr-4">
                  <ArrowRight className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Operación logística</h3>
              </div>
              <p className="text-slate-400">
                Ofrecemos gestión completa de importaciones. Desde la consolidación de carga hasta el despacho aduanero y la entrega final, controlamos cada eslabón de la cadena.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
