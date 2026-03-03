import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-14"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Top layout */}
        <div className="grid md:grid-cols-12 gap-8 mb-10 items-start">

          {/* Brand (wider) */}
          <div className="md:col-span-6">
            <h3 className="text-2xl font-bold mb-3 tracking-wide">
              Shaniece Dunkley
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed max-w-md">
              Building purposeful, scalable web applications that bridge
              business strategy and technical innovation.
            </p>
          </div>

          {/* Navigation (moved right + row links) */}
          <div className="md:col-span-3 md:justify-self-end md:ml-6 flex flex-col justify-start">
            <h3 className="text-xl font-bold mb-3 tracking-wide">
              Navigation
            </h3>

            <ul className="space-y-0.5 font-medium leading-6">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Connect (kept close) */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-3 tracking-wide">
              Connect
            </h3>

            <div className="flex items-center space-x-6 mb-3 text-2xl">
              <a
                href="https://github.com/tomarj18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shaniece-dunkley/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:shanice.dunkley@outlook.com"
                className="hover:text-blue-400 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            <p className="text-gray-300 font-medium">
              shanice.dunkley@outlook.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-gray-400 text-sm font-medium">
            © {currentYear} Shaniece Dunkley. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;