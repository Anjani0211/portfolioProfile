import { useState } from "react";
import { Calendar, ExternalLink, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const blogData = [
    {
        year: "2025",
        title: "Complete Guide: Setting Up ELK Stack (Elasticsearch, Logstash, Kibana) with Troubleshooting",
        description: "A step-by-step breakdown of building a Security Operations Center using open-source tools.",
        image: "https://miro.medium.com/v2/resize:fit:300/format:webp/1*_vdD8nVppGaXZKqpAOASlA.png",
        link: "https://medium.com/@anjanikr/complete-guide-setting-up-elk-stack-elasticsearch-logstash-kibana-with-troubleshooting-ff8754926963",
      },
      {
        year: "2025",
        title: "Cowrie Honeypot Installations Step by Step 2025",
        description: "All you need to know to get started with TI and how it helps in cyber defense.",
        image: "https://miro.medium.com/v2/resize:fit:250/format:webp/1*LKvN3x6XDo8ek0jPJa0kYQ.jpeg",
        link: "https://medium.com/@anjanikr/cowrie-honeypot-installations-step-by-step-2025-8875e0e7e03b",
      },
      {
        year: "2025",
        title: "OpenCanary Honeypot Installation Guide Step by Step 2025",
        description: "All you need to know to get started with TI and how it helps in cyber defense.",
        image: "https://miro.medium.com/v2/resize:fit:250/format:webp/1*VgDFilmY_ClpI8RN6nN8Gw.jpeg",
        link: "https://medium.com/@anjanikr/opencanary-installation-guide-step-by-step-abf968adce6b",
      },
      {
        year: "2024",
        title: "OpenCanary Honeypot Installation Guide Step by Step 2024",
        description: "All you need to know to get started with TI and how it helps in cyber defense.",
        image: "https://miro.medium.com/v2/resize:fit:250/format:webp/1*VgDFilmY_ClpI8RN6nN8Gw.jpeg",
        link: "https://medium.com/@anjanikr/opencanary-installation-guide-step-by-step-abf968adce6b",
      },
  // Add more blogs as needed
];

function Blogs() {
  const years = [...new Set(blogData.map(blog => blog.year))];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogData.filter(
    blog => blog.year === selectedYear && (
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className=" min-h-screen text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        {/* Year Selector */}
        <div className="w-1/5">
          <h2 className="text-orange-600 text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" /> Years
          </h2>
          <ul className="space-y-2">
            {years.map((year) => (
              <li key={year}>
                <button
                  onClick={() => setSelectedYear(year)}
                  className={`w-full text-left px-4 py-2 rounded-md transition flex items-center gap-2 ${
                    selectedYear === year
                      ? "bg-orange-600 text-white"
                      : "bg-zinc-800 text-orange-600 hover:bg-orange-600 hover:text-white"
                  }`}
                >
                  <Calendar className="w-4 h-4" /> {year}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog Cards */}
        <div className="w-4/5 space-y-8">
          <motion.h1 
            className="text-3xl font-bold text-orange-600 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Blogs from {selectedYear}
          </motion.h1>

          {/* Search Bar */}
          <div className="mb-6 relative">
            <input
              type="text"
              placeholder="Search blog titles or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-zinc-400" />
          </div>

          <AnimatePresence>
            {filteredBlogs.map((blog, index) => (
              <motion.a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-zinc-900 hover:bg-zinc-800 transition p-4 rounded-2xl shadow-lg group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-40 h-28 flex-shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-orange-600 mb-1 flex items-center gap-2">
                    {blog.title} <ExternalLink className="w-4 h-4 text-white group-hover:text-orange-400" />
                  </h2>
                  <p className="text-white text-sm">{blog.description}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
