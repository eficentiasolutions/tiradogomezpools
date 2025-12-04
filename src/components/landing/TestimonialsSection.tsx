import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Propietaria en Valencia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote:
      "Antes pasaba cada fin de semana luchando con el pH de mi piscina. Ahora simplemente la disfruto. El equipo es profesional y siempre disponible.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Chalet en Madrid",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote:
      "La inspección gratuita me salvó de una fuga que no había detectado. Habrían sido miles de euros en reparaciones. 100% recomendados.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Comunidad de Vecinos",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote:
      "Gestionan la piscina de nuestra comunidad desde hace 3 años. Cero quejas de los vecinos y siempre está impecable. Precio muy competitivo.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            💬 Testimonios Reales
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Lo que Dicen Nuestros{" "}
            <span className="gradient-text">Clientes Felices</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Historias reales de propietarios que recuperaron su tiempo libre
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-secondary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 md:mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
            Certificados y asociaciones
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-60">
            <div className="text-lg md:text-2xl font-bold text-foreground">
              ISO 9001
            </div>
            <div className="text-lg md:text-2xl font-bold text-foreground">
              ASOFAP
            </div>
            <div className="text-lg md:text-2xl font-bold text-foreground">
              AEPSA
            </div>
            <div className="text-lg md:text-2xl font-bold text-foreground">
              ECO-CERT
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
