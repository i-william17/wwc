// components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import ghck from '../assets/ghck.png';
import wwc from '../assets/wwc.png';
import ember from '../assets/ember.png';
import long from '../assets/long.png';
import septa from '../assets/septa.png';
import zivuko from '../assets/zivuko.png';
import comm from '../assets/comm.png';
import web from '../assets/web.png';
import book from '../assets/book.jpeg';
import robot from '../assets/ros.jpeg';
import doba from '../assets/doba.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'Bookie 1.0 - Learning Management System',
      description:
        'A full-stack learning management mobile app with Express, Node.js, React, and MongoDB. Integrated M-Pesa Daraja for payments and Node mailer for email activation.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'M-Pesa API'],
      period: 'Jan 2025 - Apr 2025',
      category: 'Mobile App',
      image: `${book}`,
    },
    {
      title: 'E-Commerce Web Application',
      description:
        'Developed a full-stack e-commerce system with Express, Node.js, React, and MongoDB. Used TailwindCSS for styling.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
      period: 'Jun 2024 - Jul 2024',
      category: 'Web App',
      image: `${comm}`,
    },
    {
      title: 'Doba Music App',
      description:
        'A music player mobile app developed with Express, Node.js, React, and MongoDB using agile methodology.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      period: 'Jun 2024 - Jul 2024',
      category: 'Mobile App',
      image: `${doba}`,
    },
    {
      title: 'Gulf Medical Management System',
      description:
        'A full-stack medical management web system for healthcare facilities.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
      period: 'Oct 2024 - Present',
      category: 'Web App',
      image: `${ghck}`,
      link: 'https://www.ghck.co.ke',
    },
    {
      title: 'Web Achievers Portfolio',
      description:
        'Designed a web portfolio for a youth empowerment organization with React and Node.js.',
      technologies: ['React', 'Node.js', 'CSS'],
      period: 'Jun 2024 - Jul 2024',
      category: 'Web Design',
      image: `${web}`,
    },
    {
      title: 'Robotics Programming with ROS',
      description:
        'Collaborated on the design and programming of robots using ROS (Robot Operating System).',
      technologies: ['ROS', 'Python', 'C++'],
      period: '2024',
      category: 'Robotics',
      image: `${robot}`,
    },
    {
      title: 'William Writes Code Portfolio',
      description:
        'Designed a personal web portfolio for personal branding with React and Node.js.',
      technologies: ['React', 'Node.js', 'CSS'],
      period: 'Jul 2025',
      category: 'Web Design',
      image: `${wwc}`,
    },
        {
      title: 'Emberprise Africa Website',
      description:
        'Designed a website for Emberprise Africa with Next.js and Node.js.',
      technologies: ['Next.js', 'Node.js', 'Tailwind CSS'],
      period: 'Jun 2024 - Jul 2024',
      category: 'Web Design',
      image: `${ember}`,
      link: 'https://emberprise.netlify.app/',
    },
        {
      title: 'Longclause Website',
      description:
        'Designed a website for LongClause with Next.js and Node.js.',
      technologies: ['Next.js', 'Node.js', 'Tailwind CSS'],
      period: 'Jun 2024 - Jul 2024',
      category: 'Web Design',
      image: `${long}`,
    },
        {
      title: 'SeptaGreen Africa Website',
      description:
        'Designed a website for SeptaGreen Africa with Next.js and Node.js.',
      technologies: ['Next.js', 'Node.js', 'Tailwind CSS'],
      period: 'Jun 2025 - Jul 2025',
      category: 'Web Design',
      image: `${septa}`,
    },
        {
      title: 'Zivuko Kenya Website',
      description:
        'Designed an e-commerce site for Zivuko with Next.js and Node.js.',
      technologies: ['Next.js', 'Node.js', 'Tailwind CSS'],
      period: 'May 2024 - present',
      category: 'Web Design',
      image: `${zivuko}`,
    },
  ];

  return (
    <section
      id="projects"
      className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            A showcase of my work across web, mobile, and robotics projects —
            blending innovation, security, and design excellence.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow">
                  {project.category}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.period}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm flex items-center hover:underline"
                    >
                      <i className="bx bx-link-external mr-1"></i> View Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
