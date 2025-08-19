import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

// Import images
import spiderWebInflatable from '../assets/spiderwebweb.png'
import spiderwebMiniInflatable from '../assets/spiderwebminidona.png'
import spaceRocketInflatable from '../assets/renderweb.jpeg'
import eurobongieInflatable from '../assets/PjcgVPvBit3jrX8z2lHpHP.png'

const images = [
  spiderWebInflatable,
  spiderwebMiniInflatable,
  spaceRocketInflatable,
  eurobongieInflatable,
]

const Portfolio = () => {
  const { language } = useLanguage()
  const portfolioContent = content[language].portfolio

  return (
    <div className="pt-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-spider-web-primary mb-6">
          {portfolioContent.title}
        </h1>
        <p className="text-xl text-gray-700 text-center mb-4 leading-relaxed">
          {portfolioContent.subtitle}
        </p>
        <p className="text-lg text-gray-600 text-center mb-12 leading-relaxed">
          {portfolioContent.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioContent.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
            >
              <img
                src={images[index]}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-spider-web-accent mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

