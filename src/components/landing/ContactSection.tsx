import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-muted" id="contacto">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            📞 Contacto
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Solicita Tu{" "}
            <span className="gradient-text">Inspección Gratuita</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Déjanos tus datos y un experto te contactará en menos de 24 horas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Urgency Banner */}
            <div className="bg-destructive/10 border-2 border-destructive/20 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base md:text-lg mb-1">
                    ¡Plazas Limitadas!
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Solo aceptamos <span className="text-destructive font-bold">10 nuevos clientes Premium</span> este mes. 
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
              Información de Contacto
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Teléfono</h4>
                  <p className="text-muted-foreground text-xs md:text-base">+34 900 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Email</h4>
                  <p className="text-muted-foreground text-xs md:text-base">info@smartpool.es</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Zonas</h4>
                  <p className="text-muted-foreground text-xs md:text-base">Madrid, Valencia, BCN</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Horario</h4>
                  <p className="text-muted-foreground text-xs md:text-base">Lun - Vie: 8-20h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl md:rounded-3xl shadow-sm p-5 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm md:text-base"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Código Postal *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm md:text-base"
                  placeholder="28001"
                />
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  ¿Cuál es tu mayor problema con la piscina?
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none text-sm md:text-base"
                  placeholder="Cuéntanos brevemente..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Solicitar Inspección GRATIS
                  </>
                )}
              </button>

              <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 md:mt-4">
                🔒 Tus datos están protegidos
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
