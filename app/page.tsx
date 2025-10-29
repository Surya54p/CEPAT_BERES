import Image from "next/image";
import HeroSection from "./modules/home/section/HeroSection";
import Navbar from "./components/navBar";
import ServiceSection from "./modules/home/section/ServiceSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiceSection/>
    </main>
  );
}
