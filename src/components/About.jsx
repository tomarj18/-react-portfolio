import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCloud, FaPython, FaLock, FaCode } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiFigma, SiExpress, SiVite, SiRender, SiVercel, SiNetlify, SiGithub, SiInsomnia, SiHtml5, SiTailwindcss, SiStripe } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const About = () => {
  const skillCategories = [
    {
      category: "🗣 Coding Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCode />, color: "text-blue-500" },
        { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
      ],
    },
    {
      category: "💻 Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "text-blue-400" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
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
        { name: "Stripe", icon: <SiStripe />, color: "text-purple-400" },
        { name: "JWT Auth", icon: <FaLock />, color: "text-pink-400" },
        { name: "EmailJS", icon: <FaCloud />, color: "text-red-400" },
      ],
    },
    {
      category: "☁️ Cloud & Deployment",
      skills: [
        { name: "Vercel", icon: <SiVercel />, color: "text-white" },
        { name: "Render", icon: <SiRender />, color: "text-blue-400" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-teal-400" },
        { name: "MongoDB Atlas", icon: <SiMongodb />, color: "text-green-500" },
        { name: "Cloudinary", icon: <FaCloud />, color: "text-blue-300" },
      ],
    },
    {
      category: "🛠 Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
        { name: "GitHub", icon: <SiGithub />, color: "text-white" },
        { name: "VS Code", icon: <VscCode />, color: "text-blue-500" },
        { name: "Insomnia", icon: <SiInsomnia />, color: "text-purple-400" },
        { name: "Framer Motion", icon: <FaDatabase />, color: "text-pink-400" },
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
              Rooted in over ten years of business operations, customer support, and client-facing experience, my transition into technology was driven by a desire to solve problems more effectively and create systems that help people work smarter.
            </p>
            <p className="text-blue-300 text-lg mb-4 leading-relaxed font-medium">
              Through hands-on development projects, I have built and deployed full-stack applications, integrated APIs, designed user interfaces, and developed solutions that strengthened my understanding of how technology works behind the scenes. These experiences gave me a strong technical foundation while reinforcing my passion for solving real-world challenges.
            </p>
            <p className="text-blue-300 text-lg mb-4 leading-relaxed font-medium">
              What sets me apart is my ability to connect technology with business needs. My experience across healthcare, wellness, operations, and customer-facing environments allows me to approach problems from both the technical and human perspective. Whether troubleshooting systems, improving workflows, documenting processes, or supporting users, I focus on creating solutions that are practical, scalable, and easy to use.
            </p>
            <p className="text-blue-300 text-lg mb-4 leading-relaxed font-medium">
              I am passionate about technology, AI, and digital systems that help people navigate their work and lives more effectively. I believe technology should create clarity, reduce friction, and empower people to do their best work.
            </p>
            <p className="text-white text-lg mb-4 leading-relaxed font-bold">
              I build with purpose, discipline, and heart.
            </p>
          </div>

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