import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Clients } from "@/components/clients";
import { Services } from "@/components/services";
import { Products } from "@/components/products";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Products />
      <Team />
      <Contact />
    </div>
  );
}
