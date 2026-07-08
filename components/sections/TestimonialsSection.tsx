import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'
import { site } from '@/lib/data/site'

const initials = (name: string) =>
	name
		.split(' ')
		.slice(0, 2)
		.map((n) => n[0])
		.join('')
		.toUpperCase()

export function TestimonialsSection() {
	return (
		<section className="py-20 md:py-28 bg-background">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
						Témoignages
					</p>
					<h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-5">
						Ce que disent nos clients
					</h2>
					<div className="inline-flex items-center gap-2.5 bg-card border border-border rounded-full pl-3 pr-4 py-1.5 shadow-sm">
						<span className="flex gap-0.5">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star key={i} className="w-4 h-4 fill-gold text-gold" />
							))}
						</span>
						<span className="text-sm text-foreground">
							<b className="font-semibold">{site.rating}/5</b>
							<span className="text-muted-foreground"> · avis Google</span>
						</span>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((t, idx) => (
						<figure
							key={idx}
							className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
						>
							<Quote className="w-8 h-8 text-primary/25 mb-4 flex-shrink-0" />
							<blockquote className="text-foreground/80 text-sm leading-relaxed flex-1">
								{t.text}
							</blockquote>
							<figcaption className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3">
								<div className="flex items-center gap-3 min-w-0">
									<span className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-display font-bold text-sm flex items-center justify-center flex-shrink-0">
										{initials(t.name)}
									</span>
									<div className="min-w-0">
										<p className="font-semibold text-foreground text-sm truncate">
											{t.name}
										</p>
										<p className="text-muted-foreground text-xs truncate">
											{t.role}
										</p>
									</div>
								</div>
								<div className="flex gap-0.5 flex-shrink-0">
									{Array.from({ length: t.rating }).map((_, i) => (
										<Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
									))}
								</div>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
