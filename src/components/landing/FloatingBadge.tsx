import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const FloatingBadge = () => {
  return (
    <motion.a
      href="#contacto"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="floating-badge hover:scale-105 transition-transform cursor-pointer"
    >
      <Gift className="w-4 h-4" />
      <span>Inspección GRATIS</span>
    </motion.a>
  );
};

export default FloatingBadge;
