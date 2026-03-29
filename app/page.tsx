'use client';

import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Wrench, Zap, Palette, Snowflake, Package, Droplets, AlertCircle, CheckCircle, Shield, Users, Award, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedAbout, setExpandedAbout] = useState(false);

  const services = [
    {
      icon: Zap,
      name: 'Quick Service',
      description: 'Vidange, freinage, échappement, batterie, éclairage',
      badge: 'Service Express',
      highlight: true,
    },
    {
      icon: Wrench,
      name: 'Entretien & Réparation',
      description: 'Révision périodique, diagnostic, SICTA, parallélisme',
      badge: null,
    },
    {
      icon: Palette,
      name: 'Tôlerie & Peinture',
      description: 'Carrosserie, sellerie, peinture brillante et vernie',
      badge: null,
    },
    {
      icon: Snowflake,
      name: 'Climatisation',
      description: 'Diagnostic et réparation clim',
      badge: null,
    },
    {
      icon: Package,
      name: 'Vente Pièces',
      description: 'Accessoires, pièces d\'origine, commande express',
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
      description: 'Dépannage et remorquage jour et nuit',
      badge: null,
    },
  ];

  const benefits = [
    { icon: Heart, title: 'Prix Compétitifs', description: 'Moins cher que les concessionnaires' },
    { icon: Zap, title: 'Rapidité', description: 'Quick Service disponible' },
    { icon: CheckCircle, title: 'Pièces d\'Origine', description: 'Directement du concessionnaire' },
    { icon: Shield, title: 'Sécurité 24/7', description: 'Surveillance FAC Sécurité' },
    { icon: Award, title: 'Garantie 2 Mois', description: 'Sur toutes pièces concessionnaire' },
    { icon: CheckCircle, title: 'Contrôle Qualité', description: '20 points de contrôle gratuits' },
  ];

  const pricing = [
    { name: 'Mécanique Générale', price: '10,000 FCFA/h' },
    { name: 'Électricité & Spécialisation', price: '15,000 FCFA/h' },
    { name: 'Tôlerie', price: '10,000 FCFA/h' },
    { name: 'Climatisation', price: '8,000 FCFA/h' },
    { name: 'Peinture Brillante', price: '8,000 FCFA/h' },
    { name: 'Peinture Vernie', price: '9,000 FCFA/h' },
  ];

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-red-600" />
            <span className="font-bold text-lg text-gray-900">PROS-MOTORS</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => handleScroll('home')} className="text-gray-700 hover:text-red-600 transition">Accueil</button>
            <button onClick={() => handleScroll('services')} className="text-gray-700 hover:text-red-600 transition">Services</button>
            <button onClick={() => handleScroll('pricing')} className="text-gray-700 hover:text-red-600 transition">Tarifs</button>
            <button onClick={() => handleScroll('about')} className="text-gray-700 hover:text-red-600 transition">À Propos</button>
            <button onClick={() => handleScroll('contact')} className="text-gray-700 hover:text-red-600 transition">Contact</button>
          </nav>

          {/* Call Button */}
          <a href="tel:22441888" className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold">
            <Phone className="w-4 h-4" />
           +225 07 59 01 16 16
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-3">
            <button onClick={() => handleScroll('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">Accueil</button>
            <button onClick={() => handleScroll('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">Services</button>
            <button onClick={() => handleScroll('pricing')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">Tarifs</button>
            <button onClick={() => handleScroll('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">À Propos</button>
            <button onClick={() => handleScroll('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">Contact</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">PROS-MOTORS CI</h1>
            <p className="text-lg md:text-xl text-gray-300">Votre Garage de Confiance à Abidjan</p>
            
            {/* Service Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-medium">Mécanique</span>
              <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-medium">Électricité</span>
              <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-medium">Climatisation</span>
              <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-medium">Tôlerie</span>
              <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-medium">Peinture</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-300 pt-2">
              <MapPin className="w-5 h-5" />
              <span>Cocody, Batafoe</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="tel:22441888"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Appeler Maintenant
            </a>
            <button
              onClick={() => handleScroll('services')}
              className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-4 rounded-lg transition border-2 border-white"
            >
              Nos Services
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 pt-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">1500m²</p>
              <p className="text-sm text-gray-300">d&apos;Atelier</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">6j/7</p>
              <p className="text-sm text-gray-300">Ouvert</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">7h30-18h</p>
              <p className="text-sm text-gray-300">Horaires</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-gray-300">Dépannage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-gray-600">Tous vos besoins automobiles en un seul endroit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-lg border-2 transition hover:shadow-lg ${
                    service.highlight
                      ? 'border-red-600 bg-white'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${service.highlight ? 'bg-red-100' : 'bg-blue-100'}`}>
                      <Icon className={`w-7 h-7 ${service.highlight ? 'text-red-600' : 'text-blue-600'}`} />
                    </div>
                    {service.badge && (
                      <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-xl text-black mb-2">{service.name}</h3>
                  <p className="text-gray-700 font-medium text-sm mb-4 leading-relaxed">{service.description}</p>
                  <button className="text-red-600 font-bold text-sm hover:text-red-700 flex items-center gap-1">
                    En savoir plus →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir PROS-MOTORS ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                  <Icon className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Tarifs Transparents</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {pricing.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                <p className="text-red-600 font-bold text-xl mt-2">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-blue-900 font-semibold flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              💡 Garantie 2 mois incluse sur toutes les pièces du concessionnaire
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">À Propos de Nous</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              PROS-MOTORS C.I est votre garage de confiance pour tous vos besoins automobiles. Nous combinons l&apos;expertise professionnelle, les tarifs compétitifs et le service client exceptionnel pour vous offrir la meilleure alternative aux concessionnaires coûteux et aux garages informels.
            </p>

            {/* Info Badges */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm font-semibold">📍 Localisation</p>
                <p className="text-gray-900 font-bold mt-1">Cocody, Batafoe</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm font-semibold">🕐 Horaires</p>
                <p className="text-gray-900 font-bold mt-1">Lun-Sam 7h30-18h</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm font-semibold">🚗 Capacité</p>
                <p className="text-gray-900 font-bold mt-1">50 véhicules</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm font-semibold">📏 Atelier</p>
                <p className="text-gray-900 font-bold mt-1">1500m²</p>
              </div>
            </div>

            {/* Expandable Section */}
            <button
              onClick={() => setExpandedAbout(!expandedAbout)}
              className="w-full bg-white p-4 rounded-lg border border-gray-200 text-left hover:bg-gray-50 transition flex items-center justify-between"
            >
              <span className="font-semibold text-gray-900">En savoir plus sur notre engagement qualité</span>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition ${expandedAbout ? 'rotate-180' : ''}`} />
            </button>

            {expandedAbout && (
              <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
                <p className="text-gray-700">
                  Notre mission est de fournir un service automobile de qualité supérieure à des tarifs justes. Nous investissons dans:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>L&apos;équipe: Mécaniciens qualifiés et formés régulièrement</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>L&apos;équipement: Diagnostic et outillage de pointe</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>La qualité: Contrôle 20 points gratuit avant et après chaque intervention</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>La sécurité: Surveillance 24/7 par FAC Sécurité</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Engagements Qualité</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
              <Users className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Service Conseil Client</h3>
              <p className="text-gray-700 text-sm">Rappels d&apos;entretien personnalisés et conseils pour la longévité de votre véhicule</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
              <Award className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Contrôle Qualité</h3>
              <p className="text-gray-700 text-sm">20 points de contrôle gratuits avant et après chaque intervention</p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
              <Shield className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Pièces Certifiées</h3>
              <p className="text-gray-700 text-sm">Uniquement pièces d&apos;origine concessionnaire avec garantie 2 mois</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactez-Nous</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Buttons & Info */}
            <div className="space-y-4">
              <a
                href="tel:22441888"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler: +225 07 59 01 16 16
              </a>
              <button className="w-full bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-900 font-bold py-4 px-4 rounded-lg transition">
                📧 Email
              </button>

              {/* Location Info */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-3">
                <h3 className="font-bold text-lg text-gray-900">Localisation</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex gap-2 items-start">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Cocody, Batafoe, Abidjan</span>
                  </p>
                  <p className="text-sm">500m du groupe scolaire SAFAK</p>
                  <p className="text-sm">Entre lycée technique et hôtel Palm Club</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Horaires</h3>
                <p className="text-gray-700 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Lundi-Samedi, 7h30-18h00
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Contacts Directs</h3>
                <div className="space-y-2 text-gray-700">
                  <p> +225 07 59 01 16 16</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Formulaire de Contact</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <Input placeholder="Votre nom" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <Input placeholder="+225 XX XX XX XX XX" type="tel" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea placeholder="Votre message" rows={4} className="w-full" />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <a
        href="tel:22441888"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition animate-pulse"
        aria-label="Call PROS-MOTORS"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-red-600" />
                <span className="font-bold">PROS-MOTORS C.I</span>
              </div>
              <p className="text-gray-400 text-sm">Votre Garage de Confiance à Abidjan</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => handleScroll('services')} className="hover:text-white transition">Services</button></li>
                <li><button onClick={() => handleScroll('pricing')} className="hover:text-white transition">Tarifs</button></li>
                <li><button onClick={() => handleScroll('about')} className="hover:text-white transition">À Propos</button></li>
                <li><button onClick={() => handleScroll('contact')} className="hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:22441888" className="hover:text-white transition">+225 07 59 01 16 16</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Cocody, Batafoe
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Lun-Sam 7h30-18h
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© ${Date().getFullYear()} PROS-MOTORS C.I SARL. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
