import {
  frontdev,
  backend,
  creator,
  pentest,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  kali,
  git,
  burp,
  wireshark,
  meta,
  sph,
  future,
  shopify,
  sphf,
  passchecker,
  medicare,
  nmap,
  twriter,
  dforensic,
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
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Penetration Tester",
    icon: pentest,
  },
  {
    title: "Frontend Developer",
    icon: frontdev,
  },
  {
    title: "Digital Forensic Analyst",
    icon: dforensic,
  },
  {
    title: "Technical Writer",
    icon: twriter,
  },
];

const technologies = [
  {
    name: "Kali Linux",
    icon: kali,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Burp Suite",
    icon: burp,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
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
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Tech Attachee",
    company_name: "Swahilipot Hub",
    icon: sph,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - present",
    points: [
      "Built and deployed full-stack web applications using React (Vite), Strapi CMS, TailwindCSS, and deployment platforms like Vercel and Render.",
      "Collaborated in a dynamic tech ecosystem, engaging with cross-functional teams to deliver innovative digital solutions.",
      "Implemented CI/CD workflows with GitHub Actions, streamlining development and deployment processes.",
      "Assisted in conducting vulnerability assessments and incident response using tools like OWASP ZAP, Burp Suite, and Splunk.",
      "Actively participated in tech and entrepreneurship events hosted by the Hub, enhancing my understanding of digital innovation and community-driven impact."
    ],
  },  
  {
    title: "Cyber Security Intern",
    company_name: "Future Interns",
    icon: future,
    iconBg: "#383E56",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Conducted security testing on sample web applications using tools like OWASP ZAP, Burp Suite, and SQLMap to identify vulnerabilities including SQL injection and XSS.",
      "Led phishing simulation campaigns using Gophish and SET to assess employee awareness and improve organizational security training programs.",
      "Performed Wi-Fi network security assessments using Wireshark, Aircrack-ng, and Nmap, identifying weak passwords, open ports, and unauthorized devices.",
      "Delivered detailed security reports outlining identified vulnerabilities, success metrics, and actionable mitigation strategies.",
      "Gained hands-on experience in ethical hacking, penetration testing, social engineering, and network security best practices."
    ],
  }  
];

const educationTimeline = [
  {
    year: "Ongoing ...",
    institution: "Kabarak University",
    degree: "Bachelor of Science in Computer Security and Forensics",
  },
  {
    year: "2017 - 2020",
    institution: "Kwale High School",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
  },
  {
    year: "2008 - 2016",
    institution: "Eshu Primary School",
    degree: "Kenya Certificate of Primary Education (KCSE)",
  },
];


const projects = [
  {
    name: "SwahilipotHub",
    description:
      "Swahilipot Hub’s replica website – a seamless blend of technology, creativity, and innovation. This platform not only highlights the vibrant community and projects at SPH.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: sphf,
    source_code_link: "https://github.com/kingandrewmark/SwahilipotHub_Website",
  },
  {
    name: "PASSWORD CHECKER",
    description:
      "This GUI-based Password Strength Analyzer, built with Python and Tkinter, enables users to assess password strength based on various security criteria, generate strong & random...",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "hashlib",
        color: "pink-text-gradient",
      },
    ],
    image: passchecker,
    source_code_link: "https://github.com/Mwamtindi/FUTURE_CS_02",
  },
  {
    name: "MedicCare",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: medicare,
    source_code_link: "https://github.com/Mwamtindi/MedicCare",
  },
];

/**
 * @typedef {Object} Project
 * @property {string} name
 * @property {string} image
 * @property {string} blurImage
 * @property {string} description
 * @property {[string, string]} gradient
 * @property {string} url
 * @property {string[]} tech
 */

/** @type {Project[]} */
const PROJECTSS = [
  {
    name: "SwahilipotHub",
    image: "/projects/sphf.PNG",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Swahilipot Hub’s replica website – a seamless blend of technology, creativity, and innovation. This platform not only highlights the vibrant community and projects at SPH.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://swahilipot-hub-website007.vercel.app/",
    tech: ["javascript", "next", "tailwind"],
  },
  {
    name: "PASSWORD CHECKER",
    image: "/projects/passwd.PNG",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "This GUI-based Password Strength Analyzer, built with Python and Tkinter, enables users to assess password strength based on various security criteria, generate strong & random...",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/Mwamtindi/FUTURE_CS_02",
    tech: ["python", "hash", "tkinter"],
  },
  {
    name: "MedicCare",
    image: "/projects/medicare.PNG",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors.",
    gradient: ["#245B57", "#004741"],
    url: "https://medic-care-ten.vercel.app/",
    tech: ["typescript", "next", "tailwind"],
  },
  {
    name: "Finance SaaS Platform",
    image: "/projects/tindifin.PNG",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "A Finance SaaS Platform designed to centralize financial management for businesses and individuals. The platform provides tools for tracking income, expenses, and managing financial operations through real-time insights.",
    gradient: ["#003052", "#167187"],
    url: "https://tindifin-finance.vercel.app/",
    tech: ["typescript", "next", "tailwind",],
  },
];


export { services, technologies, experiences, educationTimeline, projects, PROJECTSS };
