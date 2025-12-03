import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const satisfactionData = {
  labels: ["Muy Satisfechos", "Satisfechos", "Neutros"],
  datasets: [
    {
      data: [78, 19, 3],
      backgroundColor: ["#0d9488", "#1e3a5f", "#e5e7eb"],
      borderWidth: 0,
      cutout: "75%",
    },
  ],
};

const timeData = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "Horas Ahorradas",
      data: [8, 12, 15, 14, 18, 16],
      backgroundColor: "rgba(13, 148, 136, 0.8)",
      borderRadius: 8,
    },
  ],
};

const stats = [
  { icon: Users, value: "500+", label: "Familias Felices" },
  { icon: Award, value: "97%", label: "Tasa Satisfacción" },
  { icon: TrendingUp, value: "80h", label: "Tiempo Ahorrado/Año" },
  { icon: Zap, value: "24h", label: "Tiempo de Respuesta" },
];

const DataVizSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            📊 Resultados Comprobados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            El Sistema{" "}
            <span className="gradient-text">Smart-Pool™</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Metodología propia respaldada por datos reales de nuestros clientes
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Satisfaction Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              Satisfacción del Cliente
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Encuesta anual a nuestros clientes activos
            </p>
            <div className="relative w-48 h-48 mx-auto">
              <Doughnut
                data={satisfactionData}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">97%</div>
                  <div className="text-sm text-muted-foreground">Satisfechos</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-sm text-muted-foreground">Muy Satisfechos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Satisfechos</span>
              </div>
            </div>
          </motion.div>

          {/* Time Saved Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              Tiempo Ahorrado por Cliente
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Promedio de horas mensuales recuperadas
            </p>
            <div className="h-48">
              <Bar
                data={timeData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: "rgba(0,0,0,0.05)",
                      },
                    },
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              <span className="text-secondary font-bold">+80 horas</span> de tiempo libre al año
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataVizSection;
