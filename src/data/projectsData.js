import kindledImg from '../assets/kindledstudio.png';
import domPortfolio from '../assets/portfoliodom.png';
import weatherApp from '../assets/WeatherApp.png';
import todoApp from '../assets/To-Doapp.png';
import bookstore from '../assets/Bookstore.png';
import figmaImg from '../assets/Figma.png';

export const projectsData = [
  {
    id: 1,
    title: "Kindled Paper Studio",
    description: "Full stack e commerce platform featuring JWT authentication, multi image product gallery, shopping cart, Stripe payment processing, Cloudinary image uploads, and an admin dashboard with real time order management.",
    image: kindledImg,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary", "JWT"],
    category: "Full Stack",
    github: "https://github.com/tomarj18/kindled-frontend",
    demo: "https://kindled-frontend.vercel.app"
  },
  {
    id: 2,
    title: "React Todo App",
    description: "Full stack todo application built with React frontend and Express backend, featuring complete task management with a RESTful API.",
    image: todoApp,
    technologies: ["React", "Express", "Node.js", "REST API"],
    category: "Full Stack",
    github: "https://github.com/tomarj18",
    demo: "https://react-todo-project-lemon.vercel.app"
  },
  {
    id: 3,
    title: "Bookstore App",
    description: "Full stack bookstore application with complete CRUD operations, including create, read, update, and delete books using a RESTful API with dynamic DOM rendering.",
    image: bookstore,
    technologies: ["JavaScript", "REST API", "HTML5", "CSS3"],
    category: "Web Development",
    github: "https://github.com/tomarj18",
    demo: "https://amazing-sunflower-0d3fb4.netlify.app/"
  },
  {
    id: 4,
    title: "React Weather App",
    description: "Real time weather application with dynamic day and night themes, location search, and current conditions powered by the OpenWeather API.",
    image: weatherApp,
    technologies: ["React", "OpenWeather API", "JavaScript", "CSS3"],
    category: "API Integration",
    github: "https://github.com/tomarj18/react-weather-app",
    demo: "https://react-weather-app-fw92.onrender.com"
  },
  {
    id: 5,
    title: "DOM Portfolio",
    description: "Interactive portfolio built with vanilla JavaScript featuring a typewriter effect, image gallery modal, EmailJS contact form with auto reply, real time form validation, and toast notifications.",
    image: domPortfolio,
    technologies: ["HTML5", "CSS3", "JavaScript", "EmailJS"],
    category: "Web Development",
    github: "https://github.com/tomarj18/portfolio-project",
    demo: "https://tomarj18.github.io/portfolio-project"
  },
  {
    id: 6,
    title: "ACE Figma UI UX Design",
    description: "Landing page UI and UX design for ACE, an AI powered investment platform, built in Figma with full page architecture including navigation, hero, benefits, features, and footer.",
    image: figmaImg,
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    category: "Design",
    github: "https://github.com/tomarj18",
    demo: "https://www.figma.com/design/hBmbWnX6666Iv0gsdSQW03/Untitled?node-id=0-1&t=N2tiQJeHkMXYkHCU-1"
  }
];

export const categories = ["All", "Web Development", "API Integration", "Full Stack", "Design"];