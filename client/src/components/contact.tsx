import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Vamos construir o futuro juntos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Entre em contato com nossos especialistas e descubra como podemos transformar seu negócio com tecnologia de ponta.
            </p>
            <div className="space-y-6">
              <a href="mailto:contato@havrtecnologia.com" className="flex items-center text-white/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 mr-4 text-primary" />
                contato@havrtecnologia.com
              </a>
              <a href="https://wa.me/5517992331492" className="flex items-center text-white/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 mr-4 text-primary" />
                +55 17 99233-1492
              </a>
              <div className="flex items-center gap-4 mt-8">
                <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary text-white">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary text-white">
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Nome</label>
                  <input className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Empresa</label>
                  <input className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Sua empresa" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">E-mail</label>
                <input type="email" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Mensagem</label>
                <textarea className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors min-h-[120px]" placeholder="Como podemos ajudar?" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground font-bold h-12 rounded-lg hover:bg-primary/90">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} HAVR Tecnologia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
