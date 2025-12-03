import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertOctagon } from "lucide-react";

const AgitationBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="dark-banner py-16 lg:py-20 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent w-full"
            style={{ top: `${20 + i * 15}%` }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/20 mb-6"
          >
            <AlertOctagon className="w-8 h-8 text-destructive" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            No dejes que tu inversión se convierta en un{" "}
            <span className="text-destructive">pozo sin fondo</span>.
          </h3>

          <p className="text-xl md:text-2xl text-white/80 mb-8">
            El daño de la corrosión{" "}
            <span className="text-destructive font-bold">te costará miles</span>{" "}
            en reparaciones evitables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-destructive hover:bg-destructive/90 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Prevenir Ahora
            </a>
            <span className="text-white/60 text-sm">
              Es más barato prevenir que reparar
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgitationBanner;
