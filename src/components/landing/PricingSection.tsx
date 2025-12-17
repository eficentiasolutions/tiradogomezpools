
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Zap, Droplets, Sparkles, Crown, AlertCircle, Info } from "lucide-react";

const plans = [
  {
    name: "Plan Básico",
    icon: Droplets,
    price: "60",
    period: " / visita",
    description: "Lo justo para que todo funcione correctamente. Ideal si solo necesitas una revisión puntual.",
    features: [
      "1 visita técnica",
      "Limpieza y enjuague del filtro",
      "Puesta en marcha de la bomba",
      "Limpieza del prefiltro",
      "Revisión de válvulas",
      "Comprobación consumo bomba",
      "Revisión del cuadro eléctrico",
    ],
    cta: "Solicitar Básico",
    featured: false,
    note: "No incluye limpieza profunda ni control del estado del agua.",
    noteType: "warning", // warning, info, success
  },
  {
    name: "Plan Completo",
    icon: Sparkles,
    price: "120",
    period: " / visita",
    description: "Deja tu piscina lista para empezar la temporada. Perfecto para una puesta a punto.",
    features: [
      "1 visita completa",
      "Todo lo incluido en el Plan Básico",
      "Limpieza del fondo y skimmers",
      "Limpieza de superficie y paredes",
      "Limpieza línea de flotación",
      "Análisis completo del agua",
      "Ajuste de niveles químicos"
    ],
    cta: "Solicitar Completo",
    featured: false,
    note: "Productos químicos no incluidos.",
    noteType: "info",
  },
  {
    name: "Plan Premium",
    icon: Crown,
    price: "149",
    period: " / mes",
    description: "Tu piscina siempre perfecta. La opción ideal para disfrutar sin preocupaciones.",
    features: [
      "Visitas regulares todo el año",
      "Todo lo incluido en el Plan Completo",
      "Apertura y cierre de temporada",
      "Productos químicos incluidos",
      "Repuestos y mano de obra incluidos",
      "50% dto. reparaciones mayores",
      "Permanencia mínima 12 meses",
    ],
    cta: "Quiero el Premium",
    featured: true,
    badge: "Todo Incluido",
    note: "Agua siempre segura  • Sin imprevistos • Tranquilidad total",
    noteType: "success",
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
            Elige cómo quieres cuidar tu piscina. Sin sorpresas.
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
              className={`pricing-card relative flex flex-col ${plan.featured ? "featured ring-2 ring-secondary" : ""}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    {plan.featured && <Star className="w-4 h-4 fill-current" />}
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 md:mb-8 pt-2">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <plan.icon className={`w-6 h-6 ${plan.featured ? "text-secondary" : "text-primary"}`} />
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm mb-4 px-2 min-h-[40px] flex items-center justify-center">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                    {plan.price}€
                  </span>
                  <span className="text-muted-foreground ml-1 text-sm font-medium">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-grow">
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? "bg-secondary/20 text-secondary" : "bg-muted-foreground/10 text-muted-foreground"}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-foreground text-sm leading-tight text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note / Warning */}
              {plan.note && (
                <div className={`text-xs text-center mb-6 px-3 py-3 rounded-lg border flex items-start justify-center gap-2 ${plan.noteType === 'warning' ? "bg-amber-50 border-amber-200 text-amber-800" :
                  plan.noteType === 'info' ? "bg-blue-50 border-blue-200 text-blue-800" :
                    "bg-green-50 border-green-200 text-green-800 font-medium"
                  }`}>
                  {plan.noteType === 'warning' && <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  {plan.noteType === 'info' && <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  {plan.noteType === 'success' && <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  <span className="text-left">{plan.note}</span>
                </div>
              )}

              {/* CTA */}
              <div className="mt-auto">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    // Dispatch custom event for ContactSection
                    const event = new CustomEvent('plan-selected', { detail: plan.name });
                    window.dispatchEvent(event);

                    // Smooth scroll directly to form
                    const targetElement = document.getElementById('formulario-contacto') || document.getElementById('contacto');
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full block text-center cursor-pointer ${plan.featured
                    ? "btn-glow shadow-xl"
                    : "btn-solid shadow-md hover:shadow-lg"
                    }`}
                >
                  {plan.cta}
                </a>
              </div>
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
