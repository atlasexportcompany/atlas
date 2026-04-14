import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ShieldAlert } from 'lucide-react';

const faqs = [
  {
    question: "¿Y si pierdo mi dinero?",
    answer: "Operamos únicamente con proveedores verificados y cada operación incluye seguimiento completo desde origen hasta entrega final."
  },
  {
    question: "¿Esto es confiable?",
    answer: "Trabajamos con una red internacional de fabricantes y gestionamos todo el proceso logístico, aduanero y operativo."
  },
  {
    question: "¿Cuánto tarda?",
    answer: "Depende del tipo de carga, pero siempre informamos tiempos reales antes de confirmar la operación."
  },
  {
    question: "¿Por qué tengo que pagar 50%?",
    answer: "El pago inicial cubre costos operativos, adquisición de mercancía y reserva logística."
  },
  {
    question: "Nunca importé",
    answer: "Nos encargamos de todo el proceso. No necesitás experiencia previa."
  },
  {
    question: "¿Qué gano yo?",
    answer: "Nuestros clientes adquieren a precio mayorista internacional y venden en su mercado con márgenes competitivos."
  },
  {
    question: "¿Puedo empezar con poco?",
    answer: "Trabajamos con operaciones optimizadas desde 5,000 USD para asegurar rentabilidad real."
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
            <ShieldAlert className="w-4 h-4 mr-2" />
            Transparencia Total
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
