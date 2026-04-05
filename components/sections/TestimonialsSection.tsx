import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'

export function TestimonialsSection() {
	return (
		<section className="py-20 md:py-28 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">
						Temoignages
					</p>
					<h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
						Ce Que Disent Nos Clients
					</h2>
					<p className="text-gray-500 max-w-xl mx-auto">
						La satisfaction de nos clients est notre meilleure recompense
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
						>
							<Quote className="w-8 h-8 text-red-200 mb-4 flex-shrink-0" />
							<p className="text-gray-700 text-sm leading-relaxed flex-1 font-medium">{t.text}</p>
							<div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
								<div>
									<p className="font-black text-gray-900 text-sm">{t.name}</p>
									<p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
								</div>
								<div className="flex gap-0.5">
									{Array.from({ length: t.rating }).map((_, i) => (
										<Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
