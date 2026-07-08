'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Phone, MapPin, Clock, Mail, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/lib/data/site'

const schema = z.object({
	name: z.string().min(2, 'Merci d’indiquer votre nom.'),
	phone: z
		.string()
		.min(8, 'Numéro de téléphone invalide.')
		.regex(/^[\d\s+()-]+$/, 'Numéro de téléphone invalide.'),
	message: z.string().min(5, 'Décrivez brièvement votre besoin.'),
})

type FormValues = z.infer<typeof schema>

export function ContactSection() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({ resolver: zodResolver(schema) })

	const onSubmit = (data: FormValues) => {
		const text = `Bonjour PROS-MOTORS,\nNom : ${data.name}\nTéléphone : ${data.phone}\n\n${data.message}`
		window.open(site.whatsappMessage(text), '_blank', 'noopener,noreferrer')
		toast.success('Votre message est prêt sur WhatsApp — on vous répond vite !')
		reset()
	}

	return (
		<section id="contact" className="py-20 md:py-28 bg-card">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-14">
					<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
						Parlons-nous
					</p>
					<h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
						Contactez-nous
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto text-base">
						Un devis, une question, un rendez-vous ? La réponse la plus rapide,
						c’est par WhatsApp ou par téléphone.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
					{/* Colonne infos */}
					<div className="space-y-4">
						<div className="grid sm:grid-cols-2 gap-4">
							<a
								href={site.whatsappMessage(
									'Bonjour PROS-MOTORS, je souhaite un renseignement.',
								)}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white p-5 rounded-2xl transition shadow-sm"
							>
								<MessageCircle className="w-6 h-6" />
								<span className="font-semibold">WhatsApp</span>
								<span className="text-white/80 text-sm">Réponse rapide</span>
							</a>
							<a
								href={site.phoneHref}
								className="flex flex-col gap-2 bg-primary hover:bg-primary/90 text-primary-foreground p-5 rounded-2xl transition shadow-sm"
							>
								<Phone className="w-6 h-6" />
								<span className="font-semibold">Appeler</span>
								<span className="text-white/80 text-sm">{site.phoneDisplay}</span>
							</a>
						</div>

						<div className="bg-background p-5 rounded-2xl border border-border space-y-4">
							<div className="flex gap-3">
								<MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
								<div>
									<p className="font-semibold text-foreground text-sm">
										{site.address}
									</p>
									<p className="text-muted-foreground text-sm">
										{site.addressDetail}
									</p>
								</div>
							</div>
							<div className="flex gap-3">
								<Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
								<div>
									<p className="font-semibold text-foreground text-sm">Horaires</p>
									<p className="text-muted-foreground text-sm">{site.hours}</p>
								</div>
							</div>
							<div className="flex gap-3">
								<Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
								<div className="min-w-0">
									<p className="font-semibold text-foreground text-sm">Email</p>
									<a
										href={site.emailHref}
										className="text-secondary hover:underline text-sm break-all"
									>
										{site.email}
									</a>
								</div>
							</div>
						</div>

						{/* Carte */}
						<div className="rounded-2xl overflow-hidden border border-border h-56">
							<iframe
								title="Localisation PROS-MOTORS — Cocody 150 lgts"
								src={site.mapEmbed}
								className="w-full h-full"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>

					{/* Formulaire */}
					<div className="bg-background p-6 sm:p-8 rounded-2xl border border-border shadow-sm">
						<h3 className="font-display font-bold text-xl text-foreground mb-1">
							Demander un devis gratuit
						</h3>
						<p className="text-muted-foreground text-sm mb-6">
							Remplissez ce formulaire, il prépare votre message sur WhatsApp.
						</p>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-semibold text-foreground mb-1.5"
								>
									Nom complet
								</label>
								<Input
									id="name"
									placeholder="Votre nom"
									className="rounded-xl bg-card"
									aria-invalid={!!errors.name}
									{...register('name')}
								/>
								{errors.name && (
									<p className="text-primary text-xs mt-1.5">
										{errors.name.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-semibold text-foreground mb-1.5"
								>
									Téléphone
								</label>
								<Input
									id="phone"
									type="tel"
									placeholder="+225 XX XX XX XX XX"
									className="rounded-xl bg-card"
									aria-invalid={!!errors.phone}
									{...register('phone')}
								/>
								{errors.phone && (
									<p className="text-primary text-xs mt-1.5">
										{errors.phone.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-semibold text-foreground mb-1.5"
								>
									Votre besoin
								</label>
								<Textarea
									id="message"
									rows={4}
									placeholder="Ex : vidange + contrôle climatisation sur une Corolla…"
									className="rounded-xl bg-card"
									aria-invalid={!!errors.message}
									{...register('message')}
								/>
								{errors.message && (
									<p className="text-primary text-xs mt-1.5">
										{errors.message.message}
									</p>
								)}
							</div>
							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl shadow-sm h-auto"
							>
								<Send className="w-4 h-4" />
								Envoyer ma demande
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
