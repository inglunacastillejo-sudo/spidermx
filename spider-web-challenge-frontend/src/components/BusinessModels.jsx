import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

const BusinessModels = () => {
  const { language } = useLanguage()
  const businessModelsContent = content[language].businessModels

  return (
    <div className="pt-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-spider-web-primary mb-6">
          {businessModelsContent.title}
        </h1>
        <p className="text-xl text-gray-700 text-center mb-4 leading-relaxed">
          {businessModelsContent.subtitle}
        </p>
        <p className="text-lg text-gray-600 text-center mb-12 leading-relaxed">
          {businessModelsContent.content}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessModelsContent.models.map((model, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg card-hover"
            >
              <h3 className="text-2xl font-semibold text-spider-web-accent mb-3">
                {model.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {model.description}
              </p>
              <p className="text-gray-600 italic">
                <strong>{language === 'es' ? 'Beneficio' : 'Benefit'}:</strong> {model.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BusinessModels

