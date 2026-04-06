import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PackagesSection } from '@/components/sections/PackagesSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { PricingSection } from '@/components/sections/PricingSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { WaveDivider } from '@/components/ui/WaveDivider'

export default function Home() {
	return (
		<div className="min-h-screen bg-white font-sans">
			<Header />
			<HeroSection />
			<ServicesSection />
			<WaveDivider topColor="#ffffff" bottomColor="#2563eb" />
			<PackagesSection />
			<WaveDivider topColor="#2563eb" bottomColor="#030712" />
			<BenefitsSection />
			<TestimonialsSection />
			<GallerySection />
			<PricingSection />
			<WaveDivider topColor="#f9fafb" bottomColor="#2563eb" />
			<AboutSection />
			<WaveDivider topColor="#2563eb" bottomColor="#ffffff" />
			<TrustSection />
			<ContactSection />
			<Footer />
			<FloatingCallButton />
		</div>
	)
}
