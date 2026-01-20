import { motion } from "framer-motion";
import { Smartphone, Monitor, Bot, Database, Layout, Code2, Cpu, Globe, Rocket, Terminal } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// WhatsApp Icon SVG Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const services = [
  {
    icon: Code2,
    title: "Sistemas Personalizados",
    description: "Software sob medida para automatização de processos complexos e soluções específicas para o seu modelo de negócio.",
  },
  {
    icon: Rocket,
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para Android e iOS com foco total em performance, usabilidade e experiência do usuário.",
  },
  {
    icon: WhatsAppIcon,
    title: "IA no WhatsApp",
    description: "Atendimento inteligente e automatizado via WhatsApp, funcionando 24h por dia para não perder nenhum lead.",
  },
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Criação de páginas de alta conversão, com design moderno e otimizadas para transformar visitantes em clientes.",
  },
  {
    icon: Terminal,
    title: "Agentes Inteligentes",
    description: "Assistentes virtuais capazes de automatizar atendimentos e processos, integrados aos seus sistemas internos.",
  },
  {
    icon: Cpu,
    title: "CRM Integrado",
    description: "Plataforma centralizada para gestão de clientes, métricas de vendas e automação de relacionamento.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Soluções Tecnológicas <span className="text-primary">Avançadas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Combinamos design, código e inteligência artificial para criar produtos digitais que impulsionam resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
