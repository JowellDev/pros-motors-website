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
			<section className="py-16 md:py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
							Notre Atelier en Images
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Découvrez nos installations modernes
						</p>
					</div>

					<div className="flex overflow-x-auto gap-3 mb-8 pb-2 -mx-4 px-4 md:justify-center md:flex-wrap md:overflow-visible">
						{galleryCategories.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveFilter(cat)}
								className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
									activeFilter === cat
										? 'bg-red-600 text-white shadow-lg'
										: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
								}`}
							>
								{cat}
							</button>
						))}
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{filteredPhotos.map((photo, idx) => (
							<div
								key={photo.id}
								onClick={() => openLightbox(idx)}
								className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer bg-gray-200"
							>
								<img
									src={photo.url}
									alt={photo.alt}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
									<Eye className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								<div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
									{photo.category}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{lightboxOpen && (
				<div
					className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
					onClick={(e) =>
						e.target === e.currentTarget && setLightboxOpen(false)
					}
				>
					<button
						onClick={() => setLightboxOpen(false)}
						className="absolute top-4 md:top-6 right-4 md:right-6 bg-red-600 hover:bg-red-700 text-white p-2 md:p-3 rounded-full transition-colors"
						aria-label="Fermer"
					>
						<X className="w-6 h-6 md:w-7 h-7" />
					</button>

					<div className="flex flex-col items-center gap-4 max-w-4xl w-full">
						<img
							src={filteredPhotos[currentIndex].url}
							alt={filteredPhotos[currentIndex].alt}
							className="max-h-[70vh] md:max-h-[80vh] w-full object-contain rounded-lg"
						/>
						<div className="text-center w-full">
							<p className="text-white text-base md:text-lg font-medium mb-2">
								{filteredPhotos[currentIndex].caption}
							</p>
							<p className="text-gray-400 text-sm md:text-base">
								{currentIndex + 1} / {filteredPhotos.length}
							</p>
						</div>
					</div>

					<button
						onClick={goToPrev}
						className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white p-2 md:p-3 rounded-full transition-colors"
						aria-label="Photo precedente"
					>
						<ChevronLeft className="w-6 h-6 md:w-8 h-8" />
					</button>
					<button
						onClick={goToNext}
						className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white p-2 md:p-3 rounded-full transition-colors"
						aria-label="Photo suivante"
					>
						<ChevronRight className="w-6 h-6 md:w-8 h-8" />
					</button>

					<div className="absolute bottom-6 flex gap-2 items-center justify-center">
						{filteredPhotos.map((_, idx) => (
							<button
								key={idx}
								onClick={() => setCurrentIndex(idx)}
								className={`transition-all ${
									idx === currentIndex
										? 'bg-red-600 w-8 h-1.5'
										: 'bg-gray-500 w-1.5 h-1.5 rounded-full'
								}`}
								aria-label={`Aller a la photo ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			)}
		</>
	)
}
