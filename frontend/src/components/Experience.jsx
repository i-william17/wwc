// components/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: "Founder",
      company: "SeptaGreen Africa",
      location: "Kenya",
      period: "July 2025 - Present",
      description: "Leading a mission focused on empowering Africa's digital future through three core wings: Cybersecurity, Technology Solutions, and Data Science & Analytics.",
      responsibilities: [
        "Providing affordable, secure, and scalable services from threat monitoring to software development",
        "Developing AI-powered analytics designed to protect, connect, and uplift individuals, SMEs, and enterprises across Africa and beyond",
        "Overseeing strategic direction and business development"
      ]
    },
    {
      position: "Full Stack Software Engineer & Robotics Trainer",
      company: "Afribot Robotics Africa Limited",
      location: "Mombasa, Kenya",
      period: "July 2024 – September 2025",
      description: "Played a pivotal role in training and developing robotics and software engineering skills.",
      responsibilities: [
        "Collaborated with management and internal partners to streamline software application design",
        "Leveraged ROS (Robot Operating System) for effective robot programming",
        "Gained valuable experience with various frontend and backend frameworks",
        "Trained individuals in robotics and software development principles"
      ]
    },
    {
      position: "Intern",
      company: "Afribot Robotics Africa Limited",
      location: "Mombasa, Kenya",
      period: "May 2024 – July 2024",
      description: "Collaborated with a team of engineers to develop software solutions in a practical environment.",
      responsibilities: [
        "Enhanced coding skills through hands-on projects",
        "Improved attention to detail and problem-solving abilities",
        "Contributed to the successful completion of multiple projects",
        "Fostered a strong sense of teamwork and collaboration"
      ]
    },
    {
      position: "Software Developer Volunteer",
      company: "IOME001",
      location: "Mombasa, Kenya",
      period: "March 2024 – April 2024",
      description: "Volunteered for IOME001 Mombasa in partnership with TuDelft University in the Netherlands.",
      responsibilities: [
        "Aided in designing an electric microscope that uses Raspberry Pi and Arduinos",
        "Collaborated with international team members on innovative technology solutions",
        "Applied software development skills to scientific instrumentation"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 before:absolute before:left-0 before:top-2 before:w-6 before:h-6 before:bg-blue-600 before:rounded-full before:z-10 after:absolute after:left-3 after:top-8 after:bottom-0 after:w-0.5 after:bg-blue-200 dark:after:bg-blue-900 last:after:hidden">
              <div className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {exp.period}
                  </div>
                </div>
                
                <p className="mb-4">{exp.description}</p>
                
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-2 pl-5">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;