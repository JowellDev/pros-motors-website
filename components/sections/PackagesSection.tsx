import { CheckCircle, Phone } from 'lucide-react'

const packages = [
	{
		name: 'Bronze',
		price: '30 000',
		color: 'bronze',
		popular: false,
		features: [
			'Scanner du vehicule',
			'Controle partiel du vehicule',
			'Lavage auto',
		],
	},
	{
		name: 'Argent',
		price: '38 000',
		color: 'silver',
		popular: true,
		features: [
			'Scanner du vehicule',
			'Vidange simple',
			'Nettoyage du moteur',
			'Lavage + Shampoing',
			'Controle general du vehicule',
		],
	},
	{
		name: 'Or',
		price: '45 000',
		color: 'gold',
		popular: false,
		features: [
			'Scanner du vehicule',
			'Vidange complete',
			'Revision periodique',
			'Lavage complet',
			'Lustrage du vehicule',
		],
	},
]

const colorStyles: Record<string, { badge: string; border: string; icon: string; name: string; ring: string }> = {
	bronze: {
		badge: 'bg-amber-700 text-white',
		border: 'border-amber-200 hover:border-amber-400',
		icon: 'text-amber-700',
		name: 'text-amber-700',
		ring: 'ring-amber-200',
	},
	silver: {
		badge: 'bg-gray-500 text-white',
		border: 'border-gray-300 hover:border-gray-500',
		icon: 'text-gray-500',
		name: 'text-gray-600',
		ring: 'ring-gray-300',
	},
	gold: {
		badge: 'bg-yellow-500 text-white',
		border: 'border-yellow-300 hover:border-yellow-500',
		icon: 'text-yellow-500',
		name: 'text-yellow-600',
		ring: 'ring-yellow-300',
	},
}

export function PackagesSection() {
	return (
		<section id="packages" className="py-20 md:py-28 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-14">
					<p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">
						Suivi vehicule
					</p>
					<h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-balance">
						Nos Packages Mensuels
					</h2>
					<p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
						PROS-MOTORS vous offre des packages dans le seul but de bien suivre vos vehicules.
					</p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{packages.map((pkg) => {
						const styles = colorStyles[pkg.color]
						return (
							<div
								key={pkg.name}
								className={`relative bg-white border-2 ${styles.border} rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${pkg.popular ? `ring-2 ${styles.ring}` : ''}`}
							>
								{/* Popular badge */}
								{pkg.popular && (
									<div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow ${styles.badge}`}>
										Le plus choisi
									</div>
								)}

								{/* Package name & price */}
								<div className="text-center mb-8">
									<h3 className={`text-2xl font-black uppercase tracking-widest mb-5 ${styles.name}`}>
										{pkg.name}
									</h3>
									<div className="flex items-baseline justify-center gap-1">
										<span className="text-4xl font-black text-gray-900">{pkg.price}</span>
										<span className="text-gray-500 font-semibold text-sm">F TTC / mois</span>
									</div>
								</div>

								{/* Features */}
								<ul className="space-y-3 mb-8 flex-1">
									{pkg.features.map((feature) => (
										<li key={feature} className="flex items-start gap-3">
											<CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.icon}`} />
											<span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
										</li>
									))}
								</ul>

								{/* CTA */}
								<a
									href="tel:+22507590116"
									className={`flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-black text-sm transition-all ${pkg.popular ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-100' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
								>
									<Phone className="w-4 h-4" />
									Souscrire maintenant
								</a>
							</div>
						)
					})}
				</div>

				{/* Footer note */}
				<p className="text-center text-gray-400 text-sm mt-10">
					Tous les packages incluent une garantie 1 mois sur les pieces concessionnaire.
					Appelez-nous au <a href="tel:+22507590116" className="text-red-600 font-semibold hover:underline">+225 07 59 01 16 16</a> pour plus d&apos;informations.
				</p>
			</div>
		</section>
	)
}
