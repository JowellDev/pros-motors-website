import { benefits } from '@/lib/data/benefits'
import { CarSvg } from '@/components/ui/CarSvg'

export function BenefitsSection() {
	return (
		<section className="py-20 md:py-28 bg-gray-950 text-white overflow-hidden relative">
			{/* Decorative SUV top-right */}
			<CarSvg
				variant="suv"
				className="absolute top-8 right-0 w-72 text-white opacity-[0.04] pointer-events-none select-none"
			/>
			{/* Decorative sedan bottom-left */}
			<CarSvg
				variant="sedan"
				className="absolute bottom-8 left-0 w-72 text-white opacity-[0.04] pointer-events-none select-none scale-x-[-1]"
			/>

			<div className="max-w-7xl mx-auto px-4 relative">
				<div className="text-center mb-14">
					<p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-2">
						Nos avantages
					</p>
					<h2 className="text-3xl md:text-4xl font-black text-white mb-4">
						Pourquoi Choisir PROS-MOTORS ?
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{benefits.map((benefit, idx) => {
						const Icon = benefit.icon
						const isBlue = benefit.color === 'blue'
						return (
							<div
								key={idx}
								className={`bg-white/5 border border-white/10 p-6 rounded-2xl transition-all group ${isBlue ? 'hover:bg-blue-900/20 hover:border-blue-500/40' : 'hover:bg-white/10 hover:border-red-500/40'}`}
							>
								<div
									className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${isBlue ? 'bg-blue-600/20 group-hover:bg-blue-600' : 'bg-red-600/20 group-hover:bg-red-600'}`}
								>
									<Icon
										className={`w-5 h-5 transition-colors group-hover:text-white ${isBlue ? 'text-blue-400' : 'text-red-400'}`}
									/>
								</div>
								<h3 className="font-black text-lg text-white mb-1">{benefit.title}</h3>
								<p className="text-gray-400 text-sm">{benefit.description}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
