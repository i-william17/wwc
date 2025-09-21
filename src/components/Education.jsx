// components/Education.js
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Technical University of Mombasa",
      location: "Mombasa, Kenya",
      period: "September 2021 – April 2025",
      description: "Designed, developed, implemented and maintained modern software for use in real-life applications.",
      achievements: [
        "Volunteered for IOME001 Mombasa in partnership with TuDelft University in the Netherlands. Aided in designing an electric microscope that uses Raspberry Pi and Arduinos.",
        "Completed final year project with real-world application and documentation.",
        "Part of the Google Developers Community/Club at the Technical University of Mombasa"
      ]
    }
  ];

  return (
    <section id="education" className="section bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                </div>
                <div className="mt-4 md:mt-0 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  {edu.period}
                </div>
              </div>
              
              <p className="mb-4">{edu.description}</p>
              
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-2 pl-5">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;