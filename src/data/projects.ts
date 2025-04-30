import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Kullu Creations",
    description: "An e-commerce platform for Himachali products",
    image: "kullu.png",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/AyushiChaudhary05/kullu_creation",
    live: "https://react-project-phi-orcin.vercel.app/",
    details: {
      problem: "Local Himachali products lacked digital presence and accessibility",
      solution: "Developed a full-stack e-commerce platform to connect local artisans with customers",
      features: [
        "User authentication",
        "Admin product management",
        "Order placement & tracking",
        "Responsive UI for all devices"
      ],
      impact: "Empowered local businesses by expanding their reach online"
    },
  },
  {
    title: "Fit Fusion",
  description: "A responsive fitness landing page website",
  image: "fitfusion.png",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/AyushiChaudhary05/Int-219",
  live: "https://fitness-website-hvsi.onrender.com/",
  details: {
    problem: "Gyms and fitness centers need a professional online presence to attract members",
    solution: "Created a modern landing page showcasing gym facilities, plans, and features",
    features: [
      "Responsive design",
      "Interactive navigation",
      "Membership plans section",
      "Visual appeal with hero banners"
    ],
    impact: "Enhanced gym’s online reach and user engagement"
  },
  },
  {
    title: "Scientific Calculator",
  description: "A GUI-based scientific calculator built using Python and Tkinter.",
  image: "calculator.jpg",
  tech: ["Python", "Tkinter", "Math Module"],
  github: "https://github.com/jaskirat-13/scienCalculator/",
  live: "",
  details: {
    problem: "Students and professionals need a quick tool to perform both basic and scientific calculations.",
    solution: "Designed a GUI-based calculator with operations including trigonometric, logarithmic, factorial, and arithmetic functionalities.",
    features: [
      "Basic arithmetic operations",
      "Trigonometric functions (sin, cos, tan)",
      "Logarithmic and exponential calculations",
      "Square, square root, power and factorial computations"
    ],
    impact: "Provides a lightweight and easy-to-use calculator for quick scientific calculations."
  },
  }
];
