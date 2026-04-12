import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo manejan los trámites de aduana?",
    answer: "Nos encargamos del 100% del proceso aduanero. Nuestro equipo de agentes aduanales gestiona la clasificación arancelaria, el pago de impuestos y la liberación de la mercancía. El costo estimado de estos trámites ya viene incluido en tu cotización inicial."
  },
  {
    question: "¿Cuáles son los tiempos reales de entrega?",
    answer: "Depende del origen y el método de envío. Desde Estados Unidos (aéreo) suele tomar de 7 a 20 días. Desde China (marítimo), el estándar es de 15 a 45 días. Siempre te daremos un estimado realista antes de confirmar tu pedido."
  },
  {
    question: "¿Qué riesgos existen y cómo me protegen?",
    answer: "El principal riesgo en importación es la calidad del proveedor. Lo mitigamos trabajando solo con fábricas verificadas y realizando inspecciones de calidad antes del embarque. Además, el esquema de pago 50/50 protege tu capital hasta que la mercancía esté lista."
  },
  {
    question: "¿Puedo importar si no soy una empresa registrada?",
    answer: "Sí. Dependiendo de tu país, podemos realizar la importación a nombre de nuestra comercializadora y entregarte la mercancía con factura local, o asesorarte para que te registres como importador si planeas escalar tu negocio."
  },
  {
    question: "¿Qué pasa si la mercancía llega dañada?",
    answer: "Todos nuestros envíos internacionales cuentan con seguro de carga. En el raro caso de daño o pérdida durante el tránsito, gestionamos el reclamo con la aseguradora para proteger tu inversión."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas Frecuentes
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-800 rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'bg-slate-900 border-rose-500/30' : 'bg-slate-900/50 hover:bg-slate-900'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-rose-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
