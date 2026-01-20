import { motion } from "framer-motion";
import ceoPhoto from "@assets/Gemini_Generated_Image_mbyhk6mbyhk6mbyh_1768924876853.png";
import ctoPhoto from "@assets/Foto_Gabriel_Perfil_1768924888967.png";

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
            Conheça os Líderes da <span className="text-primary">HAVR Tecnologia</span>
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
              {/* Photo Container - Static, no hover effects */}
              <div className="relative mb-6 w-full max-w-[320px]">
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#1E293B] border border-white/10 shadow-2xl">
                  {/* Subtle depth gradient for both */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
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
