import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, FlaskConical, Clock, Receipt } from "lucide-react";

const painPoints = [
  {
    icon: FlaskConical,
    title: "El Misterio del Agua Verde",
    description:
      "Despierta un día y tu cristalina piscina parece un estanque. ¿pH? ¿Algas? ¿Cloro? Nadie te enseñó química para esto.",
  },
  {
    icon: Clock,
    title: "Fines de Semana Perdidos",
    description:
      "Mientras otros disfrutan, tú pasas horas con el limpiafondos, el skimmer y probando químicos que nunca funcionan como deberían.",
  },
  {
    icon: Receipt,
    title: "Facturas de Químicos Inesperadas",
    description:
      "Compras productos que prometen milagros y terminas gastando más de lo que imaginabas, sin resultados visibles.",
  },
  {
    icon: AlertTriangle,
    title: "El Terror de la Corrosión",
    description:
      "Ese óxido en el filtro, las manchas en las paredes... Un descuido hoy puede costarte miles mañana en reparaciones.",
  },
];

const PainSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 lg:py-28 bg-brand-pain-light relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cc3300' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-destructive font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            ⚠️ ¿Te suena familiar?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Los Problemas Clásicos que{" "}
            <span className="text-destructive">Te Quitan el Sueño</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Si alguno de estos problemas te resulta familiar, no estás solo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pain-card group"
            >
              <div className="pain-icon w-12 h-12 md:w-14 md:h-14 group-hover:scale-110 transition-transform duration-300">
                <pain.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                {pain.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
