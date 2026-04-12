import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Distribuidor Mayorista, México",
    content: "Operación de contenedor de 40 pies con fardos textiles gestionada sin contratiempos. La rentabilidad final coincidió con la proyección inicial del equipo, permitiendo una rápida rotación de inventario.",
    rating: 5
  },
  {
    name: "Laura Sánchez",
    role: "Retailer de Electrónica, Colombia",
    content: "Sourcing de lote de smartphones OEM completado exitosamente. El equipo de Atlas gestionó la personalización del empaque y las auditorías de calidad en Shenzhen antes del embarque.",
    rating: 5
  },
  {
    name: "Roberto Gómez",
    role: "Importador Industrial, Chile",
    content: "Transición exitosa de compras minoristas a importación directa de maquinaria ligera. La gestión aduanera y logística fue transparente, reduciendo nuestros costos de adquisición en un 35%.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reputación Global
          </h2>
          <p className="text-lg text-slate-400">
            Cientos de clientes confían en nosotros para escalar sus negocios de reventa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors">
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-rose-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-3 border border-slate-700">
                  <span className="text-slate-400 font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
