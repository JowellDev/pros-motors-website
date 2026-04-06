import { CheckCircle } from 'lucide-react'
import { pricing } from '@/lib/data/pricing'
import { CarSvg } from '@/components/ui/CarSvg'

export function PricingSection() {
	return (
		<section id="pricing" className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
			{/* Decorative wrench */}
			<CarSvg
				variant="wrench"
				className="absolute top-8 right-8 w-32 text-red-600 opacity-[0.07] pointer-events-none select-none"
			/>
			<CarSvg
				variant="speedometer"
				className="absolute bottom-10 left-6 w-36 text-blue-600 opacity-[0.07] pointer-events-none select-none"
			/>

			<div className="max-w-7xl mx-auto px-4 relative">
				<div className="text-center mb-14">
					<p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">
						Transparence totale
					</p>
					<h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Nos Tarifs</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto">
					{pricing.map((item, idx) => (
						<div
							key={idx}
							className="bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg hover:border-red-200 transition-all flex items-center justify-between"
						>
							<h3 className="font-bold text-gray-900">{item.name}</h3>
							<p className="text-red-600 font-black text-xl">{item.price}</p>
						</div>
					))}
				</div>

				<div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 rounded-2xl flex items-center gap-3 shadow-lg">
					<CheckCircle className="w-6 h-6 flex-shrink-0" />
					<p className="font-semibold text-sm">
						Garantie 1 mois incluse sur toutes les pieces du concessionnaire
					</p>
				</div>

				{/* Decorative car row */}
				<div className="mt-14 flex items-end justify-center gap-6 opacity-[0.07] pointer-events-none select-none">
					<CarSvg variant="sedan" className="w-48 text-gray-800" />
					<CarSvg variant="suv" className="w-52 text-gray-800" />
					<CarSvg variant="sedan" className="w-48 text-gray-800 scale-x-[-1]" />
				</div>
			</div>
		</section>
	)
}
