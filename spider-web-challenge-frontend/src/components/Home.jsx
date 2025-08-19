import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import heroImage from '../assets/hero_image.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const { language } = useLanguage()
  const homeContent = content[language].home

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-white hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow">
            {homeContent.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">
            {homeContent.subtitle}
          </p>
          <Link
            to="/portfolio"
            className="btn-spider-web text-lg inline-block"
          >
            {homeContent.cta}
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-spider-web-primary mb-12">
            {language === 'es' ? 'Nuestros Pilares' : 'Our Pillars'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeContent.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center card-hover"
              >
                <h3 className="text-xl font-semibold text-spider-web-accent mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-spider-web-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'es' ? '¡Eleva tu Marca con Nosotros!' : 'Elevate Your Brand with Us!'}
          </h2>
          <p className="text-xl mb-8">
            {language === 'es' ? 'Descubre cómo podemos transformar tu visión en una experiencia inolvidable.' : 'Discover how we can transform your vision into an unforgettable experience.'}
          </p>
          <Link
            to="/contact"
            className="btn-spider-web text-lg inline-block bg-spider-web-accent hover:bg-red-700"
          >
            {language === 'es' ? 'Contáctanos Hoy' : 'Contact Us Today'}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

