import { motion } from 'framer-motion'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import phone from '../assets/phone.png'
import location from '../assets/location.png'
import resume from '../assets/resume.png'

export default function Contact() {
  const contactInfo = [
    {
      icon: email,
      title: "Email",
      value: "aakashsureshek@gmail.com",
      link: "mailto:aakashsureshek@gmail.com",
      description: "Fastest response time",
      color: "#3b82f6",
      action: "Send Email"
    },
    {
      icon: linkedin,
      title: "LinkedIn",
      value: "@akash-suresh2003",
      link: "https://linkedin.com/in/akash-suresh2003",
      description: "Professional network",
      color: "#0A66C2",
      action: "Connect"
    },
    {
      icon: phone,
      title: "Phone",
      value: "+91 6238819335",
      link: "tel:+916238819335",
      description: "Available for calls",
      color: "#10b981",
      action: "Call"
    },
    {
      icon: github,
      title: "GitHub",
      value: "@akash-suresh",
      link: "https://github.com/Akashsuresh555",
      description: "View my projects",
      color: "#333",
      action: "View Profile"
    },
    {
      icon: location,
      title: "Location",
      value: "Malappuram, Kerala",
      link: "#",
      description: "Open to remote/hybrid",
      color: "#8b5cf6",
      action: "Remote Available"
    },
    {
      icon: resume,
      title: "Resume",
      value: "Download CV",
      link: "/Akash-suresh e.k resume.pdf",
      description: "Updated portfolio",
      color: "#f59e0b",
      action: "Download"
    }
  ]

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Let's connect and build something amazing together. I'm always open to discussing new opportunities.
          </p>
        </motion.div>
        
        {/* Contact Grid */}
        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              className="contact-item-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {item.title === "Location" ? (
                <div 
                  className="contact-card"
                  style={{ '--accent-color': item.color }}
                  whileHover={{ y: -5 }}
                >
                  <div className="contact-icon-container">
                    <img src={item.icon} alt={item.title} className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <h3>{item.title}</h3>
                    <p className="contact-value">{item.value}</p>
                    <p className="contact-description">{item.description}</p>
                  </div>
                  <div className="contact-status">
                    <span className="status-indicator"></span>
                    <span className="status-text">Available</span>
                  </div>
                </div>
              ) : (
                <motion.a
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                  className="contact-card"
                  style={{ '--accent-color': item.color }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="contact-icon-container">
                    <img src={item.icon} alt={item.title} className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <h3>{item.title}</h3>
                    <p className="contact-value">{item.value}</p>
                    <p className="contact-description">{item.description}</p>
                  </div>
                  <div className="contact-action">
                    <span className="action-text">{item.action}</span>
                    <span className="action-arrow">→</span>
                  </div>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Contact Form (Optional - you can add later) */}
        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how we can work together to bring your ideas to life.</p>
            <div className="cta-buttons">
              <a 
                href="mailto:aakashsureshek@gmail.com" 
                className="primary-cta"
              >
                Email Me
              </a>
              <a 
                href="tel:+916238819335" 
                className="secondary-cta"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="footer-info">
              <p className="footer-name">Akash Suresh EK</p>
              <p className="footer-title">Full Stack Developer</p>
            </div>
            <div className="footer-links">
              <a 
                href="https://linkedin.com/in/akash-suresh2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Akashsuresh555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
              <a 
                href="/Akash-suresh e.k resume.pdf" 
                download
                className="footer-link"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Akash Suresh EK. All rights reserved.</p>
            <p className="tech-stack">
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}