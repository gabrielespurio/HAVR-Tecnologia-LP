import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import eduflowImg from "@assets/generated_images/eduflow_3d_glass_icon.png";
import odontoImg from "@assets/generated_images/odontosync_3d_glass_icon.png";
import hazapImg from "@assets/generated_images/hazap_3d_glass_icon.png";

const products = [
  {
    id: "eduflow",
    name: "Eduflow",
    description: "Sistema completo de gestão escolar com automação de cobrança e IA para retenção de alunos.",
    image: eduflowImg,
    features: ["Matrícula Digital", "Previsão de Evasão", "App dos Pais"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "odontosync",
    name: "OdontoSync",
    description: "Software para clínicas odontológicas com agenda inteligente e confirmação automática.",
    image: odontoImg,
    features: ["Prontuário Digital", "Financeiro Integrado", "Lembretes via WhatsApp"],
    color: "from-teal-500 to-emerald-400"
  },
  {
    id: "hazap",
    name: "HAZAP",
    description: "CRM focado em WhatsApp para centralizar atendimentos e multiplicar a produtividade da sua equipe.",
    image: hazapImg,
    features: ["Múltiplos Atendentes", "Chatbot Integrado", "Relatórios de Performance"],
    color: "from-green-500 to-lime-400"
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-secondary/20 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Nossos Produtos</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            SaaS e Plataformas Próprias
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções validadas e prontas para escalar o seu negócio em nichos específicos.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Product Visual */}
              <div className="w-full md:w-1/2 relative group">
                <div className={`absolute inset-0 bg-gradient-to-tr ${product.color} opacity-20 blur-[80px] rounded-full group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-heading font-bold text-white mb-4">{product.name}</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="text-white hover:text-primary hover:bg-transparent p-0 font-semibold text-lg group">
                  Saiba mais <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
