import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import logo from '../assets/arañaweb-removebg-preview.png'

const Header = () => {
  const { language, toggleLanguage, isSpanish } = useLanguage()
  const navContent = content[language].nav

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full z-50 top-0">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Spider Web Challenge Logo" className="h-16 w-auto" />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-spider-web-accent transition-colors duration-300">
          {navContent.home}
        </Link>
        <Link to="/about" className="text-lg font-semibold text-gray-700 hover:text-spider-web-accent transition-colors duration-300">
          {navContent.about}
        </Link>
        <Link to="/portfolio" className="text-lg font-semibold text-gray-700 hover:text-spider-web-accent transition-colors duration-300">
          {navContent.portfolio}
        </Link>
        <Link to="/value-proposition" className="text-lg font-semibold text-gray-700 hover:text-spider-web-accent transition-colors duration-300">
          {navContent.valueProposition}
        </Link>
        <Link to="/business-models" className="text-lg font-semibold text-gray-700 hover:text-spider-web-accent transition-colors duration-300">
          {navContent.businessModels}
        </Link>
        <Link to="/contact" className="text-lg font-semibold text-gray-700 hover:text-spider-web-accent transition-colors duration-300">
          {navContent.contact}
        </Link>
      </nav>
      <button
        onClick={toggleLanguage}
        className="ml-4 px-4 py-2 rounded-full bg-spider-web-primary text-white text-sm font-semibold hover:bg-spider-web-accent transition-colors duration-300"
      >
        {isSpanish ? 'English' : 'Español'}
      </button>
      {/* Mobile menu button - hidden for now */}
    </header>
  )
}

export default Header

