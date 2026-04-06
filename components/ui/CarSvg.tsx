type CarSvgProps = {
	variant?: 'sedan' | 'wrench' | 'speedometer' | 'suv'
	className?: string
}

export function CarSvg({ variant = 'sedan', className = '' }: CarSvgProps) {
	if (variant === 'sedan') {
		return (
			<svg
				viewBox="0 0 200 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-hidden="true"
			>
				{/* Body */}
				<path
					d="M20 52 L30 30 Q50 14 100 14 Q140 14 165 30 L178 52 L182 58 L18 58 Z"
					fill="currentColor"
					opacity="0.15"
				/>
				{/* Roof */}
				<path
					d="M52 30 Q70 15 100 14 Q130 14 148 30 Z"
					fill="currentColor"
					opacity="0.25"
				/>
				{/* Windows */}
				<path d="M60 30 L72 20 Q86 15 100 15 L100 30 Z" fill="currentColor" opacity="0.4" />
				<path d="M104 15 Q118 15 132 20 L142 30 L104 30 Z" fill="currentColor" opacity="0.4" />
				{/* Bottom bar */}
				<rect x="18" y="56" width="164" height="4" rx="2" fill="currentColor" opacity="0.3" />
				{/* Wheels */}
				<circle cx="50" cy="62" r="12" fill="currentColor" opacity="0.2" />
				<circle cx="50" cy="62" r="7" fill="currentColor" opacity="0.4" />
				<circle cx="50" cy="62" r="3" fill="currentColor" opacity="0.6" />
				<circle cx="148" cy="62" r="12" fill="currentColor" opacity="0.2" />
				<circle cx="148" cy="62" r="7" fill="currentColor" opacity="0.4" />
				<circle cx="148" cy="62" r="3" fill="currentColor" opacity="0.6" />
				{/* Headlight */}
				<ellipse cx="175" cy="46" rx="5" ry="3" fill="currentColor" opacity="0.5" />
				{/* Taillight */}
				<ellipse cx="24" cy="46" rx="4" ry="3" fill="currentColor" opacity="0.5" />
			</svg>
		)
	}

	if (variant === 'suv') {
		return (
			<svg
				viewBox="0 0 200 85"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-hidden="true"
			>
				{/* Body */}
				<path
					d="M15 54 L18 28 Q20 16 40 14 L160 14 Q180 14 182 28 L185 54 L185 60 L15 60 Z"
					fill="currentColor"
					opacity="0.15"
				/>
				{/* Roof */}
				<rect x="38" y="14" width="124" height="2" rx="1" fill="currentColor" opacity="0.3" />
				{/* Windows */}
				<rect x="42" y="17" width="52" height="22" rx="3" fill="currentColor" opacity="0.35" />
				<rect x="100" y="17" width="58" height="22" rx="3" fill="currentColor" opacity="0.35" />
				{/* Door lines */}
				<line x1="97" y1="17" x2="97" y2="54" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
				{/* Bottom bar */}
				<rect x="15" y="57" width="170" height="4" rx="2" fill="currentColor" opacity="0.25" />
				{/* Wheels */}
				<circle cx="52" cy="64" r="13" fill="currentColor" opacity="0.2" />
				<circle cx="52" cy="64" r="8" fill="currentColor" opacity="0.35" />
				<circle cx="52" cy="64" r="3" fill="currentColor" opacity="0.6" />
				<circle cx="148" cy="64" r="13" fill="currentColor" opacity="0.2" />
				<circle cx="148" cy="64" r="8" fill="currentColor" opacity="0.35" />
				<circle cx="148" cy="64" r="3" fill="currentColor" opacity="0.6" />
				{/* Headlight */}
				<rect x="175" y="28" width="10" height="6" rx="2" fill="currentColor" opacity="0.5" />
				{/* Taillight */}
				<rect x="15" y="28" width="8" height="6" rx="2" fill="currentColor" opacity="0.5" />
				{/* Bumper details */}
				<rect x="20" y="54" width="18" height="4" rx="1" fill="currentColor" opacity="0.2" />
				<rect x="162" y="54" width="18" height="4" rx="1" fill="currentColor" opacity="0.2" />
			</svg>
		)
	}

	if (variant === 'wrench') {
		return (
			<svg
				viewBox="0 0 80 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-hidden="true"
			>
				<path
					d="M58 8 C48 8 40 16 40 26 C40 29 41 32 43 34.5 L14 62 C12 64 12 67 14 69 C16 71 19 71 21 69 L50 41 C52 43 55 44 58 44 C68 44 76 36 76 26 C76 22 74.5 18.5 72 16 L64 24 L58 22 L56 16 L64 8 C62 8 60 8 58 8 Z"
					fill="currentColor"
					opacity="0.2"
				/>
				<circle cx="17" cy="66" r="3" fill="currentColor" opacity="0.4" />
			</svg>
		)
	}

	if (variant === 'speedometer') {
		return (
			<svg
				viewBox="0 0 100 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-hidden="true"
			>
				{/* Arc */}
				<path
					d="M10 55 A42 42 0 0 1 90 55"
					stroke="currentColor"
					strokeWidth="6"
					strokeLinecap="round"
					opacity="0.15"
					fill="none"
				/>
				<path
					d="M10 55 A42 42 0 0 1 60 14"
					stroke="currentColor"
					strokeWidth="6"
					strokeLinecap="round"
					opacity="0.35"
					fill="none"
				/>
				{/* Tick marks */}
				{[0, 30, 60, 90, 120, 150, 180].map((angle, i) => {
					const rad = ((angle - 180) * Math.PI) / 180
					const x1 = 50 + 36 * Math.cos(rad)
					const y1 = 55 + 36 * Math.sin(rad)
					const x2 = 50 + 42 * Math.cos(rad)
					const y2 = 55 + 42 * Math.sin(rad)
					return (
						<line
							key={i}
							x1={x1} y1={y1} x2={x2} y2={y2}
							stroke="currentColor"
							strokeWidth="2"
							opacity="0.3"
						/>
					)
				})}
				{/* Needle */}
				<line
					x1="50" y1="55" x2="30" y2="22"
					stroke="currentColor"
					strokeWidth="2.5"
					strokeLinecap="round"
					opacity="0.6"
				/>
				{/* Center dot */}
				<circle cx="50" cy="55" r="4" fill="currentColor" opacity="0.5" />
			</svg>
		)
	}

	return null
}
