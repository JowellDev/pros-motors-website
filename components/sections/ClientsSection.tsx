import Image from 'next/image'
import { clients } from '@/lib/data/clients'

const track = [...clients, ...clients]

export function ClientsSection() {
	return (
		<section className="py-16 md:py-20 bg-background overflow-hidden">
			<div className="max-w-7xl mx-auto px-4">
				<p className="text-center text-primary font-mono text-xs uppercase tracking-[0.2em] mb-10">
					Ils nous font confiance
				</p>
			</div>

			<div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
				<div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
					{track.map((client, idx) => (
						<div
							key={`${client.name}-${idx}`}
							aria-hidden={idx >= clients.length}
							className="group flex shrink-0 items-center justify-center w-44 md:w-56 mx-3"
						>
							<div className="relative flex h-24 w-full items-center justify-center rounded-xl border border-border bg-card px-6 shadow-sm">
								<div className="relative h-14 w-full grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
									<Image
										src={client.logo}
										alt={client.name}
										fill
										sizes="224px"
										className="object-contain"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
