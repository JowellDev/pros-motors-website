import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ReassuranceBar } from '@/components/sections/ReassuranceBar'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FloatingCallButton } from '@/components/FloatingCallButton'

export default function Home() {
	return (
		<div className="min-h-screen bg-background font-sans">
			<Header />
			<HeroSection />
			<ReassuranceBar />
			<ServicesSection />
			<ProcessSection />
			<PricingSection />
			<GallerySection />
			<TestimonialsSection />
			<AboutSection />
			<BenefitsSection />
			<FaqSection />
			<ContactSection />
			<Footer />
			<FloatingCallButton />
		</div>
	)
}
