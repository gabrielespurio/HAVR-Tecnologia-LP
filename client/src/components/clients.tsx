import { motion } from "framer-motion";
import clientsImage from "@assets/ChatGPT_Image_20_de_jan._de_2026,_19_25_52_1768947999132.png";

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-background/50 border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-12">
          Alguns de nossos <span className="text-primary">clientes</span>
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <img 
            src={clientsImage} 
            alt="Nossos Clientes" 
            className="w-full h-auto rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
