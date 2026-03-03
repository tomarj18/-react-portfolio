import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
  "an Application Developer",
  "Building Full Stack Solutions",
  "a Cloud & AI Enthusiast"
];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
         Hi, I'm <span className="text-blue-400">Shaniece Dunkley</span>
        </h1>
          <h2 className="text-2xl md:text-4xl mb-8 h-16">
            I am <span className="text-blue-400">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

         <div className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300 space-y-4">
  
           <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Building purposeful, scalable web applications that bridge business
            strategy with technical innovation, while expanding into cloud and
            AI-driven technologies.
          </p>
         </div>


          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/tomarj18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shaniece-dunkley/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:shaniece.dunkley@outlook.com"
              className="text-3xl hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
