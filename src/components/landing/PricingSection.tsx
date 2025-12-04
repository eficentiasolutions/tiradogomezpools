import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "89",
    period: "/mes",
    description: "Perfecto para piscinas pequeñas y mantenimiento esencial",
    features: [
      "Limpieza semanal",
      "Control químico básico",
      "Revisión de filtros",
      "Soporte por email",
      "Informe mensual",
    ],
    cta: "Empezar Ahora",
    featured: false,
  },
  {
    name: "Premium",
    price: "149",
    period: "/mes",
    description: "La elección más popular para familias exigentes",
    features: [
      "Todo del plan Básico",
      "Limpieza 2x semana",
      "Balance químico avanzado",
      "Reparaciones menores incluidas",
      "Soporte prioritario 24/7",
      "App de seguimiento",
      "Garantía de satisfacción",
    ],
    cta: "Elegir Premium",
    featured: true,
    badge: "Más Popular",
  },
  {
    name: "Anual",
    price: "1.499",
    period: "/año",
    description: "Máximo ahorro con servicio completo todo el año",
    features: [
      "Todo del plan Premium",
      "Ahorro de 2 meses",
      "Apertura y cierre temporada",
      "Reparaciones mayores -50%",
      "Químicos incluidos",
      "Prioridad absoluta",
    ],
    cta: "Máximo Ahorro",
    featured: false,
    badge: "Ahorra 20%",
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-muted" id="precios">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            💰 Planes Transparentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Invierte en{" "}
            <span className="gradient-text">Tranquilidad</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Sin sorpresas, sin letras pequeñas. Elige el plan que mejor se adapte a ti.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card relative ${plan.featured ? "featured" : ""}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    {plan.featured && <Star className="w-4 h-4" />}
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl md:text-5xl font-black text-foreground">
                    {plan.price}€
                  </span>
                  <span className="text-muted-foreground ml-1 text-sm">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className={`w-full py-3 md:py-4 rounded-xl font-bold text-center block transition-all duration-300 text-sm md:text-base ${
                  plan.featured
                    ? "btn-glow"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 bg-card px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
            <span className="text-foreground font-medium text-xs md:text-base">
              Garantía de devolución 30 días • Sin compromiso
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
