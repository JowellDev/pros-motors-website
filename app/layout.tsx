import type { Metadata } from 'next'
import { Archivo, Hanken_Grotesk, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import '@/styles/globals.css'

const archivo = Archivo({
	subsets: ['latin'],
	variable: '--font-archivo',
	display: 'swap',
})
const hanken = Hanken_Grotesk({
	subsets: ['latin'],
	variable: '--font-hanken',
	display: 'swap',
})
const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'PROS-MOTORS C.I — Garage de confiance à Cocody, Abidjan',
	description:
		"PROS-MOTORS C.I SARL est votre garage de confiance à Abidjan. Situé à Cocody 150 lgts — à 10m du Palm Club, nous offrons des services complets d'entretien et de réparation automobile : mécanique générale, électricité, climatisation, tôlerie-peinture et vente de pièces détachées. Notre atelier moderne de 1500 m² garantit rapidité, professionnalisme et prix compétitifs. Pièces d'origine concessionnaire, Quick Service, assistance 24/7 et garantie 2 mois. Ouverts du lundi au samedi de 7h30 à 18h.",
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
		<html
			lang="fr"
			className={`${archivo.variable} ${hanken.variable} ${geistMono.variable}`}
		>
			<body className="font-sans antialiased" suppressHydrationWarning>
				{children}
				<Toaster />
				<Analytics />
			</body>
		</html>
	)
}
