'use client'

import { useRef, useState, useCallback } from 'react'
import { MoveHorizontal } from 'lucide-react'

type Props = Readonly<{
	url: string
	altBefore: string
	altAfter: string
}>

export function BeforeAfterSlider({ url, altBefore, altAfter }: Props) {
	const [pos, setPos] = useState(50)
	const containerRef = useRef<HTMLDivElement>(null)
	const dragging = useRef(false)

	const setFromClientX = useCallback((clientX: number) => {
		const el = containerRef.current
		if (!el) return
		const rect = el.getBoundingClientRect()
		const pct = ((clientX - rect.left) / rect.width) * 100
		setPos(Math.max(0, Math.min(100, pct)))
	}, [])

	const onPointerDown = (e: React.PointerEvent) => {
		dragging.current = true
		;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
		setFromClientX(e.clientX)
	}
	const onPointerMove = (e: React.PointerEvent) => {
		if (dragging.current) setFromClientX(e.clientX)
	}
	const onPointerUp = () => {
		dragging.current = false
	}

	return (
		<div
			ref={containerRef}
			className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-border select-none cursor-ew-resize touch-none"
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={onPointerUp}
			onPointerLeave={onPointerUp}
		>
			{/* Après (couleur, dessous) */}
			<img
				src={url}
				alt={altAfter}
				className="absolute inset-0 w-full h-full object-cover"
				draggable={false}
			/>
			<span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold shadow">
				Après
			</span>

			{/* Avant (désaturé/assombri, au-dessus, révélé par clip) */}
			<div
				className="absolute inset-0"
				style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
			>
				<img
					src={url}
					alt={altBefore}
					className="absolute inset-0 w-full h-full object-cover"
					style={{ filter: 'grayscale(1) brightness(0.62) contrast(1.05)' }}
					draggable={false}
				/>
				<span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-graphite/80 text-white text-xs font-semibold shadow">
					Avant
				</span>
			</div>

			{/* Poignée */}
			<div
				className="absolute top-0 bottom-0 z-10 flex items-center justify-center pointer-events-none"
				style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
			>
				<div className="w-0.5 h-full bg-white/90 shadow" />
				<div className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
					<MoveHorizontal className="w-5 h-5 text-primary" />
				</div>
			</div>

			{/* Accessibilité : contrôle clavier */}
			<label className="sr-only" htmlFor="ba-range">
				Curseur avant/après
			</label>
			<input
				id="ba-range"
				type="range"
				min={0}
				max={100}
				value={pos}
				onChange={(e) => setPos(Number(e.target.value))}
				className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 z-20 accent-primary opacity-0 focus-visible:opacity-100"
			/>
		</div>
	)
}
