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
    description: "Developed a full-stack e-commerce platform featuring secure user authentication, role-based admin access, product management, shopping cart functionality, Stripe payment processing, and real-time order management. The platform enables customers to browse products, manage purchases, and track orders, while providing administrators with tools to monitor sales, manage inventory, process shipments, and oversee customer transactions.",
    image: kindledImg,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary", "JWT"],
    category: "Full Stack",
    github: "https://github.com/tomarj18/kindled-frontend",
    demo: "https://kindled-frontend.vercel.app"
  },
  {
    id: 2,
    title: "React Todo App",
    description: "Developed a full-stack task management application that enables users to create, organize, update, and track tasks through a responsive React interface connected to a RESTful backend API",
    image: todoApp,
    technologies: ["React", "Express", "Node.js", "REST API"],
    category: "Full Stack",
    github: "https://github.com/tomarj18",
    demo: "https://react-todo-project-lemon.vercel.app"
  },
  {
    id: 3,
    title: "Bookstore App",
    description: "Developed a full-stack bookstore application that allows users to manage book inventories through a complete CRUD workflow, demonstrating API integration, dynamic rendering, and user-focused application design.",
    image: bookstore,
    technologies: ["JavaScript", "REST API", "HTML5", "CSS3"],
    category: "Web Development",
    github: "https://github.com/tomarj18",
    demo: "https://amazing-sunflower-0d3fb4.netlify.app/"
  },
  {
    id: 4,
    title: "React Weather App",
    description: "Built a responsive weather application that provides real-time weather conditions and forecasts through API integration, while enhancing user experience with dynamic theme changes based on current weather conditions.",
    image: weatherApp,
    technologies: ["React", "OpenWeather API", "JavaScript", "CSS3"],
    category: "API Integration",
    github: "https://github.com/tomarj18/react-weather-app",
    demo: "https://react-weather-app-fw92.onrender.com"
  },
  {
    id: 5,
    title: "DOM Portfolio",
    description: "Designed and developed an interactive portfolio website showcasing front-end development skills, featuring dynamic user interactions, form validation, automated email functionality, and responsive design principles.",
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