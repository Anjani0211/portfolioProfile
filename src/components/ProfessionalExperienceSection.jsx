import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// Data
const Data = [
  {
    company: "CyberPeace Foundation",
    role: "Security Researcher",
    startDate: "May, 2024",
    endDate: "Present",
    logo: "https://www.newsvoir.com/images/user/logo/_cyberpeace-foundoff-logo.png",
    tags: ["Networking", "Firewall", "Splunk", "MERN"],
    discription: [
      "Conducting research on the latest cyber threats and vulnerabilities",
      "Developing security tools and solutions for the community",
      "Collaborating with industry experts to enhance cybersecurity awareness",
    ],
  },
  {
    company: "CyberPeace Council",
    role: "Research Associate",
    startDate: "Feb, 2023",
    endDate: "April, 2024",
    logo: "https://www.newsvoir.com/images/user/logo/0_CyberPeace%20Council%20Logo.jpeg",
    tags: ["Networking", "Threat Reports", "Malware Analysis"],
    discription: [
      "Conducting research on the latest cyber threats and vulnerabilities",
      "Developing security tools and solutions for the community",
      "Collaborating with industry experts to enhance cybersecurity awareness",
    ],
  },
  {
    company: "NewsCity Media Pvt.Ltd.",
    role: "Web Developer",
    startDate: "Feb, 2023",
    endDate: "April, 2024",
    tags: ["WordPress", "HTML", "CSS", "JavaScript"],
    logo: "https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/450515057_122097215768411785_5687696445755432469_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6zUkWA9LFBoQ7kNvgEF9CzF&_nc_oc=Adjx7AQnrN-9s0zcJMRl2eu-jRvOuex39fEFvEPkGVKKinMRo1q6cvFNFy2VBCGp5Mw&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=A3YlGKo74r0II_Bzd3qxnJ5&oh=00_AYC-ILHlmMY9zVMvVa1OAzP7sVDLOxLm3mu4op-kjk94ZA&oe=67C36B4B",
    discription: [
      "Conducting research on the latest cyber threats and vulnerabilities",
      "Developing security tools and solutions for the community",
      "Collaborating with industry experts to enhance cybersecurity awareness",
    ],
  },
];

function ProfessionalExperienceSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function for dropdown
  const handleDiscriptionCollapse = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className=" ">
      <h2 className="text-3xl font-bold">Professional Experience</h2>
      <p>I genuinely enjoy a good work environment and the team I work with.</p>
      <div className="mt-8 flex flex-col gap-12">
        {Data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex gap-4 items-center">
                <img className="max-w-15" src={item.logo} alt="cyberpeace" />
                <div >
                  <h3 className="flex flex-col items-center md:flex-row text-xl font-bold ">
                    {item.company}

                    {item.tags.map((value, tagIndex) => (
                      <span
                        className="text-xs bg-orange-600 text-white ml-2 px-2 py-0.5 rounded-full hidden md:block"
                        key={tagIndex}
                      >
                        {value}
                      </span>
                    ))}
                  </h3>

                  <p>
                    {item.role}
                    <button
                      className="text-orange-700 ml-3"
                      onClick={() => handleDiscriptionCollapse(index)}
                    >
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`transition-transform duration-300 ${
                          openIndex === index ? "-rotate-180" : ""
                        }`}
                      />
                    </button>
                  </p>
                  <p className="md:hidden">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
              </div>
              <p className="hidden md:block">
                {item.startDate} - {item.endDate}
              </p>
            </div>

            {/* Description Dropdown */}
            {openIndex === index && (
              <div className="mt-4 ml-30 text-base p-3">
                {item.discription.map((value, descIndex) => (
                  <p key={descIndex}>{value}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalExperienceSection;
