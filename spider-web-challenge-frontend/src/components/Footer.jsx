import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import logo from '../assets/arañaweb-removebg-preview.png'

const Footer = () => {
  const { language } = useLanguage()
  const footerContent = content[language].footer
  const navContent = content[language].nav

  return (
    <footer className="bg-spider-web-primary text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Spider Web Challenge Logo" className="h-20 w-auto mb-4" />
          <p className="text-center md:text-left text-sm leading-relaxed">
            {footerContent.description}
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-spider-web-accent transition-colors duration-300">{navContent.home}</Link></li>
            <li><Link to="/about" className="hover:text-spider-web-accent transition-colors duration-300">{navContent.about}</Link></li>
            <li><Link to="/portfolio" className="hover:text-spider-web-accent transition-colors duration-300">{navContent.portfolio}</Link></li>
            <li><Link to="/value-proposition" className="hover:text-spider-web-accent transition-colors duration-300">{navContent.valueProposition}</Link></li>
            <li><Link to="/business-models" className="hover:text-spider-web-accent transition-colors duration-300">{navContent.businessModels}</Link></li>
            <li><Link to="/contact" className="hover:text-spider-web-accent transition-colors duration-300">{navContent.contact}</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">{footerContent.followUs}</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/company/spider-web-challenge" target="_blank" rel="noopener noreferrer" className="text-white hover:text-spider-web-accent transition-colors duration-300">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a href="https://www.instagram.com/spiderwebchallenge" target="_blank" rel="noopener noreferrer" className="text-white hover:text-spider-web-accent transition-colors duration-300">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            {/* Add more social media icons as needed */}
          </div>
          <p className="text-sm mt-8">
            {content[language].contact.info.email}
          </p>
          <p className="text-sm">
            {content[language].contact.info.phone}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        {footerContent.copyright}
      </div>
    </footer>
  )
}

export default Footer

