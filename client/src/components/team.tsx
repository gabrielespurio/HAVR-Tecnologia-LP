import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
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
            Conheça as mentes por trás da HAVR Tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Photo Container - Smaller and consistent background */}
              <div className="relative mb-6 group w-full max-w-[320px]">
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#1E293B] border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                  {/* Subtle gradient overlay to mimic the CTO photo background depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay for social link */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a href="#" className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info - Now below the photo */}
              <div className="max-w-xs">
                <h3 className="text-2xl font-heading font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3 uppercase tracking-widest">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
