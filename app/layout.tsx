import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '@/styles/globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'PROS-MOTORS CI',
	description:
		"PROS-MOTORS C.I SARL est votre garage de confiance à Abidjan. Situé à Cocody 150 lgts — a 10m du Palm Club, nous offrons des services complets d'entretien et réparation automobile : mécanique générale, électricité, climatisation, tôlerie-peinture, et vente de pièces détachées. Notre atelier moderne de 1500m² garantit rapidité, professionnalisme et prix compétitifs. Pièces d'origine concessionnaire, Quick Service, assistance 24/7, et garantie 2 mois. Ouverts du lundi au samedi de 7h30 à 18h.",
	icons: {
		icon: '/favicon.svg',
		apple: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="font-sans antialiased" suppressHydrationWarning>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
