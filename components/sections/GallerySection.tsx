'use client'

import { useState } from 'react'
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { photos, galleryCategories } from '@/lib/data/gallery'

export function GallerySection() {
	const [activeFilter, setActiveFilter] = useState('Tout')
	const [lightboxOpen, setLightboxOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const filteredPhotos =
		activeFilter === 'Tout'
			? photos
			: photos.filter((p) => p.category === activeFilter)

	const openLightbox = (idx: number) => {
		setCurrentIndex(idx)
		setLightboxOpen(true)
	}

	const goToPrev = () =>
		setCurrentIndex(
			(prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length,
		)
	const goToNext = () =>
		setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length)

	return (
		<>
			<section className="py-20 md:py-28 bg-card">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-3">
							La preuve en images
						</p>
						<h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
							Notre atelier & nos réalisations
						</h2>
						<p className="text-muted-foreground max-w-xl mx-auto text-base">
							Découvrez nos installations modernes et la qualité de nos
							finitions.
						</p>
					</div>

					{/* Filtres */}
					<div className="flex overflow-x-auto gap-3 mb-8 pb-2 -mx-4 px-4 md:justify-center md:flex-wrap md:overflow-visible no-scrollbar">
						{galleryCategories.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveFilter(cat)}
								className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
									activeFilter === cat
										? 'bg-primary text-primary-foreground shadow'
										: 'bg-background text-foreground border border-border hover:border-primary/40'
								}`}
							>
								{cat}
							</button>
						))}
					</div>

					{/* Grille */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{filteredPhotos.map((photo, idx) => (
							<button
								key={photo.id}
								onClick={() => openLightbox(idx)}
								className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer bg-muted text-left"
								aria-label={`Agrandir : ${photo.alt}`}
							>
								<img
									src={photo.url}
									alt={photo.alt}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/55 transition-colors duration-300 flex items-center justify-center">
									<Eye className="w-9 h-9 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								<span className="absolute top-3 left-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-semibold">
									{photo.category}
								</span>
							</button>
						))}
					</div>
				</div>
			</section>

			{lightboxOpen && (
				<div
					className="fixed inset-0 z-50 bg-graphite/95 flex flex-col items-center justify-center p-4"
					onClick={(e) => e.target === e.currentTarget && setLightboxOpen(false)}
				>
					<button
						onClick={() => setLightboxOpen(false)}
						className="absolute top-4 md:top-6 right-4 md:right-6 bg-primary hover:bg-primary/90 text-primary-foreground p-2.5 md:p-3 rounded-full transition-colors"
						aria-label="Fermer"
					>
						<X className="w-6 h-6" />
					</button>

					<div className="flex flex-col items-center gap-4 max-w-4xl w-full">
						<img
							src={filteredPhotos[currentIndex].url}
							alt={filteredPhotos[currentIndex].alt}
							className="max-h-[70vh] md:max-h-[80vh] w-full object-contain rounded-lg"
						/>
						<div className="text-center w-full">
							<p className="text-white text-base md:text-lg font-medium mb-1">
								{filteredPhotos[currentIndex].caption}
							</p>
							<p className="text-white/50 text-sm">
								{currentIndex + 1} / {filteredPhotos.length}
							</p>
						</div>
					</div>

					<button
						onClick={goToPrev}
						className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2.5 md:p-3 rounded-full transition-colors"
						aria-label="Photo précédente"
					>
						<ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
					</button>
					<button
						onClick={goToNext}
						className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2.5 md:p-3 rounded-full transition-colors"
						aria-label="Photo suivante"
					>
						<ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
					</button>

					<div className="absolute bottom-6 flex gap-2 items-center justify-center">
						{filteredPhotos.map((_, idx) => (
							<button
								key={idx}
								onClick={() => setCurrentIndex(idx)}
								className={`transition-all rounded-full ${
									idx === currentIndex
										? 'bg-primary w-8 h-1.5'
										: 'bg-white/40 w-1.5 h-1.5'
								}`}
								aria-label={`Aller à la photo ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			)}
		</>
	)
}
