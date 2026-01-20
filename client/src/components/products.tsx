import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import eduflowRobot from "@assets/WhatsApp_Image_2026-01-20_at_13.09.22_1768925433687.jpeg";
import odontoImg from "@assets/generated_images/odontosync_3d_glass_icon.png";
import hazapiLogo from "@assets/Hazapi_1768925158930.png";
import appMobileImg from "@assets/generated_images/mobile_app_business_management_dashboard_mockup.png";
import webAppImg from "@assets/generated_images/web_app_kids_recreation_management_mockup.png";

const products = [
  {
    id: "eduflow",
    name: "Eduflow",
    description: "Sistema completo de gestão escolar com automação de cobrança e IA para retenção de alunos.",
    image: eduflowRobot,
    features: ["Matrícula Digital", "Previsão de Evasão", "App dos Pais"],
    borderColor: "border-blue-500",
    shadowColor: "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    align: "left",
    tag: "SaaS"
  },
  {
    id: "odontosync",
    name: "OdontoSync",
    description: "Software para clínicas odontológicas com agenda inteligente e confirmação automática.",
    image: odontoImg,
    features: ["Prontuário Digital", "Financeiro Integrado", "Lembretes via WhatsApp"],
    borderColor: "border-teal-500",
    shadowColor: "shadow-[0_0_20px_rgba(20,184,166,0.5)]",
    align: "right",
    tag: "SaaS"
  },
  {
    id: "hazapi",
    name: "Hazapi",
    description: "CRM focado em WhatsApp para centralizar atendimentos e multiplicar a produtividade da sua equipe.",
    image: hazapiLogo,
    features: ["Múltiplos Atendentes", "Chatbot Integrado", "Relatórios de Performance"],
    borderColor: "border-green-500",
    shadowColor: "shadow-[0_0_20px_rgba(34,197,94,0.5)]",
    align: "left",
    tag: "CRM"
  },
  {
    id: "app-mobile",
    name: "Sistema de Gestão para Franqueadora",
    description: "Sistema completo de gestão para rede de franquias do segmento de beleza, integrando agendamentos, financeiro e gestão de equipes.",
    image: appMobileImg,
    features: ["Controle Financeiro", "Gestão de Equipes", "Relatórios em Tempo Real"],
    borderColor: "border-purple-500",
    shadowColor: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    align: "right",
    tag: "MOBILE APP"
  },
  {
    id: "web-app",
    name: "Web App – Gestão para Recreação Infantil",
    description: "Sistema de gestão empresarial para empresa de recreação e personagens infantis, com controle de agendamentos e gestão de figurinos.",
    image: webAppImg,
    features: ["Controle de Agendamentos", "Gestão de Figurinos", "Relatórios Financeiros"],
    borderColor: "border-pink-500",
    shadowColor: "shadow-[0_0_20px_rgba(236,72,153,0.5)]",
    align: "left",
    tag: "WEB APP"
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Nossos Produtos</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            SaaS e Plataformas <span className="text-primary">Próprias</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções validadas e focadas em resultados para o seu negócio.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ 
                opacity: 0, 
                x: product.align === "left" ? -100 : 100 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut" 
              }}
              className={`flex w-full ${product.align === "right" ? "justify-end" : "justify-start"}`}
            >
              <div className={`w-full md:w-3/4 lg:w-2/3 p-8 rounded-3xl border-2 bg-transparent backdrop-blur-sm ${product.borderColor} ${product.shadowColor} transition-all duration-300 flex flex-col md:flex-row gap-8 items-center md:items-start relative group`}>
                <div className={`h-32 w-32 shrink-0 flex items-center justify-center rounded-2xl overflow-hidden p-2 transition-colors duration-300 ${product.id === 'hazapi' ? 'bg-white/20' : 'bg-white/5'}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-500 ${product.id === 'hazapi' ? 'brightness-125 contrast-125 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] scale-125' : ''}`}
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 leading-tight">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[11px] text-white/70">
                        <Check className="w-3 h-3 text-primary mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5 font-semibold group border border-white/5 px-4 h-9 text-xs">
                    Saiba mais <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
