import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

const About = () => {
  const { language } = useLanguage()
  const aboutContent = content[language].about

  return (
    <div className="pt-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-spider-web-primary mb-6">
          {aboutContent.title}
        </h1>
        <p className="text-xl text-gray-700 text-center mb-12 leading-relaxed">
          {aboutContent.content}
        </p>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-spider-web-primary mb-10">
            {language === 'es' ? 'Esencia de Marca' : 'Brand Essence'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.essence.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center card-hover"
              >
                <h3 className="text-xl font-semibold text-spider-web-accent mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-spider-web-primary mb-10">
            {language === 'es' ? 'Presencia Internacional' : 'International Presence'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {aboutContent.countries.map((country, index) => (
              <span
                key={index}
                className="bg-spider-web-primary text-white px-5 py-2 rounded-full text-lg font-medium"
              >
                {country}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-spider-web-accent text-white p-10 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-bold mb-4">
            {language === 'es' ? 'Nuestra Promesa' : 'Our Promise'}
          </h2>
          <p className="text-xl leading-relaxed">
            {aboutContent.promise}
          </p>
        </section>
      </div>
    </div>
  )
}

export default About

