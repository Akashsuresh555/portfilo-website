import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: "Full Stack Development",
      icon: "🌐",
      skills: [
        "MERN Stack", "RESTful APIs", "Microservices", "Server-side Rendering", 
        "Authentication", "Web Sockets", "API Integration", "System Design"
      ]
    },
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        "React", "Redux", "TypeScript", "Next.js", "Material-UI", 
        "Tailwind CSS", "Vue.js", "Vite", "Webpack"
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js", "Express.js", "REST APIs", "JWT", 
        "Microservices", "API Design",  "NestJS", "Authentication"
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        "MongoDB", "MySQL", "PostgreSQL",  
        "Mongoose",  "Database Design", "Query Optimization", 
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      skills: [
        "Git", "Docker", "AWS", "CI/CD", 
         "Postman", "Linux",  "Web Security"
      ]
    },
    {
      title: "Testing",
      icon: "🧪",
      skills: [
        "Jest", "React Testing Library",  "Unit Testing",
        "Integration Testing", "Test Coverage", "Jasmine"
      ]
    }
  ]

  const proficiencyLevels = [
    { skill: "MERN Stack", level: 90 },
    { skill: "React", level: 92 },
    { skill: "Node.js", level: 88 },
    { skill: "MongoDB", level: 85 },
    { skill: "TypeScript", level: 82 },
    { skill: "AWS", level: 78 },
    { skill: "Docker", level: 75 },
    { skill: "REST APIs", level: 90 }
  ]

  const fullStackSkills = [
    { 
      name: "Frontend Development", 
      level: 95, 
      color: "#3b82f6",
      tags: ["Component Design", "State Management", "Responsive UI", "User Experience"]
    },
    { 
      name: "Backend Development", 
      level: 90, 
      color: "#8b5cf6",
      tags: ["Server Logic", "Business Rules", "Security", "Middleware"]
    },
    { 
      name: "Database Design", 
      level: 85, 
      color: "#06b6d4",
      tags: ["Schema Design", "Query Optimization", "Data Modeling", "Indexing"]
    },
    { 
      name: "API Development", 
      level: 92, 
      color: "#10b981",
      tags: ["REST Architecture", "Endpoints", "Documentation", "Versioning"]
    },
    { 
      name: "System Architecture", 
      level: 80, 
      color: "#f59e0b",
      tags: ["Scalability", "Maintainability", "Patterns", "Integration"]
    },
    { 
      name: "Deployment & DevOps", 
      level: 78, 
      color: "#ef4444",
      tags: ["CI/CD", "Containerization", "Cloud Services", "Monitoring"]
    },
    { 
      name: "Testing & Quality", 
      level: 85, 
      color: "#8b5cf6",
      tags: ["Unit Tests", "Integration Tests", "Code Coverage", "Quality Assurance"]
    },
    { 
      name: "Performance Optimization", 
      level: 88, 
      color: "#3b82f6",
      tags: ["Load Time", "Resource Usage", "Caching", "Bundle Size"]
    }
  ]

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>Skills & Expertise</h2>
          <p className="section-subtitle">
            Full-stack development capabilities with expertise across the entire technology stack
          </p>
        </motion.div>

        {/* Full Stack Development Specialization */}
        <motion.div 
          className="web-dev-specialization"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="specialization-header">
            <span className="specialization-icon">🚀</span>
            <h3>Full Stack Development Expertise</h3>
          </div>
          <p className="specialization-description">
            Comprehensive skills across frontend, backend, databases, and deployment for end-to-end application development
          </p>
          
          <div className="web-dev-skills">
            {fullStackSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="web-dev-skill"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="web-skill-header">
                  <span className="web-skill-name">{skill.name}</span>
                  <span className="web-skill-level">{skill.level}%</span>
                </div>
                <div className="web-skill-bar">
                  <motion.div 
                    className="web-skill-progress"
                    style={{ 
                      backgroundColor: skill.color,
                      width: `${skill.level}%`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 1, ease: "easeOut" }}
                  />
                </div>
                <div className="web-skill-tags">
                  {skill.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="web-skill-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Skills Grid & Proficiency */}
        <div className="skills-container">
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                className="skill-category-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.03), duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Chart */}
          <motion.div 
            className="proficiency-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="proficiency-header">
              <h3>Technology Proficiency</h3>
              <span className="chart-icon">📊</span>
            </div>
            <p className="proficiency-description">
              Mastery level in full-stack development technologies
            </p>
            
            <div className="proficiency-bars">
              {proficiencyLevels.map((item, index) => (
                <motion.div 
                  key={item.skill}
                  className="proficiency-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                >
                  <div className="skill-label">
                    <span>{item.skill}</span>
                    <span className="percentage">{item.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ delay: 0.7 + (index * 0.1), duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div 
          className="additional-skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h4 className="additional-title">Additional Competencies</h4>
          <div className="additional-tags">
            <span className="additional-tag">Problem Solving</span>
            <span className="additional-tag">Team Collaboration</span>
            <span className="additional-tag">Agile Methodology</span>
            <span className="additional-tag">Code Review</span>
            <span className="additional-tag">Performance Optimization</span>
            <span className="additional-tag">Technical Documentation</span>
            <span className="additional-tag">Mentoring</span>
            <span className="additional-tag">Project Planning</span>
            <span className="additional-tag">System Architecture</span>
            <span className="additional-tag">Version Control</span>
            <span className="additional-tag">Code Quality</span>
            <span className="additional-tag">Debugging</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}