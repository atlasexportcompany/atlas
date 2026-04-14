import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Distribuidor mayorista – México",
    content: "Importé un contenedor de fardos premium (aprox 400 unidades) y la verdad al principio tenía dudas por el tema aduanero. Pero el equipo me fue guiando paso a paso. Vendí casi todo en 3 semanas y ya estoy preparando la segunda reserva.",
    rating: 5
  },
  {
    name: "Laura Sánchez",
    role: "Retail electrónica – Colombia",
    content: "Compré 50 smartphones gama alta para probar el mercado y me sorprendió la rotación. En menos de un mes recuperé la inversión y ya estoy viendo de subir a 100 unidades. La calidad llegó tal cual lo prometido.",
    rating: 5
  },
  {
    name: "Roberto Gómez",
    role: "Importador independiente – Chile",
    content: "Arranqué con una inversión chica de 8 mil USD en zapatillas y ropa deportiva. No esperaba vender tan rápido. Lo bueno es que te dicen qué productos rotan de verdad, no te dejan solo.",
    rating: 5
  },
  {
    name: "Andrés Ruiz",
    role: "Distribuidor – Argentina",
    content: "Reservé espacio en contenedor compartido con televisores 55 pulgadas. Me gustó que todo fue claro desde el inicio, sin costos ocultos. Ya estoy evaluando pasar a contenedor completo.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-6 border border-rose-500/20">
            <Star className="w-4 h-4 mr-2" />
            Experiencias Reales
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados de nuestros clientes
          </h2>
          <p className="text-lg text-slate-400">
            Inversores y distribuidores que ya están escalando sus operaciones internacionales con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/30 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-16 h-16 text-rose-500" />
              </div>
              <div className="flex mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-rose-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10 italic">
                {testimonial.content}
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mr-4 border border-slate-700">
                  <span className="text-rose-400 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-base">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
