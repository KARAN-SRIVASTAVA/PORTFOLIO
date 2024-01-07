import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  web_development,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  password_generator,
  nodejs,
  mongodb,
  git,
  next,
  iBlog,
  parallax,
  competitive_programming,
  shopping_cart,
  threejs,
  github,
  link,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Programmer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "",
    icon: web_development,
    iconBg: "#383E56",
    date: "Sep 2022 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Managed version control with Git and focused on web performance and security.",
      "Kept up-to-date with the latest web development trends and technologies for continuous improvement.",
      "develop different web applications and websites like - ShoppingCart, Password Generator, iBlog, Parallax Effect etc.",
    ],
  },
  {
    title: "Competitive Programming",
    company_name: "",
    icon: competitive_programming,
    iconBg: "#383E56",
    date: "March 2022 - Now",
    points: [
      "Solve 3000+ problems on Various Online Platforms",
      "Participated in 140+ online Contests",
      "Solve 950+ problems on Codeforces",
      "Solve 350+ problems on Codechef",
      "Solve 550+ problems on Geeks For Geeks",
      "Solve 750+ problems on Code Studio",
      "Solve 180+ problems on LeetCode",
      "Max. CodeChef Rating - 1907 (4 star) under handle",
      " Max. CodeForces Rating - 1578 (Specialist) under handle",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Karan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shopping Cart",
    description: `A ReactJS project that implements a virtual shopping cart, allowing users to add, remove, and modify items in their cart
        while dynamically updating the total cost.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopping_cart,
    source_code_link: "https://github.com/KARAN-SRIVASTAVA/SHOPPING_CART",
    link: link,
    deploy_link: "https://shopping-cart037.netlify.app/",
  },
  {
    name: "Password Generator",
    description: `A project that utilizes HTML, CSS, and JavaScript to generate random and secure passwords with
        customizable options such as length and character types.`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: password_generator,
    source_code_link: "https://github.com/KARAN-SRIVASTAVA/Password-Generator",
    link: link,
    deploy_link: "https://karan-srivastava.github.io/Password-Generator/",
  },
  {
    name: "iBlog",
    description: `A place where anyone can share their thoughts and ideas on lots of different topics. I created this to make a welcoming space for people to talk about what matters to them.`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: iBlog,
    source_code_link: "https://github.com/KARAN-SRIVASTAVA/Responsive-Blogs",
    link: link,
    deploy_link: "https://karan-srivastava.github.io/Responsive-Blogs/",
  },
  {
    name: "Parallax Effect",
    description: `A Project that creates an illusion of depth and movement where the background of a page moves slower than the foreground content. This contrast in speed creates a 3D effect.`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: parallax,
    source_code_link: "https://github.com/KARAN-SRIVASTAVA/Parallax",
    link: link,
    deploy_link: "https://karan-srivastava.github.io/Parallax/",
  },
];

export { services, technologies, experiences, testimonials, projects };
