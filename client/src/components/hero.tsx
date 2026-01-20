import { useState, useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_high-tech_ai_network_background.png";

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const prefix = value.startsWith("+") ? "+" : "";
  const suffix = value.replace(/[+\d]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: duration,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [numericValue, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-widest">
              Inovação em Tecnologia
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Transforme seu Negócio com
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"> Inteligência Artificial</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Desenvolvemos sistemas inteligentes, apps e soluções de IA que automatizam processos e escalam seus resultados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold group">
              Fale com um Especialista
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base">
              Conheça Nossos Produtos
            </Button>
          </div>
        </motion.div>

        {/* Stats / Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-8"
        >
          {[
            { label: "Projetos Entregues", value: "+50" },
            { label: "Satisfação", value: "99%" },
            { label: "Anos de Mercado", value: "+5" },
            { label: "Suporte", value: "24/7" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h4 className="text-3xl font-heading font-bold text-white mb-1">
                <Counter value={stat.value} />
              </h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
