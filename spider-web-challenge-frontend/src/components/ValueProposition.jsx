import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

const ValueProposition = () => {
  const { language } = useLanguage()
  const valueContent = content[language].valueProposition

  return (
    <div className="pt-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-spider-web-primary mb-6">
          {valueContent.title}
        </h1>
        <p className="text-xl text-gray-700 text-center mb-4 leading-relaxed">
          {valueContent.subtitle}
        </p>
        <p className="text-lg text-gray-600 text-center mb-12 leading-relaxed">
          {valueContent.content}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueContent.values.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center card-hover flex flex-col items-center"
            >
              <div className="text-spider-web-accent text-5xl mb-4">
                {/* Placeholder for icons - replace with actual icons later */}
                {index === 0 && <i className="fas fa-lightbulb"></i>}
                {index === 1 && <i className="fas fa-award"></i>}
                {index === 2 && <i className="fas fa-shield-alt"></i>}
                {index === 3 && <i className="fas fa-palette"></i>}
                {index === 4 && <i className="fas fa-globe"></i>}
              </div>
              <h3 className="text-2xl font-semibold text-spider-web-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValueProposition

