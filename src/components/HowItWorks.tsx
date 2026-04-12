import { motion } from 'motion/react';
import { Search, Calculator, Ship, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "1. Solicitud & Sourcing",
      description: "Nos dices qué producto necesitas. Nuestro equipo lo busca en mercados internacionales (China, USA, etc.) asegurando calidad y precio."
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "2. Cotización Transparente",
      description: "Recibes un desglose completo: costo del producto, logística internacional, impuestos y nuestro margen. Sin sorpresas."
    },
    {
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      title: "3. Importación & Logística",
      description: "Nos encargamos de todo el proceso de compra, aduanas y envío (aéreo o marítimo) hasta tu región."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
      title: "4. Entrega & Escala",
      description: "Recibes tu mercancía lista para vender. Optimiza tu tiempo y enfócate en hacer crecer tu negocio."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tu Agente de Importación Digital
          </h2>
          <p className="text-lg text-slate-400">
            Simplificamos el comercio internacional. Un proceso claro, profesional y diseñado para maximizar tu rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/20 transition-all"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center shadow-sm border border-slate-700 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
