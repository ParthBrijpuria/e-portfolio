'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Award, GraduationCap, Code } from 'lucide-react'
import { personalInfo, achievements, skills, education } from '@/data/constants'

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download my resume to learn more about my qualifications and experience
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Resume Preview Card */}
            <motion.div variants={itemVariants} className="card p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Resume Preview</h3>
                <FileText className="h-8 w-8 text-primary-600" />
              </div>

              {/* Personal Info */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Name:</span>
                    <span className="ml-2 text-gray-900">{personalInfo.name}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Email:</span>
                    <span className="ml-2 text-gray-900">{personalInfo.email}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Phone:</span>
                    <span className="ml-2 text-gray-900">{personalInfo.phone}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Location:</span>
                    <span className="ml-2 text-gray-900">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary-600" />
                  Education
                </h4>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary-200 pl-4">
                      <h5 className="font-semibold text-gray-900">{edu.institution}</h5>
                      <p className="text-gray-600">{edu.degree}</p>
                      <p className="text-sm text-primary-600">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary-600" />
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.slice(0, 6).map((achievement, index) => (
                    <div key={index} className="text-sm">
                      <h5 className="font-medium text-gray-900">{achievement.title}</h5>
                      <p className="text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-primary-600">{achievement.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary-600" />
                  Technical Skills
                </h4>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-gray-900 text-sm mb-1">{skill.category}</h5>
                      <div className="flex flex-wrap gap-1">
                        {skill.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="card p-6">
              <h4 className="font-semibold mb-4 text-gray-900">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">JEE Advanced Rank</span>
                  <span className="font-semibold text-gray-900">7086</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">JEE Mains Rank</span>
                  <span className="font-semibold text-gray-900">8025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">12th Grade</span>
                  <span className="font-semibold text-gray-900">88%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">10th Grade</span>
                  <span className="font-semibold text-gray-900">93%</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="card p-6">
              <h4 className="font-semibold mb-4 text-gray-900">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Email:</span>
                  <a href={`mailto:${personalInfo.email}`} className="ml-2 text-primary-600 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">Phone:</span>
                  <a href={`tel:${personalInfo.phone}`} className="ml-2 text-primary-600 hover:underline">
                    {personalInfo.phone}
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">LinkedIn:</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary-600 hover:underline">
                    View Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
