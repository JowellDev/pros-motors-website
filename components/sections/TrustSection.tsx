import { Users, Award, Shield } from 'lucide-react'

const trustItems = [
	{
		icon: Users,
		title: 'Service Conseil Client',
		desc: "Rappels d'entretien personnalises et conseils pour la longevite de votre vehicule",
		blue: false,
	},
	{
		icon: Award,
		title: 'Controle Qualite',
		desc: '20 points de controle gratuits avant et apres chaque intervention',
		blue: true,
	},
	{
		icon: Shield,
		title: 'Pieces Certifiees',
		desc: "Uniquement pieces d'origine concessionnaire avec garantie 1 mois",
		blue: false,
	},
]

export function TrustSection() {
	return (
		<section className="py-20 md:py-28 bg-gray-950 text-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-2">
						Notre promesse
					</p>
					<h2 className="text-3xl md:text-4xl font-black text-white mb-4">
						Nos Engagements Qualite
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{trustItems.map(({ icon: Icon, title, desc, blue }) => (
						<div
							key={title}
							className={`bg-white/5 border border-white/10 p-7 rounded-2xl transition-all ${blue ? 'hover:border-blue-500/50' : 'hover:border-red-500/50'}`}
						>
							<div
								className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${blue ? 'bg-blue-600' : 'bg-red-600'}`}
							>
								<Icon className="w-6 h-6 text-white" />
							</div>
							<h3 className="font-black text-xl text-white mb-2">{title}</h3>
							<p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
