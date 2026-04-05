'use client'

import { useState, useEffect } from 'react'
import { Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides, heroStats, heroTags } from '@/lib/data/hero'

export function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [])

	const goToPrev = () =>
		setCurrentSlide(
			(prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
		)

	const goToNext = () =>
		setCurrentSlide((prev) => (prev + 1) % heroSlides.length)

	const scrollToServices = () =>
		document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })

	return (
		<section
			id="home"
			className="relative min-h-[90vh] flex items-center overflow-hidden"
		>
			{heroSlides.map((slide, idx) => (
				<div
					key={idx}
					className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
					style={{ backgroundImage: `url('${slide.url}')` }}
					aria-hidden={idx !== currentSlide}
				/>
			))}

			<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />

			<button
				onClick={goToPrev}
				className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 border border-white/20 text-white p-2 rounded-full transition backdrop-blur-sm"
				aria-label="Image precedente"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>
			<button
				onClick={goToNext}
				className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 border border-white/20 text-white p-2 rounded-full transition backdrop-blur-sm"
				aria-label="Image suivante"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
				{heroSlides.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrentSlide(idx)}
						className={`transition-all rounded-full ${idx === currentSlide ? 'bg-red-500 w-8 h-2' : 'bg-white/40 w-2 h-2'}`}
						aria-label={`Aller a la diapositive ${idx + 1}`}
					/>
				))}
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
				<div className="max-w-2xl space-y-6">
					<span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
						<span className="w-2 h-2 bg-white rounded-full animate-pulse" />
						Garage Premium — Abidjan
					</span>

					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight text-balance">
						PROS-MOTORS
						<br />
						<span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
							C.I
						</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-200 leading-relaxed">
						Votre garage de confiance a Cocody. Qualite concessionnaire, prix
						competitifs.
					</p>

					<div className="flex flex-wrap gap-2">
						{heroTags.map((tag) => (
							<span
								key={tag}
								className="px-3 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/20 transition"
							>
								{tag}
							</span>
						))}
					</div>

					<div className="flex items-center gap-2 text-gray-300">
						<MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
						<span className="text-sm">
							Cocody 150 lgts — a 10m du Palm Club
						</span>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 pt-2">
						<a
							href="tel:+22507590116"
							className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-red-900/40 text-base hover:scale-[1.02]"
						>
							<Phone className="w-5 h-5" />
							Appeler Maintenant
						</a>
						<button
							onClick={scrollToServices}
							className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-6 rounded-xl transition-all backdrop-blur-sm text-base hover:scale-[1.02]"
						>
							Nos Services
						</button>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16">
					{heroStats.map(({ value, label }) => (
						<div
							key={label}
							className="bg-white/10 backdrop-blur-sm border border-white/15 p-4 rounded-xl text-center hover:bg-white/15 transition-all hover:scale-[1.02]"
						>
							<p className="text-2xl font-black text-white">{value}</p>
							<p className="text-sm font-semibold text-gray-300 mt-0.5">
								{label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
