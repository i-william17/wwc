import React, { useState } from "react";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "ALX Professional Foundations",
      issuer: "African Leadership Experience",
      issued: "Oct 2025",
      skills: [
        "Career Development",
        "Communicating for Impact",
        "Adaptability",
        "Resilience",
        "Teamwork",
        "Leadership",
      ],
      image: "89-professional-foundations-certificate-william-odhiambo.png",
      credentialUrl: "alx_foundations",
    },
    {
      id: 2,
      title: "Certified in Cybersecurity",
      issuer: "ISC2",
      issued: "Oct 2025",
      expires: "Oct 2028",
      skills: [
        "Security Principles",
        "Incident Response",
        "Access Control Concepts",
        "Network Security",
        "Risk Management",
        "Security Operations",
      ],
      image: "certified-in-cybersecurity.png",
    },
    {
      id: 3,
      title: "Commonwealth Bank - Introduction to Cybersecurity Job Simulation",
      issuer: "Forage",
      issued: "Oct 2025",
      credentialId: "DGtBCwJxZMRt3DZr7",
      pdf: "x52Jy9s26xNbZkTQ7_2sNmYuurxgpFYawco_68db528e3422615eb7b4dac4_1759295815187_completion_certificate.pdf",
      image: "commonwealth.png",
      skills: ["Penetration Testing", "Data Analysis"],
    },
    {
      id: 4,
      title: "Deloitte Australia - Cyber Job Simulation",
      issuer: "Forage",
      issued: "Oct 2025",
      credentialId: "3Ar9NbxtBjAhYKEEu",
      pdf: "Deloitte Cyber Job Simulation Certificate.pdf",
      skills: ["Intrusion Detection"],
    },
    {
      id: 5,
      title: "Implement Load Balancing on Compute Engine Skill Badge",
      issuer: "Google",
      issued: "Oct 2025",
      image: "implement-load-balancing-on-compute-engine-skill-ba.png",
      credentialUrl: "#",
    },
    {
      id: 6,
      title: "Mastercard - Cybersecurity Job Simulation",
      issuer: "Forage",
      issued: "Oct 2025",
      credentialId: "WLkEjrkXYgD7XyJYr",
      pdf: "vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_68db528e3422615eb7b4dac4_1760388970355_completion_certificate.pdf",
      skills: ["Security Awareness"],
    },
    {
      id: 7,
      title: "ALX Founder Academy",
      issuer: "African Leadership Experience",
      issued: "Sep 2025",
      image: "109-founder-academy-4-week-certificate-william-odhiambo.png",
      skills: ["Business Development", "Entrepreneurship", "Entrepreneurial Thinking"],
    },
    {
      id: 8,
      title: "ALX Freelancer Academy",
      issuer: "African Leadership Experience",
      issued: "Sep 2025",
      image: "117-freelancer-academy-4-week-certificate-william-odhiambo.png",
      skills: ["Communicating for Impact", "Entrepreneurship", "Brand Development"],
    },
    {
      id: 9,
      title: "ALX Ai Career Essentials",
      issuer: "African Leadership Experience",
      issued: "Aug 2025",
      image: "73-alx-aice-ai-career-essentials-certificate-william-odhiambo.png",
      skills: [
        "Artificial Intelligence (AI)",
        "Brand Development",
        "Career Development",
        "Data Visualization",
      ],
    },
    {
      id: 10,
      title: "ALX Consistency Badge",
      issuer: "African Leadership Experience",
      issued: "Aug 2025",
      image: "consistency.png",
      skills: ["Entrepreneurial Thinking", "Artificial Intelligence (AI)"],
    },
    {
      id: 11,
      title: "ALX Star-Performer Badge",
      issuer: "African Leadership Experience",
      issued: "Aug 2025",
      image: "alxsp.png",
      skills: ["Career Development", "Artificial Intelligence (AI)", "Entrepreneurial Thinking"],
    },
    {
      id: 12,
      title: "Cyber Threat Management",
      issuer: "Cisco",
      issued: "Aug 2025",
      pdf: "Cyber_Threat_Management_certificate_williamsisulu2003-gmail-com_7650082e-481f-41c7-a5c8-ffb1d9ebb7db.pdf",
      image: "cyber-threat-management.png",
      skills: ["Cyber Threat Intelligence (CTI)", "Cyber Threat Management"],
    },
    {
      id: 13,
      title: "Ethical Hacker",
      issuer: "Cisco",
      issued: "Aug 2025",
      pdf: "Ethical_Hacker_certificate_williamsisulu2003-gmail-com_ad22170a-c386-4fa6-b5ee-59b22e22d68e.pdf",
      image: "ethical-hacker.png",
      skills: ["Ethical Hacking", "Penetration Testing", "Cyber Threat Management"],
    },
    {
      id: 14,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      issued: "Aug 2025",
      pdf: "Introduction_to_Cybersecurity_certificate_williamsisulu2003-gmail-com_d6dc2dc5-dc4d-4d50-9068-fe739209f853.pdf",
      image: "introduction-to-cybersecurity.png",
      skills: ["Cybersecurity", "Cyber Defense"],
    },
    {
      id: 15,
      title: "ISC2 Candidate",
      issuer: "ISC2",
      issued: "Jul 2025",
      expires: "Jul 2026",
      image: "isc2-candidate.png",
    },
    {
      id: 16,
      title: "Certificate of Language Ability",
      issuer: "Rosetta Stone",
      pdf: "William Odhiambo-English Speaking.pdf",
    },
  ];

  return (
    <section id="certifications" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-2xl font-bold mb-6">
          Licenses & Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="card group cursor-pointer border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition-all"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {cert.issued && (
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Issued: {cert.issued}
                  {cert.expires && <span> · Expires: {cert.expires}</span>}
                </div>
              )}

              {cert.skills && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center">
                {(cert.credentialUrl || cert.pdf) && (
                  <a
                    href={cert.credentialUrl || `/${cert.pdf}`}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm flex items-center"
                  >
                    <i className="bx bx-show mr-1"></i>
                    Show credential
                  </a>
                )}

                {cert.image && (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-lg w-full mx-4 relative shadow-2xl animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>

            {selectedCert.image && (
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="rounded-lg mb-4 w-full"
              />
            )}

            <h3 className="text-xl font-semibold mb-1">
              {selectedCert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Issued by {selectedCert.issuer}
            </p>
            {selectedCert.issued && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Issued: {selectedCert.issued}
                {selectedCert.expires && (
                  <span> · Expires: {selectedCert.expires}</span>
                )}
              </p>
            )}

            {selectedCert.skills && (
              <div className="mb-3">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(selectedCert.credentialUrl || selectedCert.pdf) && (
              <a
                href={selectedCert.credentialUrl || `/${selectedCert.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center mt-3"
              >
                <i className="bx bx-show mr-1"></i>
                Show credential
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
