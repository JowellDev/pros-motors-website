import { benefits } from '@/lib/data/benefits'

export function BenefitsSection() {
	return (
		<section className="py-20 md:py-28 bg-card">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
						Nos engagements
					</p>
					<h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
						Pourquoi choisir PROS-MOTORS ?
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto text-base">
						Six raisons concrètes de nous confier votre véhicule, en toute
						sérénité.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{benefits.map((benefit, idx) => {
						const Icon = benefit.icon
						const isRed = benefit.accent === 'red'
						return (
							<div
								key={idx}
								className="group bg-background border border-border p-6 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5"
							>
								<div
									className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
										isRed
											? 'bg-primary/10 group-hover:bg-primary'
											: 'bg-secondary/10 group-hover:bg-secondary'
									}`}
								>
									<Icon
										className={`w-6 h-6 transition-colors group-hover:text-white ${isRed ? 'text-primary' : 'text-secondary'}`}
									/>
								</div>
								<h3 className="font-display font-bold text-lg text-foreground mb-1.5">
									{benefit.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{benefit.description}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
