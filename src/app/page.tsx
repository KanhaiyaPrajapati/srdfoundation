import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
