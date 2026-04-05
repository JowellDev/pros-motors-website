import { Phone } from 'lucide-react'

export function FloatingCallButton() {
	return (
		<a
			href="tel:+22507590116"
			className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-red-200 hover:shadow-red-300 transition-all hover:scale-110 z-50"
			aria-label="Appeler PROS-MOTORS"
		>
			<Phone className="w-6 h-6" />
		</a>
	)
}
