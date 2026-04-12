import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Distribuidor Mayorista",
    content: "Excelente servicio, importé un contenedor de fardos sin problemas. La rentabilidad fue exactamente la que proyectó el simulador.",
    rating: 5
  },
  {
    name: "Laura Sánchez",
    role: "Tienda de Electrónica",
    content: "Muy confiables, recomiendo para reventa. Me consiguieron un lote de smartphones OEM con mi propio empaque. El proceso fue transparente.",
    rating: 5
  },
  {
    name: "Roberto Gómez",
    role: "Emprendedor",
    content: "Al principio tenía dudas sobre importar desde China, pero Atlas se encargó de todo. La calidad de los productos superó mis expectativas.",
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
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-rose-500/30 transition-colors">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-rose-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
