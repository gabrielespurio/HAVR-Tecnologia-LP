import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import ceoImg from "@assets/generated_images/abstract_high-tech_ai_network_background.png"; // Placeholder for specific CEO image if needed, but I'll use the attached ones via path
import ctoImg from "@assets/generated_images/abstract_high-tech_ai_network_background.png"; // Same here

// Note: Replit aliases attached assets. I will use the provided filenames.
import ceoPhoto from "@assets/Gemini_Generated_Image_hc3zrnhc3zrnhc3z_1768924433107.png";
import ctoPhoto from "@assets/Foto_Gabriel_1768924549974.png";

const team = [
  {
    name: "CEO",
    role: "Chief Executive Officer",
    description: "Liderança estratégica, expansão de negócios e relacionamento com clientes.",
    image: ceoPhoto,
  },
  {
    name: "CTO",
    role: "Chief Technology Officer",
    description: "Inovação tecnológica, desenvolvimento de produtos e arquitetura de sistemas.",
    image: ctoPhoto,
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Liderança <span className="text-primary">Visionária</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça as mentes por trás da HAVR Tecnologia, focadas em transformar o futuro dos negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-secondary/20 border border-white/5 group-hover:border-primary/50 transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.description}
                  </p>
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-primary hover:text-primary-foreground transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
