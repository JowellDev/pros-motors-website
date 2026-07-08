'use client'

import { useState, useEffect } from 'react'
import {
	Phone,
	MapPin,
	ChevronLeft,
	ChevronRight,
	MessageCircle,
	Clock,
} from 'lucide-react'
import { heroSlides, heroTrust, heroTags } from '@/lib/data/hero'
import { site } from '@/lib/data/site'

export function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [])

	const goToPrev = () =>
		setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
	const goToNext = () =>
		setCurrentSlide((prev) => (prev + 1) % heroSlides.length)

	const scrollToServices = () =>
		document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })

	return (
		<section
			id="home"
			className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy"
		>
			{heroSlides.map((slide, idx) => (
				<div
					key={idx}
					className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
					style={{ backgroundImage: `url('${slide.url}')` }}
					aria-hidden={idx !== currentSlide}
				/>
			))}

			{/* Calque graphite chaud — chaleureux, pas noir froid */}
			<div className="absolute inset-0 bg-gradient-to-r from-graphite/95 via-graphite/80 to-graphite/40" />
			<div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-transparent to-graphite/30" />
			{/* Lueur chaude de marque */}
			<div className="absolute -top-40 -right-24 w-[520px] h-[520px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

			<button
				onClick={goToPrev}
				className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 border border-white/20 text-white p-2 rounded-full transition backdrop-blur-sm items-center justify-center"
				aria-label="Image précédente"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>
			<button
				onClick={goToNext}
				className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 border border-white/20 text-white p-2 rounded-full transition backdrop-blur-sm items-center justify-center"
				aria-label="Image suivante"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			{/* Dots + mobile arrows */}
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
				<button
					onClick={goToPrev}
					className="md:hidden bg-white/10 hover:bg-white/20 border border-white/20 text-white p-1.5 rounded-full transition backdrop-blur-sm"
					aria-label="Image précédente"
				>
					<ChevronLeft className="w-4 h-4" />
				</button>
				{heroSlides.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrentSlide(idx)}
						className={`transition-all rounded-full ${idx === currentSlide ? 'bg-primary w-8 h-2' : 'bg-white/40 w-2 h-2'}`}
						aria-label={`Aller à la diapositive ${idx + 1}`}
					/>
				))}
				<button
					onClick={goToNext}
					className="md:hidden bg-white/10 hover:bg-white/20 border border-white/20 text-white p-1.5 rounded-full transition backdrop-blur-sm"
					aria-label="Image suivante"
				>
					<ChevronRight className="w-4 h-4" />
				</button>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
				<div className="max-w-2xl space-y-6">
					<span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-mono font-semibold rounded-full uppercase tracking-[0.18em] backdrop-blur-sm">
						<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
						Garage premium — Cocody, Abidjan
					</span>

					<h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] text-balance">
						L'entretien auto{' '}
						<span className="text-primary">sans mauvaise surprise</span>.
					</h1>
					<p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
						Diagnostic clair, tarifs transparents et qualité concessionnaire —
						à prix juste. Votre voiture rendue comme neuve, souvent le jour même.
					</p>

					<div className="flex flex-wrap gap-2">
						{heroTags.map((tag) => (
							<span
								key={tag}
								className="px-3 py-1.5 bg-white/10 border border-white/15 text-white/90 rounded-full text-sm font-medium backdrop-blur-sm"
							>
								{tag}
							</span>
						))}
					</div>

					<div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/70 text-sm">
						<span className="flex items-center gap-2">
							<MapPin className="w-4 h-4 text-primary flex-shrink-0" />
							Cocody 150 lgts — à 10m du Palm Club
						</span>
						<span className="flex items-center gap-2">
							<Clock className="w-4 h-4 text-primary flex-shrink-0" />
							{site.hours}
						</span>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 pt-2">
						<a
							href={site.whatsappMessage(
								'Bonjour PROS-MOTORS, je souhaite un devis pour ma voiture.',
							)}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-black/20 text-base hover:scale-[1.02]"
						>
							<MessageCircle className="w-5 h-5" />
							Devis gratuit sur WhatsApp
						</a>
						<a
							href={site.phoneHref}
							className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold py-4 px-6 rounded-xl transition-all backdrop-blur-sm text-base hover:scale-[1.02]"
						>
							<Phone className="w-5 h-5" />
							Appeler maintenant
						</a>
					</div>
				</div>

				{/* Barre de confiance — remplace la grille de stats surchargée */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 max-w-3xl">
					{heroTrust.map(({ value, label }) => (
						<div
							key={label}
							className="bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3.5 rounded-xl"
						>
							<p className="text-xl font-display font-extrabold text-white">
								{value}
							</p>
							<p className="text-xs font-medium text-white/60 mt-0.5">{label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
