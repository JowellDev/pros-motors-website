import { services } from '@/lib/data/services'
import { CarSvg } from '@/components/ui/CarSvg'

export function ServicesSection() {
	return (
		<section id="services" className="py-20 md:py-28 bg-white overflow-hidden relative">
			{/* Decorative sports car top-right */}
			<CarSvg
				variant="sports"
				className="absolute -top-2 -right-16 w-80 text-red-600 opacity-[0.04] pointer-events-none select-none rotate-[-8deg]"
			/>
			{/* Decorative tire bottom-left */}
			<CarSvg
				variant="tire"
				className="absolute -bottom-12 -left-12 w-48 text-gray-800 opacity-[0.05] pointer-events-none select-none"
			/>

			<div className="max-w-7xl mx-auto px-4 relative">
				<div className="text-center mb-14 relative">
					<CarSvg
						variant="gear"
						className="absolute -top-6 left-1/2 -translate-x-1/2 w-36 text-red-600 opacity-[0.05] pointer-events-none select-none"
					/>
					<p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2 relative">
						Ce que nous faisons
					</p>
					<h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 relative">Nos Services</h2>
					<p className="text-gray-500 max-w-xl mx-auto relative">
						Tous vos besoins automobiles pris en charge par des techniciens qualifies
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, idx) => {
						const Icon = service.icon
						return (
							<div
								key={idx}
								className={`p-6 rounded-2xl border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
									service.highlight
										? 'border-red-500 bg-white shadow-lg shadow-red-50'
										: 'border-gray-100 bg-white hover:border-gray-200'
								}`}
							>
								<div className="flex items-start justify-between mb-5">
									<div
										className={`p-3 rounded-xl ${service.highlight ? 'bg-red-600' : 'bg-gray-900'}`}
									>
										<Icon className="w-6 h-6 text-white" />
									</div>
									{service.badge && (
										<span className="px-2.5 py-1 bg-red-600 text-white text-xs font-black rounded-lg tracking-wide">
											{service.badge}
										</span>
									)}
								</div>
								<h3 className="font-black text-xl text-black mb-2">{service.name}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">
									{service.description}
								</p>
							</div>
						)
					})}
				</div>

				{/* Decorative car strip below grid */}
				<div className="mt-16 flex items-center justify-center gap-10 opacity-[0.05] pointer-events-none select-none">
					<CarSvg variant="sports" className="w-64 text-red-600" />
					<CarSvg variant="engine" className="w-28 text-gray-900" />
					<CarSvg variant="sports" className="w-64 text-gray-900 scale-x-[-1]" />
				</div>
			</div>
		</section>
	)
}
