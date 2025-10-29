// components/Services.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern technologies like React, Node.js, and MongoDB. Creating scalable, performant, and user-friendly solutions.",
      icon: "bx bx-code-alt",
      features: ["React Applications", "Node.js Backend", "RESTful APIs", "Database Design"],
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security assessments, vulnerability testing, and implementation of robust security measures to protect your digital assets.",
      icon: "bx bx-shield-alt-2",
      features: ["Threat Analysis", "Penetration Testing", "Security Audits", "Risk Management"],
      color: "from-green-600 to-green-700",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.",
      icon: "bx bx-mobile-alt",
      features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Deployment"],
      color: "from-purple-600 to-purple-700",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "User-centered design approaches that create intuitive, beautiful, and functional interfaces that enhance user engagement.",
      icon: "bx bx-palette",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
      color: "from-pink-600 to-pink-700",
    },
    {
      id: 5,
      title: "DevOps & Cloud Solutions",
      description:
        "Infrastructure automation, CI/CD pipelines, and cloud deployment strategies to ensure reliable and scalable applications.",
      icon: "bx bx-cloud",
      features: ["AWS/Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
      color: "from-orange-600 to-orange-700",
    },
    {
      id: 6,
      title: "Technical Consulting",
      description:
        "Strategic technology guidance and architecture planning to help businesses make informed technical decisions.",
      icon: "bx bx-bulb",
      features: ["Tech Strategy", "Architecture Review", "Code Audits", "Performance Optimization"],
      color: "from-teal-600 to-teal-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Smooth scroll to Contact Section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="section bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-gray-800 dark:text-white">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Comprehensive technology solutions tailored to meet your business objectives
            and drive digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 h-full transform transition-all duration-500 group-hover:shadow-2xl">
                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${service.color} p-6 relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <i className={`${service.icon} text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into innovative digital
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Smooth Scroll Button */}
              <button
                onClick={scrollToContact}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium 
                hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 
                shadow-lg hover:shadow-xl overflow-hidden group"
              >
                <span className="relative z-10">Get Started Today</span>
                <i className="bx bx-rocket ml-2 relative z-10"></i>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </button>

              {/* Modal Trigger Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 
                rounded-full font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 
                dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Schedule Consultation
                <i className="bx bx-calendar ml-2"></i>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Consultation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-md w-full shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-5 -right-5 bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 flex items-center justify-center z-50"
              >
                <i className="bx bx-x text-2xl"></i>
              </button>

              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Schedule a Consultation
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
