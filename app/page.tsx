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
import { CarSvg } from '@/components/ui/CarSvg'

export default function Home() {
	return (
		<div className="min-h-screen bg-white font-sans">
			<Header />
			<HeroSection />
			<CarSvg variant="wave" className="w-full h-6 text-gray-100 -mt-1" />
			<ServicesSection />
			<PackagesSection />
			<CarSvg variant="wave" className="w-full h-6 text-gray-950 -mb-1 rotate-180" />
			<BenefitsSection />
			<CarSvg variant="wave" className="w-full h-6 text-gray-950 -mt-1" />
			<TestimonialsSection />
			<GallerySection />
			<CarSvg variant="wave" className="w-full h-6 text-gray-50 -mt-1" />
			<PricingSection />
			<AboutSection />
			<TrustSection />
			<ContactSection />
			<Footer />
			<FloatingCallButton />
		</div>
	)
}
