'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo, skills, education } from '@/data/constants'
import { GraduationCap, Code, Trophy, Users } from 'lucide-react'

export default function About() {
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
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and aspirations
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/headshot image.jpg"
                  alt="Parth Brijpuria"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {personalInfo.bio}
              </p>
            </motion.div>
          </motion.div>

          {/* Skills & Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary-600" />
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              <div className="space-y-4">
                {education.slice(0, 2).map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary-200 pl-4">
                    <h5 className="font-semibold text-gray-900">{edu.institution}</h5>
                    <p className="text-sm text-gray-600">{edu.degree}</p>
                    <p className="text-xs text-primary-600">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="h-6 w-6 text-primary-600" />
                <h4 className="text-xl font-semibold">Key Skills</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.slice(0, 4).map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="font-medium text-gray-900 text-sm">{skill.category}</h5>
                    <div className="flex flex-wrap gap-1">
                      {skill.items.slice(0, 3).map((item, itemIndex) => (
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
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">7086</div>
                <div className="text-sm text-gray-600">JEE Advanced Rank</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">2025</div>
                <div className="text-sm text-gray-600">Batch Year</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
