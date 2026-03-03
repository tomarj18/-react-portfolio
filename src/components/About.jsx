import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCloud } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiFigma, SiExpress, SiVite, SiRender, SiVercel, SiNetlify, SiGithub, SiInsomnia, SiHtml5, SiCss3 } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const About = () => {
  const skillCategories = [
    {
      category: "💻 Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "text-blue-400" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
        { name: "Figma", icon: <SiFigma />, color: "text-purple-400" },
        { name: "Vite", icon: <SiVite />, color: "text-purple-500" },
      ],
    },
    {
      category: "🖥 Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "REST APIs", icon: <FaDatabase />, color: "text-yellow-500" },
        { name: "EmailJS", icon: <FaCloud />, color: "text-red-400" },
      ],
    },
    {
      category: "☁️ Cloud & Deployment",
      skills: [
        { name: "Render", icon: <SiRender />, color: "text-blue-400" },
        { name: "Vercel", icon: <SiVercel />, color: "text-white" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-teal-400" },
        { name: "MongoDB Atlas", icon: <SiMongodb />, color: "text-green-500" },
      ],
    },
    {
      category: "🛠 Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
        { name: "GitHub", icon: <SiGithub />, color: "text-white" },
        { name: "VS Code", icon: <VscCode />, color: "text-blue-500" },
        { name: "Insomnia", icon: <SiInsomnia />, color: "text-purple-400" },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20"
      style={{ background: "linear-gradient(135deg, #070f6b 0%, #012d5f 50%, #1a237e 100%)" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            About Me
          </h2>

          {/* Bio Text */}
          <div
            className="mx-auto mb-16 p-8 rounded-2xl"
            style={{
             border: "2px solid rgba(2, 38, 82, 0.6)",
             boxShadow: "0 0 30px rgba(96, 165, 250, 0.2)",
             maxWidth: "1000px",
             background: "#1f2937",
         }}
          >
            <h3 className="text-white text-lg mb-4 leading-relaxed font-bold">
             The Story Behind the Code
            </h3>
            <p className="text-blue-300 text-lg mb-4 leading-relaxed font-medium">
              Rooted in over seven years of business and client operations experience, my transition into technology is built on strategy, structure, and a drive to create meaningful, scalable solutions.
            </p>
            <p className="text-blue-300 text-lg mb-4 leading-relaxed font-medium">
              I have built and deployed multiple projects including a full-stack bookstore application with CRUD operations, a React weather application powered by the OpenWeather API, a full-stack React and Express todo application, a portfolio website with EmailJS integration, UI/UX design projects in Figma, and I am currently developing a full-stack e-commerce capstone using React, Node.js, MongoDB, and more. These projects reflect my growing skills across frontend development, backend logic, API integration, database design, and UI/UX planning. My tech stack continues to expand as I do.
            </p>
            <p className="text-blue-300 text-lg mb-4 leading-relaxed font-medium">
              What makes me different is that I don't just write code. I understand business. My experience in healthcare, spa operations, marketing systems, and client relationships taught me how to solve real problems, communicate clearly, and create solutions that improve both customer experience and business efficiency.
            </p>
            <p className="text-blue-300 text-lg mb-4 leading-relaxed font-medium">
              I am seeking a role where I can grow, contribute, and continue building strong systems. I bring passion into everything I do, and I am always open to learning and increasing my knowledge and skills in the world of technology. I am currently expanding my expertise in Python, AI, networking, cloud technologies, and continuing education beyond formal programs because I strive every day to be better than my previous self.
            </p>
            <p className="text-white text-lg mb-4 leading-relaxed font-bold">
              I build with purpose, discipline, and heart.
            </p>
          </div>

          {/* Skills by Category */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl"
                style={{
                  border: "1px solid rgba(96, 165, 250, 0.4)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <h4 className="text-white font-bold text-lg mb-6">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-6">
                  {cat.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <div className={`text-4xl ${skill.color} drop-shadow-lg`}>
                        {skill.icon}
                      </div>
                      <span className="text-gray-200 text-xs font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;