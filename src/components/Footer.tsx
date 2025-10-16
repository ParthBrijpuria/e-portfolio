'use client'

import { Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react'
import { personalInfo } from '@/data/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Parth Brijpuria</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                About Me
              </a>
              <a href="#experience" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-primary-600 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-primary-600 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Parth Brijpuria. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Built with Next.js, Tailwind CSS & ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
