import { Check, ShieldCheck, MessageCircle } from 'lucide-react'
import { packages, hourlyRates } from '@/lib/data/pricing'
import { site } from '@/lib/data/site'

const accentStyles: Record<string, { name: string; check: string }> = {
	bronze: { name: 'text-amber-700', check: 'text-amber-700' },
	silver: { name: 'text-slate-500', check: 'text-slate-500' },
	gold: { name: 'text-gold', check: 'text-gold' },
}

export function PricingSection() {
	return (
		<section id="pricing" className="py-20 md:py-28 bg-background">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
						Transparence totale
					</p>
					<h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
						Formules & tarifs
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto text-base">
						Des prix affichés clairement, sans surprise. Choisissez un forfait de
						suivi mensuel ou payez à l'intervention.
					</p>
				</div>

				{/* Forfaits mensuels */}
				<p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
					Forfaits de suivi mensuel
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
					{packages.map((pkg) => {
						const styles = accentStyles[pkg.accent]
						return (
							<div
								key={pkg.name}
								className={`relative bg-card rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col border ${
									pkg.popular
										? 'border-primary/50 ring-2 ring-primary/15 shadow-lg'
										: 'border-border'
								}`}
							>
								{pkg.popular && (
									<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow bg-primary text-primary-foreground whitespace-nowrap">
										Le plus choisi
									</div>
								)}

								<div className="text-center mb-8">
									<h3
										className={`text-2xl font-display font-extrabold uppercase tracking-widest mb-4 ${styles.name}`}
									>
										{pkg.name}
									</h3>
									<div className="flex items-baseline justify-center gap-1">
										<span className="text-4xl font-display font-extrabold text-foreground tabular-nums">
											{pkg.price}
										</span>
										<span className="text-muted-foreground font-medium text-sm">
											F&nbsp;TTC / mois
										</span>
									</div>
								</div>

								<ul className="space-y-3 mb-8 flex-1">
									{pkg.features.map((feature) => (
										<li key={feature} className="flex items-start gap-3">
											<Check
												className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.check}`}
											/>
											<span className="text-foreground/80 text-sm leading-relaxed">
												{feature}
											</span>
										</li>
									))}
								</ul>

								<a
									href={site.whatsappMessage(
										`Bonjour PROS-MOTORS, je souhaite souscrire au forfait ${pkg.name} (${pkg.price} F/mois).`,
									)}
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all ${
										pkg.popular
											? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md'
											: 'bg-muted hover:bg-accent text-foreground'
									}`}
								>
									<MessageCircle className="w-4 h-4" />
									Souscrire
								</a>
							</div>
						)
					})}
				</div>

				{/* Tarifs horaires */}
				<p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
					Tarifs à l'intervention
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 max-w-3xl mx-auto">
					{hourlyRates.map((item) => (
						<div
							key={item.name}
							className="bg-card border border-border p-5 rounded-2xl hover:border-primary/30 transition-all flex items-center justify-between gap-4"
						>
							<h3 className="font-medium text-foreground text-sm">{item.name}</h3>
							<p className="text-primary font-display font-bold text-lg whitespace-nowrap tabular-nums">
								{item.price}
							</p>
						</div>
					))}
				</div>

				<div className="max-w-3xl mx-auto bg-secondary text-secondary-foreground p-5 rounded-2xl flex items-center gap-3 shadow-lg">
					<ShieldCheck className="w-6 h-6 flex-shrink-0" />
					<p className="font-medium text-sm">
						{site.warranty} incluse sur toutes les pièces d'origine
						concessionnaire.
					</p>
				</div>
			</div>
		</section>
	)
}
