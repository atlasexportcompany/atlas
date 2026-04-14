import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, ShoppingBag, Globe, Package, CheckCircle2 } from 'lucide-react';

const notifications = [
  { text: "Cliente en México compró televisores", icon: <ShoppingBag className="w-4 h-4 text-rose-500" /> },
  { text: "Proveedor verificado en Shenzhen", icon: <Globe className="w-4 h-4 text-rose-500" /> },
  { text: "Operación confirmada en Colombia", icon: <CheckCircle2 className="w-4 h-4 text-rose-500" /> },
  { text: "Nuevo contenedor consolidado hacia Argentina", icon: <Package className="w-4 h-4 text-rose-500" /> },
  { text: "Cliente en Chile reservó 50 Laptops i7", icon: <ShoppingBag className="w-4 h-4 text-rose-500" /> },
  { text: "Lote de consolas PS5 despachado", icon: <Package className="w-4 h-4 text-rose-500" /> }
];

export default function LiveActivity() {
  const [currentNotification, setCurrentNotification] = useState<typeof notifications[0] | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleNextNotification = () => {
      // Random time between 5 and 7 minutes (300,000 to 420,000 ms)
      const nextTime = Math.floor(Math.random() * (420000 - 300000 + 1)) + 300000;
      
      timeoutId = setTimeout(() => {
        // Pick a random notification
        const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
        setCurrentNotification(randomNotif);

        // Hide after 8 seconds
        setTimeout(() => {
          setCurrentNotification(null);
          scheduleNextNotification(); // Schedule the next one after hiding
        }, 8000);
      }, nextTime);
    };

    // Initial schedule
    scheduleNextNotification();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {currentNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
            className="bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-2xl shadow-rose-900/20 rounded-2xl p-4 flex items-start max-w-sm pointer-events-auto"
          >
            <div className="bg-rose-500/10 border border-rose-500/20 p-2 rounded-full mr-4 mt-1">
              <Bell className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-white leading-snug">
                {currentNotification.text}
              </p>
              <div className="flex items-center mt-2 space-x-2">
                {currentNotification.icon}
                <span className="text-xs text-slate-400">Hace un momento</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
