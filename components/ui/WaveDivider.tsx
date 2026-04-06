type WaveDividerProps = {
	topColor?: string
	bottomColor?: string
	flip?: boolean
}

export function WaveDivider({
	topColor = '#ffffff',
	bottomColor = '#2563eb',
	flip = false,
}: Readonly<WaveDividerProps>) {
	return (
		<div
			className="w-full overflow-hidden leading-0 pointer-events-none"
			style={{ backgroundColor: topColor }}
			aria-hidden="true"
		>
			<svg
				viewBox="0 0 1440 48"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				className={`w-full h-10 md:h-12 block ${flip ? 'rotate-180' : ''}`}
			>
				<path
					d="M0 24 C240 0 480 48 720 24 C960 0 1200 48 1440 24 L1440 48 L0 48 Z"
					fill={bottomColor}
				/>
				<path
					d="M0 32 C240 12 480 52 720 32 C960 12 1200 52 1440 32 L1440 48 L0 48 Z"
					fill={bottomColor}
					opacity="0.4"
				/>
			</svg>
		</div>
	)
}
