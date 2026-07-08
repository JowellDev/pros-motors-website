'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Wrench, Star, MessageCircle } from 'lucide-react'
import { site } from '@/lib/data/site'

const navLinks = [
	{ id: 'home', label: 'Accueil' },
	{ id: 'services', label: 'Services' },
	{ id: 'process', label: 'Comment ça marche' },
	{ id: 'pricing', label: 'Tarifs' },
	{ id: 'about', label: 'À propos' },
	{ id: 'contact', label: 'Contact' },
]

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12)
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const handleScroll = (id: string) => {
		setIsMenuOpen(false)
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<header
			className={`sticky top-0 z-50 transition-all ${
				scrolled
					? 'bg-card/90 backdrop-blur-md border-b border-border shadow-sm'
					: 'bg-card/60 backdrop-blur-sm border-b border-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
				<button
					onClick={() => handleScroll('home')}
					className="flex items-center gap-2.5 group"
					aria-label="Retour en haut"
				>
					<span className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-sm ring-1 ring-primary/20 group-hover:ring-secondary transition">
						<Wrench className="w-5 h-5 text-white" />
					</span>
					<span className="font-display font-extrabold text-lg text-foreground tracking-tight leading-none">
						PROS-MOTORS
						<span className="block text-[10px] font-mono font-medium tracking-[0.3em] text-muted-foreground">
							C.I · COCODY
						</span>
					</span>
				</button>

				<nav className="hidden lg:flex items-center gap-7">
					{navLinks.map(({ id, label }) => (
						<button
							key={id}
							onClick={() => handleScroll(id)}
							className="text-muted-foreground hover:text-foreground transition font-medium text-sm"
							suppressHydrationWarning
						>
							{label}
						</button>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<span className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-muted-foreground pr-1">
						<Star className="w-3.5 h-3.5 fill-gold text-gold" />
						<b className="text-foreground font-semibold">{site.rating}</b> · Google
					</span>
					<a
						href={site.whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
						className="hidden sm:flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-3.5 py-2 rounded-xl transition text-sm font-semibold shadow-sm"
					>
						<MessageCircle className="w-4 h-4" />
						WhatsApp
					</a>
					<a
						href={site.phoneHref}
						className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-3.5 py-2 rounded-xl transition text-sm font-semibold shadow-sm"
					>
						<Phone className="w-4 h-4" />
						Appeler
					</a>

					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="lg:hidden p-2 hover:bg-muted rounded-lg text-foreground"
						aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
						aria-expanded={isMenuOpen}
					>
						{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<nav className="lg:hidden bg-card border-t border-border px-4 pb-4 pt-2 space-y-1 shadow-lg">
					{navLinks.map(({ id, label }) => (
						<button
							key={id}
							onClick={() => handleScroll(id)}
							className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg font-medium transition"
						>
							{label}
						</button>
					))}
					<div className="flex gap-2 pt-2">
						<a
							href={site.whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white px-4 py-3 rounded-xl font-semibold text-sm"
						>
							<MessageCircle className="w-4 h-4" />
							WhatsApp
						</a>
						<a
							href={site.phoneHref}
							className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl font-semibold text-sm"
						>
							<Phone className="w-4 h-4" />
							Appeler
						</a>
					</div>
				</nav>
			)}
		</header>
	)
}
