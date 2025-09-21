// components/Certifications.js
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "ALX Founder Academy",
      issuer: "African Leadership Experience",
      issued: "Sep 2025",
      skills: ["Business Development", "Entrepreneurship", "Entrepreneurial Thinking"],
      image: "109-founder-academy-4-week-certificate-william-odhiambo.png",
      credentialUrl: "https://savanna.alxafrica.com/certificates/EcrR8xhPSm?utm_campaign=94087412-ALX%20-%202025%20-%20Ventures%20FA%202W%20C0&utm_medium=email&_hsmi=108931967&utm_content=108931967&utm_source=hs_email"
    },
    {
      id: 2,
      title: "ALX Freelancer Academy",
      issuer: "African Leadership Experience",
      issued: "Sep 2025",
      skills: ["Communicating for Impact", "Entrepreneurship", "Brand Development"],
      image: "117-freelancer-academy-4-week-certificate-william-odhiambo.png",
      credentialUrl: "https://savanna.alxafrica.com/certificates/9fexCrEBNp?utm_campaign=98449599-ALX%20-%202025%20-%20Ventures%20FLA%202W%20C0&utm_medium=email&_hsmi=112355529&utm_content=112355529&utm_source=hs_email"
    },
    {
      id: 3,
      title: "ALX Ai Career Essentials",
      issuer: "African Leadership Experience",
      issued: "Aug 2025",
      skills: ["Artificial Intelligence (AI)", "Brand Development", "Career Development", "Data Visualization"],
      image: "73-alx-aice-ai-career-essentials-certificate-william-odhiambo.png",
      credentialUrl: "https://savanna.alxafrica.com/certificates/mP2F8fGpYR"
    },
    {
      id: 4,
      title: "ALX Consistency Badge",
      issuer: "African Leadership Experience",
      issued: "Aug 2025",
      skills: ["Entrepreneurial Thinking", "Artificial Intelligence (AI)"],
      image: "consistency.png",
      credentialUrl: "https://rewards.alxafrica.com/badges/cmdu2k1m804sjpbv7ubu4bn9r"
    },
    {
      id: 5,
      title: "ALX Star-Performer Badge",
      issuer: "African Leadership Experience",
      issued: "Aug 2025",
      skills: ["Career Development", "Artificial Intelligence (AI)", "Entrepreneurial Thinking"],
      image: "alxsp.png",
      credentialUrl: "https://rewards.alxafrica.com/badges/cmeciuika0qg2ek2i82kyob8w"
    },
    {
      id: 6,
      title: "Cyber Threat Management",
      issuer: "Cisco",
      issued: "Aug 2025",
      skills: ["Cyber Threat Intelligence (CTI)", "Cyber Threat Management"],
      image: "cyber-threat-management.png",
      credentialUrl: "https://www.credly.com/badges/93166236-20ec-46e4-9d3b-01dc59a20a4e/linked_in_profile",
      pdf: "Cyber_Threat_Management_certificate_williamsisulu2003-gmail-com_7650082e-481f-41c7-a5c8-ffb1d9ebb7db.pdf"
    },
    {
      id: 7,
      title: "Ethical Hacker",
      issuer: "Cisco",
      issued: "Aug 2025",
      skills: ["Ethical Hacking", "Penetration Testing", "Cyber Threat Management"],
      image: "ethical-hacker.png",
      credentialUrl: "https://www.credly.com/badges/c7869daf-f5f3-49b2-8484-e8d720e10499/linked_in_profile",
      pdf: "Ethical_Hacker_certificate_williamsisulu2003-gmail-com_ad22170a-c386-4fa6-b5ee-59b22e22d68e.pdf"
    },
    {
      id: 8,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      issued: "Aug 2025",
      skills: ["Cybersecurity", "Cyber Defense"],
      image: "introduction-to-cybersecurity.png",
      credentialUrl: "https://www.credly.com/badges/61c32c7f-9a15-4041-8fec-e12af8cc8c65/linked_in_profile",
      pdf: "Introduction_to_Cybersecurity_certificate_williamsisulu2003-gmail-com_d6dc2dc5-dc4d-4d50-9068-fe739209f853.pdf"
    },
    {
      id: 9,
      title: "ISC2 Candidate",
      issuer: "ISC2",
      issued: "Jul 2025",
      expires: "Jul 2026",
      image: "isc2-candidate.png",
      credentialUrl: "https://www.credly.com/badges/8adab26d-260e-4322-8fa3-a893445f1a97/linked_in_profile"
    },
    {
      id: 10,
      title: "Certificate of Language Ability",
      issuer: "Rosetta Stone",
      skills: ["English Language Proficiency"],
      image: "rosetta-stone-certificate.png",
      pdf: "William Odhiambo-English Speaking.pdf"
    }
  ];

  return (
    <section id="certifications" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Licenses & Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="card group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <i className="bx bx-certificate text-blue-600 dark:text-blue-300 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-blue-600 transition-colors">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              
              {cert.issued && (
                <div className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                  Issued: {cert.issued}
                  {cert.expires && <span> · Expires: {cert.expires}</span>}
                </div>
              )}
              
              {cert.skills && (
                <div className="mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-500 mb-2">Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                {(cert.credentialUrl || cert.pdf) && (
                  <a 
                    href={cert.credentialUrl || `/${cert.pdf}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center text-sm"
                  >
                    <i className="bx bx-show mr-1"></i>
                    Show credential
                  </a>
                )}
                
                {cert.image && (
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                    <i className="bx bx-image text-gray-500"></i>
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

export default Certifications;