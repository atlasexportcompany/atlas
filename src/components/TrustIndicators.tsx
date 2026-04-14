import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Globe2, Users2 } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
    title: "Proveedores Verificados",
    description: "Auditoría estricta de fábricas y distribuidores internacionales para garantizar autenticidad y calidad premium."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-rose-500" />,
    title: "Control de Calidad",
    description: "Inspección física de mercadería en origen antes del embarque, asegurando que recibas exactamente lo que invertiste."
  },
  {
    icon: <Globe2 className="w-8 h-8 text-rose-500" />,
    title: "Logística Internacional Completa",
    description: "Gestión end-to-end: desde la fábrica hasta tu almacén, incluyendo trámites aduaneros y fletes marítimos/aéreos."
  },
  {
    icon: <Users2 className="w-8 h-8 text-rose-500" />,
    title: "Acompañamiento Personalizado",
    description: "Asesoría estratégica en cada etapa de la operación, optimizando costos y maximizando tu rentabilidad."
  }
];

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Operaciones Seguras y Escalables
          </h2>
          <p className="text-xl text-slate-400">
            Operamos desde Nicaragua, punto estratégico cercano a proveedores internacionales, lo que nos permite acceder a mercadería de primera calidad antes que el mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-colors"
            >
              <div className="bg-rose-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
