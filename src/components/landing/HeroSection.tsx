import { motion } from "framer-motion";
import { Droplets, Shield, Clock } from "lucide-react";
import heroPoolImage from "@/assets/hero-pool.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPoolImage})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      
      {/* Water ripple effect */}
      <div className="water-ripple" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8"
          >
            <span className="w-2 h-2 bg-brand-teal-light rounded-full animate-pulse" />
            <span className="text-white/90 text-xs md:text-sm font-medium">
              +500 Familias Confían en Nosotros
            </span>
          </motion.div>

          {/* Main H1 - The Hook */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 md:mb-6"
          >
            ¿Tu piscina es un{" "}
            <span className="text-brand-teal-light">placer</span> o una{" "}
            <span className="relative">
              <span className="relative z-10">carga</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-destructive/40 -z-0" />
            </span>
            ?
          </motion.h1>

          {/* Strong Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-10"
          >
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl px-4 py-3 md:px-8 md:py-5 border border-white/20">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                🎁 <span className="hidden sm:inline">OFERTA LIMITADA: </span>
                <span className="text-brand-teal-light">
                  1ª Inspección GRATIS
                </span>
              </p>
              <p className="text-white/70 text-xs md:text-sm mt-1">
                Solo este mes • Cupos limitados
              </p>
            </div>
          </motion.div>

          {/* CTA Button with Shadow Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <a
              href="#contacto"
              className="btn-glow inline-flex items-center gap-2 md:gap-3 text-base md:text-lg lg:text-xl"
            >
              <Droplets className="w-5 h-5 md:w-6 md:h-6" />
              Solicitar Inspección GRATIS
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10"
          >
            {[
              { icon: Shield, text: "Garantía 100%" },
              { icon: Clock, text: "Respuesta 24h" },
              { icon: Droplets, text: "Químicos Certificados" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 md:gap-2 text-white/80"
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-brand-teal-light" />
                <span className="text-xs md:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
