'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { site } from '@/lib/data/site'

export function FloatingCallButton() {
	return (
		<div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
			<a
				href={site.whatsappMessage(
					'Bonjour PROS-MOTORS, je souhaite un renseignement.',
				)}
				target="_blank"
				rel="noopener noreferrer"
				className="bg-whatsapp hover:bg-whatsapp-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-black/20 transition-all hover:scale-110"
				aria-label="Contacter PROS-MOTORS sur WhatsApp"
			>
				<MessageCircle className="w-6 h-6" />
			</a>
			<a
				href={site.phoneHref}
				className="bg-primary hover:bg-primary/90 text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-black/20 transition-all hover:scale-110"
				aria-label="Appeler PROS-MOTORS"
			>
				<Phone className="w-6 h-6" />
			</a>
		</div>
	)
}
