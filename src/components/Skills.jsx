// components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const hardSkills = [
    { name: 'Cybersecurity', level: 90 },
    { name: 'Mobile App Development', level: 90 },
    { name: 'Web Development', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'JavaScript', level: 95 },
    { name: 'MongoDB', level: 85 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Git & GitHub', level: 90 },
    { name: 'ROS (Robot OS)', level: 75 },
  ];

  const professionalSkills = [
    'Project Coordination',
    'Public Speaking',
    'Effective Communication',
    'Team Collaboration',
    'Entrepreneurial Thinking',
    'Time Management',
    'Critical Thinking',
    'Problem Solving',
    'Adaptability',
  ];

  return (
    <section
      id="skills"
      className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            A blend of technical expertise and professional strengths to build secure, scalable, and innovative digital solutions.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full shadow-inner"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 font-medium shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
