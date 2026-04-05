'use client'

import { useState } from 'react'
import { Menu, X, Phone, Wrench } from 'lucide-react'

const navLinks = [
	{ id: 'home', label: 'Accueil' },
	{ id: 'services', label: 'Services' },
	{ id: 'pricing', label: 'Tarifs' },
	{ id: 'about', label: 'A Propos' },
	{ id: 'contact', label: 'Contact' },
]

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleScroll = (id: string) => {
		setIsMenuOpen(false)
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
						<Wrench className="w-5 h-5 text-white" />
					</div>
					<span className="font-bold text-lg text-gray-900 tracking-tight">
						PROS-MOTORS
					</span>
				</div>

				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
				>
					{isMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>

				<nav className="hidden lg:flex items-center gap-8">
					{navLinks.map(({ id, label }) => (
						<button
							key={id}
							onClick={() => handleScroll(id)}
							className="text-gray-600 hover:text-red-600 transition font-medium text-sm"
							suppressHydrationWarning
						>
							{label}
						</button>
					))}
				</nav>

				<a
					href="tel:+22507590116"
					className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition text-sm font-semibold shadow-sm"
				>
					<Phone className="w-4 h-4" />
					+225 07 59 01 16 16
				</a>
			</div>

			{isMenuOpen && (
				<nav className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1 shadow-lg">
					{navLinks.map(({ id, label }) => (
						<button
							key={id}
							onClick={() => handleScroll(id)}
							className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-lg font-medium transition"
						>
							{label}
						</button>
					))}
				</nav>
			)}
		</header>
	)
}
