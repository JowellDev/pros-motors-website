'use client'

import { useState } from 'react'
import { ChevronDown, CheckCircle, MapPin, Clock, Car, Ruler } from 'lucide-react'
import { site } from '@/lib/data/site'

const aboutStats = [
	{ icon: MapPin, label: 'Localisation', value: 'Cocody 150 lgts' },
	{ icon: Clock, label: 'Horaires', value: 'Lun–Sam 7h30–18h' },
	{ icon: Car, label: 'Capacité', value: site.capacity },
	{ icon: Ruler, label: 'Atelier', value: site.area },
]

const commitments = [
	"L'équipe : des mécaniciens qualifiés et formés régulièrement",
	"L'équipement : diagnostic et outillage de pointe",
	'La qualité : contrôle 20 points gratuit avant et après chaque intervention',
	'La sécurité : surveillance 24/7',
]

export function AboutSection() {
	const [expanded, setExpanded] = useState(false)

	return (
		<section id="about" className="py-20 md:py-28 bg-navy text-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Visuel équipe / atelier */}
					<div className="relative">
						<div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
							<img
								src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&h=675&fit=crop"
								alt="L'équipe PROS-MOTORS au travail dans l'atelier"
								className="w-full h-full object-cover"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
						</div>
						{/* Carte flottante */}
						<div className="absolute -bottom-5 -right-3 sm:right-6 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-xl">
							<p className="font-display font-extrabold text-2xl leading-none">
								{site.area}
							</p>
							<p className="text-xs text-white/80 mt-1">d'atelier moderne</p>
						</div>
					</div>

					{/* Récit */}
					<div>
						<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
							Notre histoire
						</p>
						<h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-balance">
							Un garage pensé pour vous simplifier la vie
						</h2>
						<p className="text-white/75 leading-relaxed mb-8">
							PROS-MOTORS C.I est né d'une conviction simple : entretenir sa
							voiture ne devrait être ni stressant, ni hors de prix. Nous
							combinons l'expertise et les pièces d'origine d'un concessionnaire
							avec la proximité et les tarifs justes d'un garage de quartier —
							la meilleure alternative pour votre véhicule.
						</p>

						<div className="grid grid-cols-2 gap-3 mb-8">
							{aboutStats.map(({ icon: Icon, label, value }) => (
								<div
									key={label}
									className="bg-white/5 p-4 rounded-xl border border-white/10"
								>
									<Icon className="w-4 h-4 text-primary mb-2" />
									<p className="text-white/50 text-xs font-medium uppercase tracking-wider">
										{label}
									</p>
									<p className="font-display font-bold mt-0.5">{value}</p>
								</div>
							))}
						</div>

						<button
							onClick={() => setExpanded(!expanded)}
							className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl text-left transition flex items-center justify-between"
							aria-expanded={expanded}
						>
							<span className="font-semibold">
								En savoir plus sur notre engagement qualité
							</span>
							<ChevronDown
								className={`w-5 h-5 text-primary transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
							/>
						</button>

						{expanded && (
							<ul className="mt-3 bg-white/5 border border-white/10 p-6 rounded-xl space-y-3">
								{commitments.map((item) => (
									<li key={item} className="flex gap-3 text-sm text-white/80">
										<CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
										{item}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
