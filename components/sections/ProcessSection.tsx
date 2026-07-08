import { MessageCircle, ClipboardCheck, Wrench, KeyRound } from 'lucide-react'

const steps = [
	{
		icon: MessageCircle,
		title: 'Contact & devis gratuit',
		desc: 'Appelez ou écrivez sur WhatsApp et décrivez votre besoin. Vous recevez un devis clair, sans engagement.',
	},
	{
		icon: ClipboardCheck,
		title: 'Diagnostic 20 points',
		desc: "À l'atelier, un contrôle complet et gratuit est réalisé avant toute intervention. Vous validez, en toute transparence.",
	},
	{
		icon: Wrench,
		title: 'Réparation & suivi',
		desc: "Nos techniciens interviennent avec des pièces d'origine concessionnaire. Vous êtes tenu informé à chaque étape.",
	},
	{
		icon: KeyRound,
		title: 'Restitution le jour même',
		desc: 'Grâce au Quick Service, vous récupérez souvent votre véhicule le jour même — avec 2 mois de garantie.',
	},
]

export function ProcessSection() {
	return (
		<section id="process" className="py-20 md:py-28 bg-card">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-16">
					<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
						Simple et transparent
					</p>
					<h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
						Comment ça marche
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto text-base">
						De votre premier message à la restitution des clés, un parcours clair
						et sans stress.
					</p>
				</div>

				<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
					{/* Ligne de liaison (desktop) */}
					<div
						className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-border"
						aria-hidden="true"
					/>
					{steps.map(({ icon: Icon, title, desc }, idx) => (
						<div key={title} className="relative flex flex-col items-start">
							<div className="relative mb-5">
								<div className="w-[72px] h-[72px] rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm">
									<Icon className="w-7 h-7 text-secondary" />
								</div>
								<span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold flex items-center justify-center shadow">
									{String(idx + 1).padStart(2, '0')}
								</span>
							</div>
							<h3 className="font-display font-bold text-lg text-foreground mb-2">
								{title}
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
