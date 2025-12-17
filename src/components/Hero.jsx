import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import profilePhoto from '../assets/profile-photo.png'
import emailIcon from '../assets/email.png'
import phoneIcon from '../assets/phone.png'
import locationIcon from '../assets/location.png'
import resumePDF from '../assets/Akash-suresh e.k resume.pdf' // Import the PDF

export default function Hero() {
  const [theme, setTheme] = useState('light')
  const [isLoaded, setIsLoaded] = useState(false)

  const toggleTheme = () => {
    const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark'
    document.body.dataset.theme = newTheme
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    document.body.dataset.theme = savedTheme
    setTheme(savedTheme)
    setIsLoaded(true)
  }, [])

  const techIcons = [
    { label: 'React', emoji: '⚛️' },
    { label: 'Node.js', emoji: '🚀' },
    { label: 'MongoDB', emoji: '🍃' },
    { label: 'Express', emoji: '⚡' },
    { label: 'TypeScript', emoji: '📘' },
    { label: 'AWS', emoji: '☁️' }
  ]

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-section">
          {/* Left Content - Text & Info */}
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Name & Role */}
            <div className="name-role-container">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="greeting"
              >
                👋 Hello, I'm
              </motion.div>
              
              <h1 className="name-title">
                <span className="name-main">Akash Suresh</span>
                <span className="name-last">EK</span>
              </h1>
              
              <motion.div 
                className="role-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="role-badge">
                  <span className="role-icon">👨‍💻</span>
                  <span>Full Stack Developer</span>
                </div>
                <div className="role-underline"></div>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p 
              className="tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I build <span className="highlight">scalable web applications</span> with modern 
              technologies. Specializing in <span className="highlight">MERN stack</span> development 
              for optimal performance and user experience.
            </motion.p>

            {/* Tech Stack - Compact */}
            <motion.div 
              className="tech-stack-compact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="tech-label">Tech Stack</div>
              <div className="tech-icons-row">
                {techIcons.map((tech, index) => (
                  <div key={tech.label} className="tech-icon-item">
                    <span className="tech-emoji">{tech.emoji}</span>
                    <span className="tech-name">{tech.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons - UPDATED */}
            <motion.div 
              className="action-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href={resumePDF} // Use the imported PDF variable
                download="Akash-Suresh-Resume.pdf" // Specify download filename
                className="primary-btn"
                target="_blank" // Opens in new tab for viewing
                rel="noopener noreferrer"
              >
                <span className="btn-icon">📄</span>
                <span>Download CV</span>
              </a>
              <a 
                href="mailto:aakashsureshek@gmail.com" 
                className="secondary-btn"
              >
                <span className="btn-icon">📧</span>
                <span>Contact</span>
              </a>
              <button 
                onClick={toggleTheme} 
                className="theme-btn"
                aria-label="Toggle theme"
              >
                <span className="theme-icon">
                  {theme === 'dark' ? '☀️' : '🌙'}
                </span>
              </button>
            </motion.div>

            {/* Quick Info */}
            <motion.div 
              className="quick-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="info-item">
                <img src={phoneIcon} alt="Phone" />
                <a href="tel:+916238819335">+91 6238819335</a>
              </div>
              <div className="info-item">
                <img src={emailIcon} alt="Email" />
                <a href="mailto:aakashsureshek@gmail.com">aakashsureshek@gmail.com</a>
              </div>
              <div className="info-item">
                <img src={locationIcon} alt="Location" />
                <span>Malappuram, Kerala</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile-wrapper">
              {/* Profile Image */}
              <img 
                src={profilePhoto} 
                alt="Akash Suresh EK" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `
                    <div class="profile-fallback">
                      <span>AK</span>
                    </div>
                  `
                }}
              />
              
              {/* Decorative Elements */}
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
              
              {/* Experience Badge */}
              <div className="experience-badge">
                <span className="exp-number">1+</span>
                <span className="exp-text">Year</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}