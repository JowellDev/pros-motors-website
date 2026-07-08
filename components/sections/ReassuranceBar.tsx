import { ShieldCheck, BadgeCheck, Zap, FileText } from 'lucide-react'

const items = [
	{ icon: BadgeCheck, label: "Pièces d'origine concessionnaire" },
	{ icon: ShieldCheck, label: 'Garantie 2 mois incluse' },
	{ icon: FileText, label: 'Devis gratuit et sans engagement' },
	{ icon: Zap, label: 'Quick Service — rendu le jour même' },
]

export function ReassuranceBar() {
	return (
		<div className="bg-navy text-white">
			<div className="max-w-7xl mx-auto px-4">
				<ul className="flex gap-x-8 gap-y-2 overflow-x-auto py-3.5 md:justify-between md:overflow-visible no-scrollbar">
					{items.map(({ icon: Icon, label }) => (
						<li
							key={label}
							className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-white/85"
						>
							<Icon className="w-4 h-4 text-primary flex-shrink-0" />
							{label}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
