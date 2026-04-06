import { Zap, Wrench, Palette, Snowflake, Package, Droplets, AlertCircle } from 'lucide-react'

export const services = [
	{
		icon: Zap,
		name: 'Quick Service',
		description: 'Vidange, freinage, echappement, batterie, eclairage',
		badge: 'Service Express',
		highlight: true,
	},
	{
		icon: Wrench,
		name: 'Entretien & Reparation',
		description: 'Revision periodique, diagnostic, SICTA, parallelisme',
		badge: null,
		highlight: false,
	},
	{
		icon: Palette,
		name: 'Tolerie & Peinture',
		description: 'Carrosserie, sellerie, peinture brillante et vernie',
		badge: null,
		highlight: false,
	},
	{
		icon: Snowflake,
		name: 'Climatisation',
		description: 'Diagnostic et reparation clim',
		badge: null,
		highlight: false,
	},
	{
		icon: Package,
		name: 'Vente Pieces',
		description: "Accessoires, pieces d'origine, commande express",
		badge: null,
		highlight: false,
	},
	{
		icon: Droplets,
		name: 'Station Lavage',
		description: 'Nettoyage complet, lustrage, lavage moteur',
		badge: null,
		highlight: false,
	},
	{
		icon: AlertCircle,
		name: 'Assistance 24/7',
		description: 'Depannage et remorquage jour et nuit',
		badge: null,
		highlight: false,
	},
]
