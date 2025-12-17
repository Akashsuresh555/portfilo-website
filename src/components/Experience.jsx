import { motion } from 'framer-motion'
import buildingIcon from '../assets/building.png'
import calendarIcon from '../assets/calendar.png'
import locationIcon from '../assets/location.png'

export default function Experience() {
  const experiences = [
    {
      company: 'Studien College',
      role: 'Full Stack Developer',
      location: 'Kozhikode, Kerala',
      period: 'Jan 2025 – Nov 2025',
      duration: '11 months',
      achievements: [
        'Built scalable MERN applications with responsive React UI and TypeScript components',
        'Developed optimized REST APIs reducing response latency by 20%',
        'Implemented Redux-based state management reducing re-renders by 25%',
        'Improved cross-browser stability and mobile responsiveness',
        'Led team of 3 developers in agile development cycles'
      ],
      tech: ['React', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'AWS', 'Docker'],
      type: 'Full-time',
      impact: 'Improved application performance by 35%'
    },
    {
      company: 'Senchola Technology Solutions',
      role: 'Full Stack Developer',
      location: 'Bengaluru (Remote)',
      period: 'Aug 2024 – Dec 2024',
      duration: '5 months',
      achievements: [
        'Developed full-stack systems supporting 5,000+ daily users using MERN stack',
        'Implemented JWT authentication reducing unauthorized access by 60%',
        'Integrated third-party APIs improving engagement by 35%',
        'Refactored legacy modules increasing maintainability by 40%',
        'Mentored 2 junior developers on best practices'
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Microservices', 'Docker', 'CI/CD', 'Redis'],
      type: 'Full-time',
      impact: 'Scaled system to handle 2x user growth'
    }
  ]

  const totalExperience = "1+ Year"

  return (
    <section id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>Professional Experience</h2>
          <p className="section-subtitle">
            {totalExperience} of hands-on experience building production-ready web applications across various domains
          </p>
          
          {/* Experience Summary */}
          <div className="experience-summary">
            <div className="summary-item">
              <span className="summary-number">10+</span>
              <span className="summary-label">Projects</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">5K+</span>
              <span className="summary-label">Users Served</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{totalExperience}</span>
              <span className="summary-label">Experience</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">100%</span>
              <span className="summary-label">Satisfaction</span>
            </div>
          </div>
        </motion.div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="experience-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ x: 5 }}
            >
              {/* Timeline connector */}
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              {/* Experience Content */}
              <div className="experience-content">
                {/* Experience Header */}
                <div className="experience-header">
                  <div className="company-info">
                    <div className="company-header">
                      <h3>{exp.company}</h3>
                      <span className={`employment-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="role-title">{exp.role}</p>
                    
                    <div className="experience-meta">
                      <div className="meta-item">
                        <img src={calendarIcon} alt="Calendar" className="meta-icon" />
                        <span>{exp.period} • {exp.duration}</span>
                      </div>
                      <div className="meta-item">
                        <img src={locationIcon} alt="Location" className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="experience-date">
                    {exp.period}
                  </div>
                </div>
                
                {/* Key Achievements */}
                <div className="achievements-section">
                  <h4>Key Achievements</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.15) + (i * 0.05), duration: 0.3 }}
                      >
                        <span className="achievement-bullet">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Impact Highlight */}
                <div className="impact-highlight">
                  <span className="impact-icon">🚀</span>
                  <span className="impact-text">{exp.impact}</span>
                </div>
                
                {/* Tech Stack */}
                <div className="tech-stack-section">
                  <h4>Technologies Used</h4>
                  <div className="tech-stack">
                    {exp.tech.map(tech => (
                      <motion.span 
                        key={tech}
                        className="tech-item"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="experience-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="cta-text">Looking for a dedicated Full Stack Developer for your next project?</p>
          <a 
            href="mailto:aakashsureshek@gmail.com" 
            className="cta-button"
          >
            Let's Build Together
          </a>
        </motion.div>
      </div>
    </section>
  )
}