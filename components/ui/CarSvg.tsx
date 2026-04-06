type CarSvgProps = {
	variant?: 'sedan' | 'wrench' | 'speedometer' | 'suv' | 'sports' | 'engine' | 'tire' | 'gear'
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

	if (variant === 'sports') {
		return (
			<svg
				viewBox="0 0 220 70"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-hidden="true"
			>
				{/* Sleek body */}
				<path
					d="M10 48 Q15 42 30 40 L60 28 Q90 18 130 18 Q170 18 185 28 L200 40 Q210 42 215 48 L215 52 L10 52 Z"
					fill="currentColor"
					opacity="0.18"
				/>
				{/* Low roof line */}
				<path
					d="M70 28 Q95 16 130 16 Q165 16 175 28 L170 30 L75 30 Z"
					fill="currentColor"
					opacity="0.28"
				/>
				{/* Windshield */}
				<path
					d="M78 30 L88 20 Q110 16 130 16 L130 30 Z"
					fill="currentColor"
					opacity="0.45"
				/>
				{/* Side window */}
				<path
					d="M134 16 Q150 16 162 20 L168 30 L134 30 Z"
					fill="currentColor"
					opacity="0.45"
				/>
				{/* Hood lines */}
				<path d="M30 40 L65 30" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
				<path d="M32 44 L68 34" stroke="currentColor" strokeWidth="1" opacity="0.15" />
				{/* Air intakes */}
				<rect x="42" y="42" width="12" height="3" rx="1" fill="currentColor" opacity="0.3" />
				<rect x="165" y="42" width="12" height="3" rx="1" fill="currentColor" opacity="0.3" />
				{/* Spoiler */}
				<path d="M18 46 L8 44 L8 42 L20 44 Z" fill="currentColor" opacity="0.35" />
				{/* Bottom trim */}
				<rect x="10" y="50" width="205" height="3" rx="1.5" fill="currentColor" opacity="0.25" />
				{/* Large sport wheels */}
				<circle cx="55" cy="55" r="14" fill="currentColor" opacity="0.2" />
				<circle cx="55" cy="55" r="10" fill="currentColor" opacity="0.35" />
				<circle cx="55" cy="55" r="4" fill="currentColor" opacity="0.55" />
				{/* Wheel spokes */}
				{[0, 72, 144, 216, 288].map((angle, i) => {
					const rad = (angle * Math.PI) / 180
					return (
						<line
							key={i}
							x1={55 + 4 * Math.cos(rad)}
							y1={55 + 4 * Math.sin(rad)}
							x2={55 + 9 * Math.cos(rad)}
							y2={55 + 9 * Math.sin(rad)}
							stroke="currentColor"
							strokeWidth="2"
							opacity="0.4"
						/>
					)
				})}
				<circle cx="170" cy="55" r="14" fill="currentColor" opacity="0.2" />
				<circle cx="170" cy="55" r="10" fill="currentColor" opacity="0.35" />
				<circle cx="170" cy="55" r="4" fill="currentColor" opacity="0.55" />
				{[0, 72, 144, 216, 288].map((angle, i) => {
					const rad = (angle * Math.PI) / 180
					return (
						<line
							key={i}
							x1={170 + 4 * Math.cos(rad)}
							y1={55 + 4 * Math.sin(rad)}
							x2={170 + 9 * Math.cos(rad)}
							y2={55 + 9 * Math.sin(rad)}
							stroke="currentColor"
							strokeWidth="2"
							opacity="0.4"
						/>
					)
				})}
				{/* Headlights */}
				<ellipse cx="205" cy="44" rx="6" ry="2.5" fill="currentColor" opacity="0.5" />
				<ellipse cx="205" cy="48" rx="4" ry="1.5" fill="currentColor" opacity="0.35" />
				{/* Taillights */}
				<rect x="12" y="43" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
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

	if (variant === 'engine') {
		return (
			<svg
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-hidden="true"
			>
				{/* Engine block */}
				<rect x="20" y="30" width="60" height="50" rx="4" fill="currentColor" opacity="0.15" />
				{/* Cylinder head */}
				<rect x="25" y="20" width="50" height="15" rx="3" fill="currentColor" opacity="0.25" />
				{/* Valve cover */}
				<rect x="30" y="14" width="40" height="8" rx="2" fill="currentColor" opacity="0.3" />
				{/* Intake manifold */}
				<path d="M35 14 Q50 5 65 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.2" fill="none" />
				{/* Exhaust ports */}
				<rect x="15" y="38" width="8" height="6" rx="2" fill="currentColor" opacity="0.35" />
				<rect x="15" y="48" width="8" height="6" rx="2" fill="currentColor" opacity="0.35" />
				<rect x="15" y="58" width="8" height="6" rx="2" fill="currentColor" opacity="0.35" />
				{/* Oil pan */}
				<path d="M22 80 L25 85 L75 85 L78 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.2" fill="none" />
				{/* Alternator */}
				<circle cx="85" cy="55" r="10" fill="currentColor" opacity="0.2" />
				<circle cx="85" cy="55" r="5" fill="currentColor" opacity="0.35" />
				{/* Belt */}
				<path d="M75 55 Q70 40 50 35" stroke="currentColor" strokeWidth="2" opacity="0.2" fill="none" />
				{/* Spark plugs */}
				<rect x="35" y="8" width="3" height="8" rx="1" fill="currentColor" opacity="0.4" />
				<rect x="48" y="8" width="3" height="8" rx="1" fill="currentColor" opacity="0.4" />
				<rect x="61" y="8" width="3" height="8" rx="1" fill="currentColor" opacity="0.4" />
				{/* Cooling fins */}
				<line x1="25" y1="45" x2="75" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.15" />
				<line x1="25" y1="52" x2="75" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.15" />
				<line x1="25" y1="59" x2="75" y2="59" stroke="currentColor" strokeWidth="1" opacity="0.15" />
				<line x1="25" y1="66" x2="75" y2="66" stroke="currentColor" strokeWidth="1" opacity="0.15" />
			</svg>
		)
	}

	if (variant === 'tire') {
		return (
			<svg
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-hidden="true"
			>
				{/* Outer tire */}
				<circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.12" />
				{/* Tire tread pattern */}
				<circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" opacity="0.2" fill="none" />
				{/* Tread grooves */}
				{[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
					const rad = (angle * Math.PI) / 180
					return (
						<line
							key={i}
							x1={50 + 37 * Math.cos(rad)}
							y1={50 + 37 * Math.sin(rad)}
							x2={50 + 48 * Math.cos(rad)}
							y2={50 + 48 * Math.sin(rad)}
							stroke="currentColor"
							strokeWidth="3"
							opacity="0.25"
						/>
					)
				})}
				{/* Inner tire wall */}
				<circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="2" opacity="0.2" fill="none" />
				{/* Rim */}
				<circle cx="50" cy="50" r="28" fill="currentColor" opacity="0.15" />
				<circle cx="50" cy="50" r="24" fill="currentColor" opacity="0.25" />
				{/* Spokes */}
				{[0, 60, 120, 180, 240, 300].map((angle, i) => {
					const rad = (angle * Math.PI) / 180
					return (
						<path
							key={i}
							d={`M ${50 + 8 * Math.cos(rad)} ${50 + 8 * Math.sin(rad)} 
								Q ${50 + 18 * Math.cos(rad + 0.2)} ${50 + 18 * Math.sin(rad + 0.2)} 
								${50 + 22 * Math.cos(rad)} ${50 + 22 * Math.sin(rad)}`}
							stroke="currentColor"
							strokeWidth="4"
							strokeLinecap="round"
							opacity="0.35"
							fill="none"
						/>
					)
				})}
				{/* Center cap */}
				<circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.4" />
				<circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.55" />
				{/* Lug nuts */}
				{[0, 72, 144, 216, 288].map((angle, i) => {
					const rad = (angle * Math.PI) / 180
					return (
						<circle
							key={i}
							cx={50 + 14 * Math.cos(rad)}
							cy={50 + 14 * Math.sin(rad)}
							r="2"
							fill="currentColor"
							opacity="0.45"
						/>
					)
				})}
			</svg>
		)
	}

	if (variant === 'gear') {
		return (
			<svg
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-hidden="true"
			>
				{/* Gear teeth */}
				<path
					d="M50 5 L55 5 L57 15 L60 16 L68 8 L73 13 L65 21 L67 25 L77 23 L79 28 L69 32 L69 36 L80 40 L80 46 L69 48 L68 52 L77 58 L73 64 L64 58 L60 61 L63 72 L57 75 L54 65 L50 66 L50 77 L44 77 L44 66 L40 65 L36 75 L30 72 L34 61 L30 58 L21 64 L17 58 L26 52 L25 48 L14 46 L14 40 L25 36 L25 32 L15 28 L17 23 L27 25 L29 21 L21 13 L26 8 L34 16 L38 15 L40 5 L46 5 L46 16 L50 16 Z"
					fill="currentColor"
					opacity="0.2"
				/>
				{/* Inner ring */}
				<circle cx="50" cy="41" r="18" fill="currentColor" opacity="0.15" />
				{/* Center hole */}
				<circle cx="50" cy="41" r="10" fill="currentColor" opacity="0.3" />
				<circle cx="50" cy="41" r="5" fill="currentColor" opacity="0.45" />
				{/* Keyway */}
				<rect x="48" y="36" width="4" height="10" fill="currentColor" opacity="0.5" />
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
