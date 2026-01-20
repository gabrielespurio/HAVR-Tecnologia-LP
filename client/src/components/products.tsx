import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import eduflowImg from "@assets/generated_images/eduflow_3d_glass_icon.png";
import odontoImg from "@assets/generated_images/odontosync_3d_glass_icon.png";
import hazapiLogo from "@assets/Hazapi_1768925158930.png";

const products = [
  {
    id: "eduflow",
    name: "Eduflow",
    description: "Sistema completo de gestão escolar com automação de cobrança e IA para retenção de alunos.",
    image: eduflowImg,
    features: ["Matrícula Digital", "Previsão de Evasão", "App dos Pais"],
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    id: "odontosync",
    name: "OdontoSync",
    description: "Software para clínicas odontológicas com agenda inteligente e confirmação automática.",
    image: odontoImg,
    features: ["Prontuário Digital", "Financeiro Integrado", "Lembretes via WhatsApp"],
    color: "bg-teal-500/10 border-teal-500/20"
  },
  {
    id: "hazapi",
    name: "Hazapi",
    description: "CRM focado em WhatsApp para centralizar atendimentos e multiplicar a produtividade da sua equipe.",
    image: hazapiLogo,
    features: ["Múltiplos Atendentes", "Chatbot Integrado", "Relatórios de Performance"],
    color: "bg-green-500/10 border-green-500/20"
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Nossos Produtos</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            SaaS e Plataformas <span className="text-primary">Próprias</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções validadas e focadas em resultados para o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col p-8 rounded-3xl border ${product.color} backdrop-blur-sm hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="h-16 mb-8 flex items-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`h-full w-auto object-contain ${product.id === 'hazapi' ? 'max-h-12' : 'max-h-16 filter brightness-110'}`}
                />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-4">{product.name}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
                {product.description}
              </p>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-xs text-white/70">
                    <Check className="w-3.5 h-3.5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="w-full justify-between text-white hover:text-primary hover:bg-white/5 font-semibold group border border-white/5">
                Saiba mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
