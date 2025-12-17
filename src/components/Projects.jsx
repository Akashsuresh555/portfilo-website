import { motion } from 'framer-motion'
import github from '../assets/github.png'
import external from '../assets/external.png' // Make sure you have this file or use an alternative
import todoImage from '../assets/Gemini_Generated_Image_q5txcvq5txcvq5tx (2).png'
import cloudImage from '../assets/Gemini_Generated_Image_fstv0ufstv0ufstv (2).png'
import routevueImage from '../assets/Gemini_Generated_Image_8er7fb8er7fb8er7 (2).png'

export default function Projects() {
  const projects = [
    {
      title: 'Cloud Billing Management System',
      description: 'Enterprise-grade billing solution with real-time multi-user access and automated invoicing.',
      image: cloudImage,
      tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'CI/CD', 'AWS', 'Docker', 'JWT'],
      features: [
        'Real-time multi-user access and collaboration',
        'Optimized MongoDB Atlas queries for high availability',
        'Invoice, customer, and product management modules',
        'Automated billing and reporting system',
        'Secure payment gateway integration',
        'Role-based access control system'
      ],
      github: 'https://github.com/Akashsuresh555/invoice-billing',
      demo: 'https://akashsuresh555.github.io/invoice-billing/',
      status: 'Complete',
      impact: 'Reduced billing processing time by 40%',
      role: 'Full Stack Developer'
    },
    {
      title: 'MERN Stack To-Do App',
      description: 'Full-stack task management application with real-time updates and user authentication.',
      image: todoImage,
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Redux', 'Material-UI'],
      features: [
        'CRUD operations with real-time updates using Socket.io',
        'User authentication and authorization with JWT',
        'Task categorization and filtering',
        'Progress tracking and analytics dashboard',
        'Mobile-responsive design with PWA support',
        'Dark/light theme toggle'
      ],
      github: 'https://github.com/Akashsuresh555/todoapp',
      demo: 'https://github.com/Akashsuresh555/todoapp',
      status: 'Complete',
      impact: 'Served 500+ active users',
      role: 'Full Stack Developer'
    },
    {
      title: 'RouteVue Business Billing System',
      description: 'Analytics and invoicing platform for SMEs with PDF export and mobile-responsive UI.',
      image: routevueImage,
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'AWS', 'PDF.js', 'Chart.js', 'Vuex'],
      features: [
        'Built analytics, invoicing, and customer management for SMEs',
        'Developed PDF export functionality with custom templates',
        'Mobile-responsive user interface with offline support',
        'Improved backend performance with 20% faster API load',
        'Dashboard with business insights and revenue tracking',
        'Multi-currency support and tax calculation'
      ],
      github: 'https://github.com/Akashsuresh555/RouteVue-Business-Billing-System',
      demo: 'https://github.com/Akashsuresh555/RouteVue-Business-Billing-System',
      status: 'Complete',
      impact: 'Increased user productivity by 30%',
      role: 'Full Stack Developer'
    },
   
  ]

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>Featured Projects</h2>
          <p className="section-subtitle">
            Full-stack applications showcasing end-to-end development expertise and innovative solutions
          </p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Header with Status */}
              <div className="project-header">
                <div className="project-status">
                  <span className={`status-dot ${project.status === 'Complete' ? 'complete' : 'progress'}`}></span>
                  <span className="status-text">{project.status}</span>
                </div>
                <span className="project-role">{project.role}</span>
              </div>
              
              {/* Project Image */}
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop&q=80'
                  }}
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="project-content">
                {/* Project Title and Description */}
                <div className="project-title-section">
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="project-tech-section">
                  <h4>Tech Stack</h4>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="tech-tag"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="project-features-section">
                  <h4>Key Features</h4>
                  <ul className="project-features">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <li key={i}>
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Project Impact */}
                <div className="project-impact">
                  <div className="impact-icon">📈</div>
                  <span className="impact-text">{project.impact}</span>
                </div>
                
                {/* Project Links */}
                <div className="project-links">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link github-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={github} alt="GitHub" className="link-icon" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link demo-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={external} alt="Live Demo" className="link-icon" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Projects */}
        <motion.div 
          className="view-more-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a 
            href="https://github.com/akash-suresh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            <img src={github} alt="GitHub" className="github-icon" />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}