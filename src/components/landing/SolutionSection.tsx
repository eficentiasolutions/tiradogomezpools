import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, FlaskConical, Wrench, Clock, Shield, Leaf } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Profesional",
    subtitle: "Adiós al agua verde",
    description:
      "Sistema de limpieza integral que devuelve el brillo cristalino a tu piscina en una sola sesión.",
    benefit: "Piscina lista para disfrutar en 24h",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FlaskConical,
    title: "Balance Químico Inteligente",
    subtitle: "Sin más adivinanzas",
    description:
      "Análisis profesional y dosificación exacta. Olvídate de pruebas constantes y productos que no funcionan.",
    benefit: "Ahorra hasta 40% en químicos",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    subtitle: "Protege tu inversión",
    description:
      "Detectamos y solucionamos problemas antes de que se conviertan en costosas reparaciones.",
    benefit: "Evita reparaciones de +2.000€",
    color: "from-indigo-500 to-purple-500",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Recupera 80h/año",
    description: "Tiempo que ahora dedicas al mantenimiento",
  },
  {
    icon: Shield,
    title: "Garantía Total",
    description: "Si no estás satisfecho, lo arreglamos gratis",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Productos respetuosos con el medio ambiente",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            ✨ La Solución
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transforma tu Piscina en un{" "}
            <span className="gradient-text">Oasis Sin Esfuerzo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nuestro equipo de expertos se encarga de todo para que tú solo
            tengas que disfrutar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <span className="text-secondary text-sm font-medium">
                {service.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="pt-4 border-t border-border">
                <span className="text-sm font-semibold text-secondary flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  {service.benefit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 bg-muted rounded-3xl p-8"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
