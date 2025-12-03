import { Droplets, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Smart-Pool™</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Transformamos el mantenimiento de tu piscina en una experiencia sin
              esfuerzo. Más de 500 familias ya disfrutan de su tiempo libre
              gracias a nosotros.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Limpieza Profesional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Balance Químico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Mantenimiento Preventivo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Reparaciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 Smart-Pool™. Todos los derechos reservados.
          </p>
          <p className="text-white/50 text-sm">
            Hecho con 💙 para propietarios de piscinas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
