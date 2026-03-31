import Navbar from "@/components/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import ProgramSection from "@/components/sections/ProgramSection"
import PricingSection from "@/components/sections/PricingSection"
import ContactSection from "@/components/sections/ContactSection"

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProgramSection />
      <PricingSection />
      <ContactSection />
    </main>
  )
}

export default Index
