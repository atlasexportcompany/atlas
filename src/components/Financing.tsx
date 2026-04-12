import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, CheckCircle2, Loader2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Financing() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'analyzing' | 'validating' | 'evaluating' | 'approved'>('idle');
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setProgress(0);

    // Simulate a thorough 5-7 minute analysis (accelerated for demo purposes to 10 seconds)
    const totalTime = 10000; 
    const intervalTime = 100;
    const steps = totalTime / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = (currentStep / steps) * 100;
      setProgress(currentProgress);

      if (currentProgress < 30) {
        setFormState('analyzing');
      } else if (currentProgress < 60) {
        setFormState('validating');
      } else if (currentProgress < 100) {
        setFormState('evaluating');
      } else {
        clearInterval(interval);
        setFormState('approved');
      }
    }, intervalTime);
  };

  const getStatusMessage = () => {
    switch (formState) {
      case 'analyzing': return "Analizando perfil y capital...";
      case 'validating': return "Validando historial comercial...";
      case 'evaluating': return "Aprobando línea de crédito...";
      case 'approved': return "Financiamiento aprobado";
      default: return "";
    }
  };

  return (
    <section id="financing" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20"
          >
            <ShieldCheck className="w-4 h-4 mr-2" />
            Financiamiento Corporativo
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Línea de Crédito Atlas
          </h2>
          <p className="text-xl text-slate-400">
            Evaluación rápida para operaciones mayoristas. Inicia tu importación abonando únicamente el 50% inicial.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/5">
          <AnimatePresence mode="wait">
            {formState === 'idle' && (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 md:p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Nombre completo / Empresa</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">País de Operación</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Inversión Estimada (USD)</label>
                      <input required type="number" min="5000" placeholder="Mínimo $5,000" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Producto de Interés</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Experiencia en Importación/Reventa</label>
                    <select required className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all">
                      <option value="">Selecciona una opción</option>
                      <option value="none">Primera importación</option>
                      <option value="1-3">1 a 3 años operando</option>
                      <option value="3+">Más de 3 años operando</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 flex items-center justify-center mt-8">
                    Solicitar Evaluación (5-7 min)
                  </button>
                </form>
              </motion.div>
            )}

            {(formState === 'analyzing' || formState === 'validating' || formState === 'evaluating' || formState === 'submitting') && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 md:p-24 flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <Loader2 className="w-16 h-16 text-rose-500 animate-spin mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4">Procesando Solicitud</h3>
                <p className="text-rose-400 text-lg font-medium mb-8 h-8 transition-all duration-300">
                  {getStatusMessage()}
                </p>
                
                <div className="w-full max-w-md bg-slate-950 rounded-full h-3 mb-2 overflow-hidden border border-slate-800">
                  <motion.div 
                    className="bg-gradient-to-r from-rose-600 to-rose-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear", duration: 1 }}
                  />
                </div>
                <p className="text-slate-500 text-sm">{Math.round(progress)}% completado</p>
                <p className="text-slate-600 text-xs mt-6 max-w-xs">
                  Por favor no cierres esta ventana. Nuestro sistema está evaluando tu perfil de riesgo y viabilidad de la operación.
                </p>
              </motion.div>
            )}

            {formState === 'approved' && (
              <motion.div
                key="approved"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 md:p-24 flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Línea de Crédito Aprobada</h3>
                <p className="text-slate-400 text-lg mb-10 max-w-md">
                  Tu perfil ha sido validado exitosamente. Puedes iniciar tu operación mayorista abonando únicamente el 50% inicial.
                </p>
                <a 
                  href="https://link.mercadopago.com.ar/camdiaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 flex items-center justify-center group"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  PAGAR 50% INICIAL
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-center text-xs text-slate-500 mt-4">
                  Serás redirigido a Mercado Pago para un pago seguro.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
