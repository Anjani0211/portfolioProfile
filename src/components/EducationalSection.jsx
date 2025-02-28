const Data = [
  {
    company: "Sarala Birla University, Ranchi",
    role: "MCA",

    endDate: "June, 2023",
    logo: "https://th.bing.com/th/id/OIP.sjCqC2BF-mV3FtA5IrT62gAAAA?rs=1&pid=ImgDetMain",
    tags: ["Offline", "MCA", "CSE"],
    discription: [
      "Conducting research on the latest cyber threats and vulnerabilities",
      "Developing security tools and solutions for the community",
      "Collaborating with industry experts to enhance cybersecurity awareness",
    ],
  },
  {
    company: "Gossner Collage, Ranchi",
    role: "Bsc-IT",

    endDate: "July, 2020",
    logo: "https://gcraninter.org/images/logo.jpg",
    tags: ["CSE", "IT"],
    discription: [
      "Conducting research on the latest cyber threats and vulnerabilities",
      "Developing security tools and solutions for the community",
      "Collaborating with industry experts to enhance cybersecurity awareness",
    ],
  },
  {
    company: "St. Jhon's Inter Collage, Ranchi",
    role: "Intermediate",

    endDate: "April, 2017",
    tags: ["Science"],
    logo: "https://play-lh.googleusercontent.com/c0vhoPRP9pWwQF4753ZmY8jHve3YxTEiRNCVNp_AzZ9SjApAHFq2iszsd6XM4zRDSYEV=w300-h300-pc0xffffff-pd",
    discription: [
      "Conducting research on the latest cyber threats and vulnerabilities",
      "Developing security tools and solutions for the community",
      "Collaborating with industry experts to enhance cybersecurity awareness",
    ],
  },
];

function EducationalSection() {
  return (
    <div className="">
      <h2 className=" text-3xl font-bold">Education</h2>
      <p>Proudly an alumnus of these amazing institutions.</p>
      <div className="mt-8 flex flex-col gap-12">
        {Data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img className="max-w-15" src={item.logo} alt="cyberpeace" />
                <div>
                  <h3 className="text-xl font-bold ">
                    {item.company}
                    {item.tags.map((value, index) => (
                      <span
                        className="text-xs bg-orange-600 text-white ml-2 px-2 py-0.5 rounded-full"
                        key={index}
                      >
                        {value}
                      </span>
                    ))}
                  </h3>
                </div>
              </div>
              <p className="hidden md:block">{item.endDate}</p>
            </div>
            {/* <div className="mt-2 ml-30 text-base" id="discription">
              {item.discription.map((value, index) => (
                <p key={index}>{value}</p>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationalSection;
