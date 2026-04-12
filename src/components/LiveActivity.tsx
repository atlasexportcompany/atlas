import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, ShoppingBag, Globe, Package } from 'lucide-react';

const notifications = [
  { text: "Eduardo compró un contenedor de fardos", icon: <Package className="w-4 h-4 text-rose-500" />, time: "Hace 2 min" },
  { text: "María solicitó cotización de 200 celulares", icon: <ShoppingBag className="w-4 h-4 text-rose-500" />, time: "Hace 5 min" },
  { text: "Cliente en México cotizó televisores Smart TV", icon: <Globe className="w-4 h-4 text-rose-500" />, time: "Hace 12 min" },
  { text: "Hace 1 semana, Emilia compró 5 televisores para reventa", icon: <ShoppingBag className="w-4 h-4 text-rose-500" />, time: "Historial" },
  { text: "Hace 3 días, Juan importó ropa premium", icon: <Package className="w-4 h-4 text-rose-500" />, time: "Historial" },
  { text: "Nuevo proveedor verificado en Shenzhen", icon: <Globe className="w-4 h-4 text-rose-500" />, time: "Hace 1 hora" }
];

export default function LiveActivity() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500); // Wait for exit animation
      
    }, 8000); // Show new notification every 8 seconds

    return () => clearInterval(cycleInterval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
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
                {notifications[currentIndex].text}
              </p>
              <div className="flex items-center mt-2 space-x-2">
                {notifications[currentIndex].icon}
                <span className="text-xs text-slate-400">{notifications[currentIndex].time}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
