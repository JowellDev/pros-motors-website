// Source unique de vérité pour les coordonnées et infos de l'établissement.
// ⚠️ Numéro à confirmer : l'ancien site affichait « +225 07 59 01 16 16 »
// mais le lien tel: ne contenait que 8 chiffres. On retient ici le format
// ivoirien valide à 10 chiffres — à vérifier avec le client.
const phoneDigits = '2250759011616'

export const site = {
	name: 'PROS-MOTORS C.I',
	tagline: 'Votre garage de confiance à Cocody',
	phoneDisplay: '+225 07 59 01 16 16',
	phoneHref: `tel:+${phoneDigits}`,
	whatsappHref: `https://wa.me/${phoneDigits}`,
	whatsappMessage: (text: string) =>
		`https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`,
	email: 'info@pros-motors-civ.com',
	emailHref: 'mailto:info@pros-motors-civ.com',
	address: 'Cocody 150 lgts, Abidjan',
	addressDetail: 'À 10m du Palm Club',
	hours: 'Lun–Sam · 7h30–18h',
	rating: '4,9',
	area: '1500 m²',
	capacity: '50 véhicules',
	warranty: 'Garantie 2 mois',
	mapEmbed:
		'https://www.google.com/maps?q=Cocody%20150%20logements%20Palm%20Club%20Abidjan&output=embed',
	mapLink:
		'https://www.google.com/maps/search/?api=1&query=Cocody+150+logements+Palm+Club+Abidjan',
} as const
