import { motion } from "framer-motion";
import { Smartphone, Monitor, Bot, MessageSquare, Database } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Monitor,
    title: "Sistemas Personalizados",
    description: "Software sob medida para automatização de processos complexos e soluções específicas para o seu modelo de negócio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para Android e iOS com foco total em performance, usabilidade e experiência do usuário.",
  },
  {
    icon: MessageSquare,
    title: "IA no WhatsApp",
    description: "Atendimento inteligente e automatizado via WhatsApp, funcionando 24h por dia para não perder nenhum lead.",
  },
  {
    icon: Bot,
    title: "Agentes Inteligentes",
    description: "Assistentes virtuais capazes de automatizar atendimentos e processos, integrados aos seus sistemas internos.",
  },
  {
    icon: Database,
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
