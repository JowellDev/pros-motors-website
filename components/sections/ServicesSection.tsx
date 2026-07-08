import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data/services'
import { site } from '@/lib/data/site'

export function ServicesSection() {
	return (
		<section id="services" className="py-20 md:py-28 bg-background">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
						Ce que nous faisons
					</p>
					<h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
						Nos services
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto text-base">
						Tous vos besoins automobiles pris en charge par des techniciens
						qualifiés, sous un même toit.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{services.map((service, idx) => {
						const Icon = service.icon
						return (
							<div
								key={idx}
								className={`group relative p-6 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col ${
									service.highlight
										? 'border-primary/40 bg-card shadow-lg shadow-primary/5 ring-1 ring-primary/10'
										: 'border-border bg-card hover:border-secondary/30'
								}`}
							>
								<div className="flex items-start justify-between mb-5">
									<div
										className={`p-3 rounded-xl transition-colors ${service.highlight ? 'bg-primary' : 'bg-secondary group-hover:bg-secondary/90'}`}
									>
										<Icon className="w-6 h-6 text-white" />
									</div>
									{service.badge && (
										<span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-lg tracking-wide">
											{service.badge}
										</span>
									)}
								</div>
								<h3 className="font-display font-bold text-xl text-foreground mb-2">
									{service.name}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed flex-1">
									{service.description}
								</p>
								<a
									href={site.whatsappMessage(
										`Bonjour PROS-MOTORS, je souhaite un devis pour : ${service.name}.`,
									)}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
								>
									Demander un devis
									<ArrowRight className="w-4 h-4" />
								</a>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
