'use client'

import { Phone, MapPin, Clock, Wrench } from 'lucide-react'

const footerLinks = [
	{ id: 'services', label: 'Services' },
	{ id: 'pricing', label: 'Tarifs' },
	{ id: 'about', label: 'A Propos' },
	{ id: 'contact', label: 'Contact' },
]

export function Footer() {
	const scrollTo = (id: string) =>
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

	return (
		<footer className="bg-gray-950 text-white py-14">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
					<div>
						<div className="flex items-center gap-2 mb-3">
							<div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
								<Wrench className="w-4 h-4 text-white" />
							</div>
							<span className="font-black text-white">PROS-MOTORS C.I</span>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed">
							Votre Garage de Confiance a Abidjan. Qualite, rapidite, prix
							competitifs.
						</p>
					</div>

					<div>
						<h3 className="font-black mb-4 text-white">Liens Rapides</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							{footerLinks.map(({ id, label }) => (
								<li key={id}>
									<button
										onClick={() => scrollTo(id)}
										className="hover:text-red-400 transition"
									>
										{label}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-black mb-4 text-white">Contact</h3>
						<ul className="space-y-3 text-sm text-gray-400">
							<li className="flex items-center gap-2">
								<Phone className="w-4 h-4 text-red-400" />
								<a
									href="tel:+22507590116"
									className="hover:text-white transition"
								>
									+225 07 59 01 16 16
								</a>
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
								<span>Cocody 150 lgts, Abidjan</span>
							</li>
							<li className="flex items-center gap-2">
								<Clock className="w-4 h-4 text-red-400" />
								Lun-Sam 7h30-18h
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
					<p suppressHydrationWarning>
						© {new Date().getFullYear()} PROS-MOTORS C.I SARL. Tous droits
						reserves.
					</p>
				</div>
			</div>
		</footer>
	)
}
