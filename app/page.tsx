'use client';

import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Wrench, Zap, Palette, Snowflake, Package, Droplets, AlertCircle, CheckCircle, Shield, Users, Award, Heart, ChevronDown, Star, Quote, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('Tout');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const services = [
    {
      icon: Zap,
      name: 'Quick Service',
      description: 'Vidange, freinage, echappement, batterie, eclairage',
      badge: 'Service Express',
      highlight: true,
    },
    {
      icon: Wrench,
      name: 'Entretien & Reparation',
      description: 'Revision periodique, diagnostic, SICTA, parallelisme',
      badge: null,
    },
    {
      icon: Palette,
      name: 'Tolerie & Peinture',
      description: 'Carrosserie, sellerie, peinture brillante et vernie',
      badge: null,
    },
    {
      icon: Snowflake,
      name: 'Climatisation',
      description: 'Diagnostic et reparation clim',
      badge: null,
    },
    {
      icon: Package,
      name: 'Vente Pieces',
      description: "Accessoires, pieces d'origine, commande express",
      badge: null,
    },
    {
      icon: Droplets,
      name: 'Station Lavage',
      description: 'Nettoyage complet, lustrage, lavage moteur',
      badge: null,
    },
    {
      icon: AlertCircle,
      name: 'Assistance 24/7',
      description: 'Depannage et remorquage jour et nuit',
      badge: null,
    },
  ];

  const benefits = [
    { icon: Heart, title: 'Prix Competitifs', description: 'Moins cher que les concessionnaires', color: 'red' },
    { icon: Zap, title: 'Rapidite', description: 'Quick Service disponible', color: 'blue' },
    { icon: CheckCircle, title: "Pieces d'Origine", description: 'Directement du concessionnaire', color: 'red' },
    { icon: Shield, title: 'Securite 24/7', description: 'Surveillance 24/7', color: 'blue' },
    { icon: Award, title: 'Garantie 1 Mois', description: 'Sur toutes pieces concessionnaire', color: 'red' },
    { icon: CheckCircle, title: 'Controle Qualite', description: '20 points de controle gratuits', color: 'blue' },
  ];

  const pricing = [
    { name: 'Mecanique Generale', price: '22,000 FCFA/h' },
    { name: 'Electricite & Specialisation', price: '25,000 FCFA/h' },
    { name: 'Tolerie', price: '10,000 FCFA/h' },
    { name: 'Climatisation', price: '15,000 FCFA/h' },
    { name: 'Peinture Brillante', price: '10,000 FCFA/h' },
    { name: 'Peinture Vernie', price: '15,000 FCFA/h' },
  ];

  const testimonials = [
    {
      name: 'Kouadio Yao Marcel',
      role: "Chef d'Entreprise",
      text: "J'ai un parc de 5 vehicules pour mon entreprise. PROS-MOTORS a reduit mes couts d'entretien de 40% par rapport au concessionnaire, et le Quick Service me permet de recuperer mes vehicules le jour meme. Service impeccable !",
      rating: 5,
    },
    {
      name: 'Aminata Traore',
      role: 'Cadre Commercial',
      text: "Apres une mauvaise experience avec un garage de quartier, j'ai decouvert PROS-MOTORS. La difference est incroyable : diagnostic clair, tarifs transparents, et ma voiture est comme neuve. Je recommande vivement !",
      rating: 5,
    },
    {
      name: 'Jean-Baptiste Kone',
      role: 'Taxi VTC',
      text: "En tant que chauffeur VTC, mon vehicule est mon outil de travail. PROS-MOTORS comprend mes contraintes de temps. Revisions rapides, prix justes, et le service Conseil Client m'aide a anticiper l'entretien. Top !",
      rating: 5,
    },
  ];

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=800&fit=crop', category: 'Atelier', alt: 'Vue générale de l\'atelier PROS-MOTORS avec ponts élévateurs', caption: 'Notre atelier moderne de 1500m² équipé des dernières technologies' },
    { id: 2, url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=800&fit=crop', category: 'Atelier', alt: 'Zone de travail spacieuse de l\'atelier', caption: 'Espace de travail organisé et propre pour un service de qualité' },
    { id: 3, url: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=800&fit=crop', category: 'Atelier', alt: 'Installations modernes du garage', caption: 'Équipements professionnels pour tous types de réparations' },
    { id: 4, url: 'https://images.unsplash.com/photo-1632823469664-23854e0b61f4?w=800&h=800&fit=crop', category: 'Atelier', alt: 'Zone de réparation automobile', caption: 'Capacité d\'accueil de 50 véhicules simultanément' },
    { id: 5, url: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&h=800&fit=crop', category: 'Atelier', alt: 'Atelier de mécanique bien éclairé', caption: 'Environnement de travail optimal pour nos techniciens' },
    { id: 6, url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=800&fit=crop', category: 'Équipement', alt: 'Scanner de diagnostic professionnel', caption: 'Diagnostic de précision avec équipement de dernière génération' },
    { id: 7, url: 'https://images.unsplash.com/photo-1530048013302-b3ffba37b3ef?w=800&h=800&fit=crop', category: 'Équipement', alt: 'Outils professionnels de réparation', caption: 'Outillage complet pour toutes interventions mécaniques' },
    { id: 8, url: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=800&h=800&fit=crop', category: 'Équipement', alt: 'Équipement de tôlerie et peinture', caption: 'Cabine de peinture avec contrôle climatique professionnel' },
    { id: 9, url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=800&fit=crop', category: 'Équipement', alt: 'Matériel de diagnostic automobile', caption: 'Technologies avancées pour diagnostics précis et rapides' },
    { id: 10, url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=800&fit=crop', category: 'Équipe', alt: 'Mécanicien PROS-MOTORS au travail', caption: 'Équipe qualifiée et formée aux dernières techniques' },
    { id: 11, url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=800&fit=crop', category: 'Équipe', alt: 'Technicien effectuant un diagnostic', caption: 'Professionnalisme et expertise à votre service' },
    { id: 12, url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop', category: 'Équipe', alt: 'Équipe de mécaniciens professionnels', caption: 'Une équipe soudée pour votre satisfaction' },
    { id: 13, url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop', category: 'Équipe', alt: 'Service clientèle PROS-MOTORS', caption: 'Accueil chaleureux et conseil personnalisé' },
    { id: 14, url: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=800&fit=crop', category: 'Services', alt: 'Service de vidange rapide', caption: 'Quick Service - livraison le jour même' },
    { id: 15, url: 'https://images.unsplash.com/photo-1596461200560-d61prey6f0ea?w=800&h=800&fit=crop', category: 'Services', alt: 'Réparation de climatisation automobile', caption: 'Service climatisation avec garantie pièces d\'origine' },
    { id: 16, url: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=800&fit=crop', category: 'Services', alt: 'Station de lavage automobile', caption: 'Nettoyage complet et lustrage professionnel' },
  ];

  const categories = ['Tout', 'Atelier', 'Équipement', 'Équipe', 'Services'];
  const filteredPhotos = galleryFilter === 'Tout' ? photos : photos.filter(p => p.category === galleryFilter);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900 tracking-tight">PROS-MOTORS</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {['home', 'services', 'pricing', 'about', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className="text-gray-600 hover:text-red-600 transition font-medium text-sm capitalize"
              >
                {id === 'home' ? 'Accueil' : id === 'services' ? 'Services' : id === 'pricing' ? 'Tarifs' : id === 'about' ? 'A Propos' : 'Contact'}
              </button>
            ))}
          </nav>

          <a href="tel:+22507590116" className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition text-sm font-semibold shadow-sm">
            <Phone className="w-4 h-4" />
            +225 07 59 01 16 16
          </a>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1 shadow-lg">
            {[
              { id: 'home', label: 'Accueil' },
              { id: 'services', label: 'Services' },
              { id: 'pricing', label: 'Tarifs' },
              { id: 'about', label: 'A Propos' },
              { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
              <button key={id} onClick={() => handleScroll(id)} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-lg font-medium transition">
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1800&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3391854/3391854-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/4611584/4611584-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Garage Premium — Abidjan
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight text-balance">
              PROS-MOTORS<br />
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">C.I</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Votre garage de confiance a Cocody. Qualite concessionnaire, prix competitifs.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Mecanique', 'Electricite', 'Climatisation', 'Tolerie', 'Peinture'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/20 transition">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-sm">Cocody 150 lgts — a 10m du Palm Club</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+22507590116"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-red-900/40 text-base hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                Appeler Maintenant
              </a>
              <button
                onClick={() => handleScroll('services')}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-6 rounded-xl transition-all backdrop-blur-sm text-base hover:scale-[1.02]"
              >
                Nos Services
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16">
            {[
              { value: '1000m2', label: "d'Atelier" },
              { value: '6j/7', label: 'Ouvert' },
              { value: '7h30-18h', label: 'Horaires' },
              { value: '24/7', label: 'Depannage' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/15 p-4 rounded-xl text-center hover:bg-white/15 transition-all hover:scale-[1.02]">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="text-sm font-semibold text-gray-300 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">Ce que nous faisons</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Nos Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tous vos besoins automobiles pris en charge par des techniciens qualifies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                    service.highlight
                      ? 'border-red-500 bg-white shadow-lg shadow-red-50'
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-xl ${service.highlight ? 'bg-red-600' : 'bg-gray-900'}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 bg-red-600 text-white text-xs font-black rounded-lg tracking-wide">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-black text-xl text-black mb-2">{service.name}</h3>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-2">Nos avantages</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Pourquoi Choisir PROS-MOTORS ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isBlue = benefit.color === 'blue';
              return (
                <div key={idx} className={`bg-white/5 border border-white/10 p-6 rounded-2xl transition-all group ${isBlue ? 'hover:bg-blue-900/20 hover:border-blue-500/40' : 'hover:bg-white/10 hover:border-red-500/40'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${isBlue ? 'bg-blue-600/20 group-hover:bg-blue-600' : 'bg-red-600/20 group-hover:bg-red-600'}`}>
                    <Icon className={`w-5 h-5 transition-colors group-hover:text-white ${isBlue ? 'text-blue-400' : 'text-red-400'}`} />
                  </div>
                  <h3 className="font-black text-lg text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">Temoignages</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-gray-500 max-w-xl mx-auto">La satisfaction de nos clients est notre meilleure recompense</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                <Quote className="w-8 h-8 text-red-200 mb-4 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed flex-1 font-medium">{t.text}</p>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-black text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Notre Atelier en Images</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Découvrez nos installations modernes</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex overflow-x-auto gap-3 mb-8 pb-2 -mx-4 px-4 md:justify-center md:flex-wrap md:overflow-visible">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
                  galleryFilter === cat
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => {
                  setCurrentPhotoIndex(filteredPhotos.findIndex(p => p.id === photo.id));
                  setLightboxOpen(true);
                }}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer bg-gray-200"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {photo.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 md:top-6 right-4 md:right-6 bg-red-600 hover:bg-red-700 text-white p-2 md:p-3 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 md:w-7 h-7" />
          </button>

          {/* Image Container */}
          <div className="flex flex-col items-center gap-4 max-w-4xl w-full">
            <img
              src={filteredPhotos[currentPhotoIndex].url}
              alt={filteredPhotos[currentPhotoIndex].alt}
              className="max-h-[70vh] md:max-h-[80vh] w-full object-contain rounded-lg"
            />

            {/* Caption and Counter */}
            <div className="text-center w-full">
              <p className="text-white text-base md:text-lg font-medium mb-2">
                {filteredPhotos[currentPhotoIndex].caption}
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                {currentPhotoIndex + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentPhotoIndex((currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length)}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white p-2 md:p-3 rounded-full transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 h-8" />
          </button>

          <button
            onClick={() => setCurrentPhotoIndex((currentPhotoIndex + 1) % filteredPhotos.length)}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white p-2 md:p-3 rounded-full transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 md:w-8 h-8" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 flex gap-2 items-center justify-center">
            {filteredPhotos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPhotoIndex(idx)}
                className={`transition-all ${
                  idx === currentPhotoIndex
                    ? 'bg-red-600 w-8 h-1.5'
                    : 'bg-gray-500 w-1.5 h-1.5 rounded-full'
                }`}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">Transparence totale</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Nos Tarifs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto">
            {pricing.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg hover:border-red-200 transition-all flex items-center justify-between">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-red-600 font-black text-xl">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 rounded-2xl flex items-center gap-3 shadow-lg">
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold text-sm">Garantie 1 mois incluse sur toutes les pieces du concessionnaire</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">Notre histoire</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">A Propos de Nous</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              PROS-MOTORS C.I est votre garage de confiance pour tous vos besoins automobiles. Nous combinons expertise professionnelle, tarifs competitifs et service client exceptionnel pour vous offrir la meilleure alternative aux concessionnaires couteux et aux garages informels.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Localisation', value: 'Cocody 150 lgts' },
                { label: 'Horaires', value: 'Lun-Sam 7h30-18h' },
                { label: 'Capacite', value: '50 vehicules' },
                { label: 'Atelier', value: '1000m2' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{label}</p>
                  <p className="text-gray-900 font-black mt-1">{value}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setExpandedAbout(!expandedAbout)}
              className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-xl text-left transition flex items-center justify-between"
            >
              <span className="font-bold text-gray-900">En savoir plus sur notre engagement qualite</span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedAbout ? 'rotate-180' : ''}`} />
            </button>

            {expandedAbout && (
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl space-y-3">
                <p className="text-gray-600 font-medium">Notre mission est de fournir un service automobile de qualite superieure a des tarifs justes. Nous investissons dans:</p>
                <ul className="space-y-3">
                  {[
                    "L'equipe: Mecaniciens qualifies et formes regulierement",
                    "L'equipement: Diagnostic et outillage de pointe",
                    "La qualite: Controle 20 points gratuit avant et apres chaque intervention",
                    "La securite: Surveillance 24/7",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 md:py-28 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-2">Notre promesse</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Nos Engagements Qualite</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Service Conseil Client', desc: "Rappels d'entretien personnalises et conseils pour la longevite de votre vehicule", blue: false },
              { icon: Award, title: 'Controle Qualite', desc: '20 points de controle gratuits avant et apres chaque intervention', blue: true },
              { icon: Shield, title: 'Pieces Certifiees', desc: "Uniquement pieces d'origine concessionnaire avec garantie 1 mois", blue: false },
            ].map(({ icon: Icon, title, desc, blue }) => (
              <div key={title} className={`bg-white/5 border border-white/10 p-7 rounded-2xl transition-all ${blue ? 'hover:border-blue-500/50' : 'hover:border-red-500/50'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${blue ? 'bg-blue-600' : 'bg-red-600'}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-xl text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">Parlons-nous</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Contactez-Nous</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <a href="tel:+22507590116" className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-black py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Appeler: +225 07 59 01 16 16
              </a>
              <a href="mailto:info@pros-motors-civ.com" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 rounded-xl transition flex items-center justify-center gap-2">
                Email: info@pros-motors-civ.com
              </a>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <h3 className="font-black text-gray-900">Localisation</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex gap-2 items-start text-sm">
                    <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Cocody 150 lgts, Abidjan</span>
                  </p>
                  <p className="text-sm text-gray-500 pl-6">A 10m du Palm Club</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-black text-gray-900 text-sm mb-1">Horaires</h3>
                  <p className="text-gray-600 text-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Lun-Sam 7h30-18h
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-black text-gray-900 text-sm mb-1">Email</h3>
                  <a href="mailto:info@pros-motors-civ.com" className="text-blue-600 hover:text-blue-700 text-xs underline break-all">
                    info@pros-motors-civ.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-black text-xl text-gray-900 mb-6">Formulaire de Contact</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Nom complet</label>
                  <Input placeholder="Votre nom" className="w-full rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Telephone</label>
                  <Input placeholder="+225 XX XX XX XX XX" type="tel" className="w-full rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
                  <Textarea placeholder="Decrivez votre besoin..." rows={4} className="w-full rounded-xl" />
                </div>
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-black py-3 rounded-xl shadow-md">
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <span className="font-black text-white">PROS-MOTORS C.I</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Votre Garage de Confiance a Abidjan. Qualite, rapidite, prix competitifs.</p>
            </div>
            <div>
              <h3 className="font-black mb-4 text-white">Liens Rapides</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  { id: 'services', label: 'Services' },
                  { id: 'pricing', label: 'Tarifs' },
                  { id: 'about', label: 'A Propos' },
                  { id: 'contact', label: 'Contact' },
                ].map(({ id, label }) => (
                  <li key={id}><button onClick={() => handleScroll(id)} className="hover:text-red-400 transition">{label}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-black mb-4 text-white">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-400" />
                  <a href="tel:+22507590116" className="hover:text-white transition">+225 07 59 01 16 16</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Cocody 150 lgts, Abidjan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-400" />
                  Lun-Sam 7h30-18h
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} PROS-MOTORS C.I SARL. Tous droits reserves.</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a
        href="tel:+22507590116"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-red-200 hover:shadow-red-300 transition-all hover:scale-110 z-50"
        aria-label="Appeler PROS-MOTORS"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
