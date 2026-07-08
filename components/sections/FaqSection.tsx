import { MessageCircle } from 'lucide-react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { site } from '@/lib/data/site'

const faqs = [
	{
		q: 'Proposez-vous un devis gratuit ?',
		a: "Oui. Le devis est gratuit et sans engagement. Décrivez-nous votre besoin par téléphone, sur WhatsApp ou directement à l'atelier, et nous vous répondons rapidement.",
	},
	{
		q: 'Quelle est la durée de la garantie ?',
		a: "Nous appliquons une garantie de 2 mois sur toutes les pièces d'origine concessionnaire installées dans notre atelier.",
	},
	{
		q: 'Travaillez-vous sur toutes les marques ?',
		a: "Oui, nous intervenons sur toutes les marques. Les pièces d'origine peuvent être commandées en express lorsque nécessaire.",
	},
	{
		q: "Combien de temps prend une intervention ?",
		a: 'Cela dépend de la prestation, mais grâce au Quick Service (vidange, freinage, batterie, éclairage…) de nombreuses interventions sont réalisées le jour même.',
	},
	{
		q: 'Quels moyens de paiement acceptez-vous ?',
		a: 'Plusieurs moyens de paiement sont acceptés (espèces, mobile money, virement). Contactez-nous pour connaître les modalités.',
	},
	{
		q: 'Où êtes-vous situés et quels sont vos horaires ?',
		a: `Nous sommes à ${site.address} (${site.addressDetail}). Ouvert ${site.hours}, avec une assistance et un dépannage disponibles 24/7.`,
	},
]

export function FaqSection() {
	return (
		<section id="faq" className="py-20 md:py-28 bg-background">
			<div className="max-w-3xl mx-auto px-4">
				<div className="text-center mb-12">
					<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
						Vous vous demandez…
					</p>
					<h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
						Questions fréquentes
					</h2>
				</div>

				<Accordion type="single" collapsible className="w-full space-y-3">
					{faqs.map((faq, idx) => (
						<AccordionItem
							key={idx}
							value={`item-${idx}`}
							className="bg-card border border-border rounded-2xl px-5 last:border-b"
						>
							<AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
								{faq.q}
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground leading-relaxed">
								{faq.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				<div className="mt-8 text-center">
					<p className="text-muted-foreground text-sm mb-3">
						Vous ne trouvez pas votre réponse ?
					</p>
					<a
						href={site.whatsappMessage(
							'Bonjour PROS-MOTORS, j’ai une question :',
						)}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-5 py-3 rounded-xl transition shadow-sm"
					>
						<MessageCircle className="w-4 h-4" />
						Poser une question sur WhatsApp
					</a>
				</div>
			</div>
		</section>
	)
}
