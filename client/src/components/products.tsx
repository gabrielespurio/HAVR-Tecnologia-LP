import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import eduflowRobot from "@assets/WhatsApp_Image_2026-01-20_at_13.09.22_1768925433687.jpeg";
import odontoImg from "@assets/generated_images/odontosync_3d_glass_icon.png";
import hazapiLogo from "@assets/Hazapi_1768925158930.png";

const products = [
  {
    id: "eduflow",
    name: "Eduflow",
    description: "Sistema completo de gestão escolar com automação de cobrança e IA para retenção de alunos.",
    image: eduflowRobot,
    features: ["Matrícula Digital", "Previsão de Evasão", "App dos Pais"],
    color: "bg-blue-500/10 border-blue-500/20",
    align: "left"
  },
  {
    id: "odontosync",
    name: "OdontoSync",
    description: "Software para clínicas odontológicas com agenda inteligente e confirmação automática.",
    image: odontoImg,
    features: ["Prontuário Digital", "Financeiro Integrado", "Lembretes via WhatsApp"],
    color: "bg-teal-500/10 border-teal-500/20",
    align: "right"
  },
  {
    id: "hazapi",
    name: "Hazapi",
    description: "CRM focado em WhatsApp para centralizar atendimentos e multiplicar a produtividade da sua equipe.",
    image: hazapiLogo,
    features: ["Múltiplos Atendentes", "Chatbot Integrado", "Relatórios de Performance"],
    color: "bg-green-500/10 border-green-500/20",
    align: "left"
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-secondary/10 relative overflow-hidden">
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
              <div className={`w-full md:w-3/4 lg:w-2/3 p-8 rounded-3xl border ${product.color} backdrop-blur-sm hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center md:items-start`}>
                <div className="h-32 w-32 shrink-0 flex items-center justify-center bg-white/5 rounded-2xl overflow-hidden p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-white/70">
                        <Check className="w-3.5 h-3.5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5 font-semibold group border border-white/5 px-6">
                    Saiba mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
