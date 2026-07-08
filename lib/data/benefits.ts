import {
	Wallet,
	Zap,
	BadgeCheck,
	ClipboardCheck,
	LifeBuoy,
	Users,
} from 'lucide-react'

// Fusion « Avantages » + « Engagements qualité » — sans doublons.
export const benefits = [
	{
		icon: Wallet,
		title: 'Des prix justes',
		description:
			'Moins cher que le concessionnaire, avec des tarifs affichés clairement.',
		accent: 'red',
	},
	{
		icon: Zap,
		title: 'La rapidité',
		description: 'Quick Service : votre véhicule rendu souvent le jour même.',
		accent: 'blue',
	},
	{
		icon: BadgeCheck,
		title: "Pièces d'origine",
		description:
			'Directement du concessionnaire, garanties 2 mois sur chaque pièce.',
		accent: 'red',
	},
	{
		icon: ClipboardCheck,
		title: 'Contrôle 20 points',
		description:
			'Un contrôle qualité gratuit avant et après chaque intervention.',
		accent: 'blue',
	},
	{
		icon: LifeBuoy,
		title: 'Assistance 24/7',
		description: 'Dépannage et remorquage, de jour comme de nuit.',
		accent: 'red',
	},
	{
		icon: Users,
		title: 'Conseil & suivi',
		description:
			"Des rappels d'entretien personnalisés pour la longévité de votre véhicule.",
		accent: 'blue',
	},
]
