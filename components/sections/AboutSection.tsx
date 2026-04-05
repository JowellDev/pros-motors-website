'use client'

import { useState } from 'react'
import { ChevronDown, CheckCircle } from 'lucide-react'

const aboutStats = [
	{ label: 'Localisation', value: 'Cocody 150 lgts' },
	{ label: 'Horaires', value: 'Lun-Sam 7h30-18h' },
	{ label: 'Capacite', value: '50 vehicules' },
	{ label: 'Atelier', value: '1000m2' },
]

const commitments = [
	"L'equipe: Mecaniciens qualifies et formes regulierement",
	"L'equipement: Diagnostic et outillage de pointe",
	'La qualite: Controle 20 points gratuit avant et apres chaque intervention',
	'La securite: Surveillance 24/7',
]

export function AboutSection() {
	const [expanded, setExpanded] = useState(false)

	return (
		<section id="about" className="py-20 md:py-28 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">
						Notre histoire
					</p>
					<h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
						A Propos de Nous
					</h2>
				</div>

				<div className="max-w-3xl mx-auto space-y-8">
					<p className="text-gray-600 text-lg leading-relaxed">
						PROS-MOTORS C.I est votre garage de confiance pour tous vos besoins
						automobiles. Nous combinons expertise professionnelle, tarifs
						competitifs et service client exceptionnel pour vous offrir la
						meilleure alternative aux concessionnaires couteux et aux garages
						informels.
					</p>

					<div className="grid grid-cols-2 gap-4">
						{aboutStats.map(({ label, value }) => (
							<div
								key={label}
								className="bg-gray-50 p-4 rounded-xl border border-gray-100"
							>
								<p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
									{label}
								</p>
								<p className="text-gray-900 font-black mt-1">{value}</p>
							</div>
						))}
					</div>

					<button
						onClick={() => setExpanded(!expanded)}
						className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-xl text-left transition flex items-center justify-between"
					>
						<span className="font-bold text-gray-900">
							En savoir plus sur notre engagement qualite
						</span>
						<ChevronDown
							className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
						/>
					</button>

					{expanded && (
						<div className="bg-gray-50 border border-gray-100 p-6 rounded-xl space-y-3">
							<p className="text-gray-600 font-medium">
								Notre mission est de fournir un service automobile de qualite
								superieure a des tarifs justes. Nous investissons dans:
							</p>
							<ul className="space-y-3">
								{commitments.map((item) => (
									<li key={item} className="flex gap-3 text-sm text-gray-700">
										<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
										{item}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
