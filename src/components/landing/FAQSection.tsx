import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Qué incluye la inspección gratuita?",
    answer:
      "La inspección gratuita incluye un análisis completo del balance químico de tu piscina (pH, cloro, alcalinidad, dureza), revisión visual del estado general, filtros y sistema de circulación, y un informe detallado con recomendaciones personalizadas. Sin compromiso de contratación.",
  },
  {
    question: "¿Con qué frecuencia necesita mantenimiento mi piscina?",
    answer:
      "Depende del uso y tamaño, pero generalmente recomendamos mantenimiento semanal durante la temporada de uso intensivo (mayo-septiembre) y quincenal el resto del año. Nuestros planes se adaptan a tus necesidades específicas.",
  },
  {
    question: "¿Qué pasa si no estoy satisfecho con el servicio?",
    answer:
      "Ofrecemos garantía de satisfacción total. Si en los primeros 30 días no estás completamente satisfecho, te devolvemos el 100% de tu dinero sin preguntas. Además, si detectas cualquier problema entre visitas, lo solucionamos sin coste adicional.",
  },
  {
    question: "¿Utilizan productos seguros para niños y mascotas?",
    answer:
      "Absolutamente. Todos nuestros productos están certificados y son seguros para uso en piscinas familiares. Además, ofrecemos opciones eco-friendly y sin cloro para familias con sensibilidades especiales.",
  },
  {
    question: "¿Trabajan en mi zona?",
    answer:
      "Actualmente damos servicio en toda la Comunidad de Madrid, Valencia, Barcelona y Sevilla. Si estás en otra ubicación, contáctanos igualmente porque estamos en constante expansión.",
  },
  {
    question: "¿Puedo cambiar o cancelar mi plan en cualquier momento?",
    answer:
      "Sí, todos nuestros planes son flexibles. Puedes cambiar de plan mensualmente o cancelar con 15 días de preaviso. Sin penalizaciones ni letras pequeñas.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            ❓ Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ¿Tienes{" "}
            <span className="gradient-text">Dudas</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aquí respondemos las preguntas más comunes de nuestros clientes
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-3xl shadow-sm p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-question"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="pb-5 pl-8 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
