import { motion } from 'motion/react';
import { Search, Calculator, FileText, CreditCard, Ship, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-rose-500" />,
      title: "1. Solicitud de producto",
      description: "Nos indicas exactamente qué necesitas importar, cantidades y especificaciones técnicas."
    },
    {
      icon: <FileText className="w-6 h-6 text-rose-500" />,
      title: "2. Análisis de viabilidad",
      description: "Nuestro equipo evalúa proveedores, regulaciones aduaneras y factibilidad de la operación."
    },
    {
      icon: <Calculator className="w-6 h-6 text-rose-500" />,
      title: "3. Cotización completa",
      description: "Presentamos un desglose total: costo en origen, flete internacional, impuestos y gestión."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-rose-500" />,
      title: "4. Confirmación (50%)",
      description: "Inicias la operación abonando únicamente el 50% del valor total cotizado."
    },
    {
      icon: <Ship className="w-6 h-6 text-rose-500" />,
      title: "5. Ejecución logística",
      description: "Coordinamos compra, inspección de calidad, embarque y trámites de aduana."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-rose-500" />,
      title: "6. Entrega final",
      description: "Recibes la mercancía lista para comercializar y abonas el 50% restante."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cómo funciona realmente
          </h2>
          <p className="text-lg text-slate-400">
            Un proceso estructurado, transparente y diseñado para minimizar riesgos en cada etapa de la importación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-900/20 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <span className="text-6xl font-black">{index + 1}</span>
              </div>
              <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center shadow-sm border border-slate-800 mb-6 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
