import { Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
	return (
		<section id="contact" className="py-20 md:py-28 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">
						Parlons-nous
					</p>
					<h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Contactez-Nous</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-4">
						<a
							href="tel:+22507590116"
							className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-black py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
						>
							<Phone className="w-5 h-5" />
							Appeler: +225 07 59 01 16 16
						</a>
						<a
							href="mailto:info@pros-motors-civ.com"
							className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 rounded-xl transition flex items-center justify-center gap-2"
						>
							Email: info@pros-motors-civ.com
						</a>

						<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
							<h3 className="font-black text-gray-900">Localisation</h3>
							<div className="space-y-2 text-gray-600">
								<p className="flex gap-2 items-start text-sm">
									<MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
									<span>Cocody 150 lgts, Abidjan</span>
								</p>
								<p className="text-sm text-gray-500 pl-6">A 10m du Palm Club</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
								<h3 className="font-black text-gray-900 text-sm mb-1">Horaires</h3>
								<p className="text-gray-600 text-sm flex items-center gap-1.5">
									<Clock className="w-4 h-4 text-blue-600" />
									Lun-Sam 7h30-18h
								</p>
							</div>
							<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
								<h3 className="font-black text-gray-900 text-sm mb-1">Email</h3>
								<a
									href="mailto:info@pros-motors-civ.com"
									className="text-blue-600 hover:text-blue-700 text-xs underline break-all"
								>
									info@pros-motors-civ.com
								</a>
							</div>
						</div>
					</div>

					<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
						<h3 className="font-black text-xl text-gray-900 mb-6">Formulaire de Contact</h3>
						<form className="space-y-4">
							<div>
								<label className="block text-sm font-bold text-gray-700 mb-1.5">
									Nom complet
								</label>
								<Input placeholder="Votre nom" className="w-full rounded-xl" />
							</div>
							<div>
								<label className="block text-sm font-bold text-gray-700 mb-1.5">
									Telephone
								</label>
								<Input
									placeholder="+225 XX XX XX XX XX"
									type="tel"
									className="w-full rounded-xl"
								/>
							</div>
							<div>
								<label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
								<Textarea
									placeholder="Decrivez votre besoin..."
									rows={4}
									className="w-full rounded-xl"
								/>
							</div>
							<Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-black py-3 rounded-xl shadow-md">
								Envoyer le Message
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
