import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

const Contact = () => {
  const { language } = useLanguage()
  const contactContent = content[language].contact

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    }
  }

  return (
    <div className="pt-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-spider-web-primary mb-6">
          {contactContent.title}
        </h1>
        <p className="text-xl text-gray-700 text-center mb-4 leading-relaxed">
          {contactContent.subtitle}
        </p>
        <p className="text-lg text-gray-600 text-center mb-12 leading-relaxed">
          {contactContent.content}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-spider-web-primary mb-6">
              {language === 'es' ? 'Envíanos un Mensaje' : 'Send Us a Message'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                  {contactContent.form.name}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  {contactContent.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                  {contactContent.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  {contactContent.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  {contactContent.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-spider-web w-full py-3"
              >
                {contactContent.form.submit}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center mt-4">
                  {language === 'es' ? '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' : 'Message sent successfully! We will get back to you soon.'}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center mt-4">
                  {language === 'es' ? 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.' : 'There was an error sending your message. Please try again later.'}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-spider-web-primary mb-6">
              {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <i className="fas fa-envelope text-spider-web-accent mr-3"></i>
                <strong>Email:</strong> {contactContent.info.email}
              </p>
              <p>
                <i className="fas fa-phone-alt text-spider-web-accent mr-3"></i>
                <strong>{language === 'es' ? 'Teléfono' : 'Phone'}:</strong> {contactContent.info.phone}
              </p>
              <p>
                <i className="fas fa-map-marker-alt text-spider-web-accent mr-3"></i>
                <strong>{language === 'es' ? 'Dirección' : 'Address'}:</strong> {contactContent.info.address}
              </p>
              <p>
                <i className="fas fa-clock text-spider-web-accent mr-3"></i>
                <strong>{language === 'es' ? 'Horario' : 'Hours'}:</strong> {contactContent.info.hours}
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-spider-web-primary mb-4">
                {language === 'es' ? 'Síguenos' : 'Follow Us'}
              </h3>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/company/spider-web-challenge" target="_blank" rel="noopener noreferrer" className="text-spider-web-primary hover:text-spider-web-accent transition-colors duration-300">
                  <i className="fab fa-linkedin text-4xl"></i>
                </a>
                <a href="https://www.instagram.com/spiderwebchallenge" target="_blank" rel="noopener noreferrer" className="text-spider-web-primary hover:text-spider-web-accent transition-colors duration-300">
                  <i className="fab fa-instagram text-4xl"></i>
                </a>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

