'use client'

import { Phone, MapPin, Clock, Wrench, Mail, MessageCircle } from 'lucide-react'
import { site } from '@/lib/data/site'

const footerNav = [
	{ id: 'services', label: 'Services' },
	{ id: 'process', label: 'Comment ça marche' },
	{ id: 'pricing', label: 'Formules & tarifs' },
	{ id: 'about', label: 'À propos' },
	{ id: 'faq', label: 'FAQ' },
	{ id: 'contact', label: 'Contact' },
]

const serviceList = [
	'Mécanique générale',
	'Électricité auto',
	'Climatisation',
	'Tôlerie & peinture',
	'Vente de pièces',
	'Assistance 24/7',
]

export function Footer() {
	const scrollTo = (id: string) =>
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

	return (
		<footer className="bg-navy text-white pt-16 pb-8">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
					<div className="sm:col-span-2 lg:col-span-1">
						<div className="flex items-center gap-2.5 mb-4">
							<span className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
								<Wrench className="w-5 h-5 text-white" />
							</span>
							<span className="font-display font-extrabold text-lg">
								PROS-MOTORS C.I
							</span>
						</div>
						<p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
							Votre garage de confiance à Cocody. Qualité concessionnaire,
							proximité et tarifs justes.
						</p>
						<div className="flex gap-2.5">
							<a
								href={site.whatsappHref}
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-lg bg-white/5 hover:bg-whatsapp border border-white/10 flex items-center justify-center transition"
								aria-label="WhatsApp"
							>
								<MessageCircle className="w-5 h-5" />
							</a>
							<a
								href={site.phoneHref}
								className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition"
								aria-label="Téléphone"
							>
								<Phone className="w-5 h-5" />
							</a>
							<a
								href={site.emailHref}
								className="w-10 h-10 rounded-lg bg-white/5 hover:bg-secondary border border-white/10 flex items-center justify-center transition"
								aria-label="Email"
							>
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>

					<div>
						<h3 className="font-display font-bold mb-4">Navigation</h3>
						<ul className="space-y-2.5 text-sm text-white/60">
							{footerNav.map(({ id, label }) => (
								<li key={id}>
									<button
										onClick={() => scrollTo(id)}
										className="hover:text-primary transition"
									>
										{label}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-display font-bold mb-4">Nos services</h3>
						<ul className="space-y-2.5 text-sm text-white/60">
							{serviceList.map((s) => (
								<li key={s}>{s}</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-display font-bold mb-4">Contact</h3>
						<ul className="space-y-3 text-sm text-white/60">
							<li className="flex items-center gap-2.5">
								<Phone className="w-4 h-4 text-primary flex-shrink-0" />
								<a href={site.phoneHref} className="hover:text-white transition">
									{site.phoneDisplay}
								</a>
							</li>
							<li className="flex items-start gap-2.5">
								<MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
								<span>{site.address}</span>
							</li>
							<li className="flex items-center gap-2.5">
								<Clock className="w-4 h-4 text-primary flex-shrink-0" />
								{site.hours}
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
					<p suppressHydrationWarning>
						© {new Date().getFullYear()} PROS-MOTORS C.I SARL. Tous droits
						réservés.
					</p>
				</div>
			</div>
		</footer>
	)
}
