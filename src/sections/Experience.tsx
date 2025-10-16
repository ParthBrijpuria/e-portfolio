'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { experiences, achievements } from '@/data/constants'
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react'

export default function Experience() {
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
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exploring my experiences at IIT Roorkee and key achievements along the way
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card p-6 hover:shadow-xl transition-all duration-300">
                    {experience.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={experience.image}
                          alt={experience.title}
                          width={400}
                          height={experience.title === "Mussoorie Trip" ? 300 : 200}
                          className={`w-full ${experience.title === "Mussoorie Trip" ? "h-72" : "h-48"} object-contain`}
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="h-4 w-4 text-primary-600" />
                      <span className="text-sm text-primary-600 font-medium">{experience.date}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500 capitalize">{experience.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {experience.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Key <span className="gradient-text">Achievements</span>
            </h3>
            <p className="text-gray-600">
              Milestones that define my academic and professional journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.slice(0, 6).map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <Award className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {achievement.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                )}
                
                <h4 className="font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                
                <p className="text-sm text-gray-600 mb-3">
                  {achievement.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{achievement.year}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full">
                    {achievement.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
