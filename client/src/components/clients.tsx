import { motion } from "framer-motion";

const clients = [
  { name: "Canal Educacional", logo: "canal-educacional" },
  { name: "ITSP", logo: "itsp" },
  { name: "Cedetep", logo: "cedetep" },
  { name: "BPO", logo: "bpo" },
  { name: "Usebens", logo: "usebens" },
  { name: "Funesp", logo: "funesp" },
  { name: "WorldColor", logo: "worldcolor" },
  { name: "Microplay", logo: "microplay" },
  { name: "Intertek", logo: "intertek" },
  { name: "Palmero", logo: "palmero" },
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-background/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider">
            Alguns de nossos <span className="text-primary">clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="h-12 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
