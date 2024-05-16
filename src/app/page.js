import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import PrimaryNavbar from "@/components/PrimaryNavbar";
import Services from "@/components/Services";
import ShipmentForm from "@/components/ShipmentForm";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <PrimaryNavbar />
      <Hero />
      <AboutUs />
      <Services />
      <ShipmentForm />
      <Team />
    </main>
  );
}
