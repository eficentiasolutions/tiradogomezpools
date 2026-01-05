import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookiesAccepted = localStorage.getItem("cookies-accepted");
        if (!cookiesAccepted) {
            // Show banner after a small delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookies-accepted", "true");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookies-accepted", "false");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-primary/10 shadow-lg rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-between ring-1 ring-black/5">
                        <div className="flex items-start gap-4 flex-1">
                            <div className="p-3 bg-primary/10 rounded-full shrink-0 hidden sm:block">
                                <Cookie className="w-6 h-6 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-foreground text-sm md:text-base flex items-center gap-2">
                                    <Cookie className="w-5 h-5 text-primary sm:hidden" />
                                    Uso de Cookies
                                </h3>
                                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                                    Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido.
                                    Puedes obtener más información en nuestra <Link to="/cookies" className="text-secondary hover:underline font-medium">Política de Cookies</Link>.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={handleReject}
                                className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg hover:bg-muted"
                            >
                                Rechazar
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none btn-solid px-6 py-2.5 text-sm shadow-md"
                            >
                                Aceptar todas
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
