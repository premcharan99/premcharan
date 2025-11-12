import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Prem Charan Gudipudi",
  initials: "PC",
  url: "https://premcharan.dev",
  location: "Eluru, Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Eluru",
  description:
    "Computer Science student and freelancer skilled in building web applications with Python, Java, and React. Passionate about solving real-world problems and delivering solutions for local businesses.",
  summary:
    "I’m a third-year B.Tech Computer Science student at KL University, with a CGPA of 9.6/10, ranking in the top 10% of my 2026 batch. As a freelancer, I’ve built over 10 websites for local vendors and small businesses",
  avatarUrl: "/pc1.png",
  skills: [
   
    "Java",
    "SQL",
    "React",
    "Node.js",
    "Spring Boot",
    
    "NLTK",
    "AWS",
    
    "Supabase",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    
    "Git",
    "Figma",
   
    "Agile",
    "Scrum",
    "Prompt Engineering",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "gpremcharan999@gmail.com",
    tel: "+919032498549",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/premcharan99",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prem-charan-gudipudi-a621a7256/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:gpremcharan999@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  resume: {
    name: "View Resume",
    url: "https://www.linkedin.com/in/prem-charan-gudipudi-a621a7256/",
    icon: FileTextIcon,
  },
  work: [
    {
      company: "Eisystem Technologies",
      href: "#",
      badges: [],
      location: "Remote",
      title: " Frontend Developer",
      logoUrl: "/eisystem.png",
      start: "January 2024",
      end: "March 2024",
      description:
"Designed a clean, user-friendly full-page UI in Figma and developed a responsive frontend for a Machine Learning project, ensuring seamless integration with backend APIs. Collaborated within an Agile team, actively participating in daily stand-ups and code reviews to deliver high-quality, efficient solutions",    },
  ],
  education: [
    {
      school: "KL University",
      href: "https://www.kluniversity.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/klu.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Student Analyzer",
      href: "https://studentanalyzerst.vercel.app/",
      dates: "2023 - 2024",
      active: true,
      description:
        "A web platform that analyzes resumes and job descriptions by extracting keywords, achieving 87% accuracy in matching candidates to roles. Features a responsive React frontend and Python backend with Supabase for real-time data storage.",
      technologies: ["React", "Python", "Supabase"],
      links: [
        {
          type: "Website",
          href: "https://studentanalyzerst.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/premcharan99/AI-JOB-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/careerai.png",
      video: "",
    },
    {
      title: "SpotAT",
      href: "https://spotat-prebooking-7hnddqbq1-prems-projects-c1a36f12.vercel.app",
      dates: "2023 - 2024",
      active: true,
      description:
        "A user-friendly app for pre-booking restaurant seats and browsing menus from home, minimizing wait times and waiter interactions. Built with a React frontend, MySQL database, and ChatGPT API for enhanced user interaction.",
      technologies: ["React", "MySQL", "ChatGPT API"],
      links: [
        {
          type: "Website",
          href: "https://spotat-prebooking-7hnddqbq1-prems-projects-c1a36f12.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/premcharan99/prebookingres",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/spotat.png",
      video: "",
    },
    {
      title: "Instant Web Glimpse Search",
      href: "https://instant-web-glimpse-search.vercel.app",
      dates: "2023 - 2024",
      active: true,
      description:
        "A Google-like search engine prototype with a sleek interface, supporting real-time web scraping and efficient query processing. Developed using React for the frontend and Python for backend search logic.",
      technologies: ["React", "Python"],
      links: [
        {
          type: "Website",
          href: "https://instant-web-glimpse-search.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/premcharan99/instant-web-glimpse-search",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/minigoogle.png",
      video: "",
    },
    {
      title: "Mental Health Business Model Recommender",
      href: "https://github.com/premcharan99/Mental-Health-Business-Model-Recommender",
      dates: "2023 - 2024",
      active: true,
      description:
        "A system that analyzes user attributes to recommend tailored mental health business models, designed to support wellness initiatives. Developed using Python for data analysis and model generation.",
      technologies: ["Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/premcharan99/Mental-Health-Business-Model-Recommender",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mentalhealth.png",
      video: "",
    },
    {
      title: "Savithru Kumar Seva Portal",
      href: "https://savithru-seva-portal.vercel.app",
      dates: "2023 - 2024",
      active: true,
      description:
        "A portfolio website for a local business, designed to showcase services and engage customers with a clean, professional interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://savithru-seva-portal.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/premcharan99/savithru-kumar-seva-portal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/seva.png",
      video: "",
    },
    {
      title: "AITools Directory",
      href: "https://instant-web-glimpse-search-okvd.vercel.app/",
      dates: "2023 - 2024",
      active: true,
      description:
        "A comprehensive directory for discovering AI tools and agents, widely used by tech enthusiasts to explore new technologies.",
      technologies: ["React", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://instant-web-glimpse-search-okvd.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/premcharan99/aitools",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aitools.png",
      video: "",
    },
    {
      title: "Fireworks Vendor Website",
      href: "https://fireworks-mlb8rsrc5-prems-projects-c1a36f12.vercel.app/",
      dates: "2023 - 2024",
      active: true,
      description:
        "A custom website for a local fireworks vendor, designed to showcase products and streamline customer inquiries.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://fireworks-mlb8rsrc5-prems-projects-c1a36f12.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/premcharan99/fireworks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fireworks.png",
      video: "",
    },
    {
      title: "DeepSeek Voice AI",
      href: "https://github.com/premcharan99/deepseekvoiceAI",
      dates: "2023 - 2024",
      active: true,
      description:
        "A voice-controlled personal assistant powered by DeepSeek, enabling users to interact seamlessly via voice commands.",
      technologies: ["Python", "DeepSeek API", "React"],
      links: [
        {
          type: "Source",
          href: "https://github.com/premcharan99/deepseekvoiceAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/deepseek.png",
      video: "",
    },
    {
      title: "StudentBuddy",
      href: "https://github.com/premcharan99/studentbuddy",
      dates: "2022 - 2023",
      active: true,
      description:
        "A platform for discovering college events, helping students stay updated on campus activities. My first project, showcasing early development skills.",
      technologies: ["JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/premcharan99/studentbuddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/studentbuddy.png",
      video: "",
    },
    {
      title: "SecureMessageTransfer",
      href: "https://securemessagetransfer.vercel.app",
      dates: "2023 - 2024",
      active: true,
      description:
        "A secure messaging platform with 128-bit end-to-end encryption, capable of transferring over 10,000 messages per second.",
      technologies: ["JavaScript", "Node.js", "Encryption Libraries"],
      links: [
        {
          type: "Website",
          href: "https://securemessagetransfer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/premcharan99/securemessagetransfer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/securemessage.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Nokia Accelerate Her in Tech Hackathon",
      dates: "2024",
      location: "Online",
      description:
        "Competed among top participants, solving real-world problems with innovative tech solutions, achieving Top 2% finalist status.",
      image: "/nokia.png",
      links: [],
      win: "Top 2% Finalist",
    },
    {
      title: "NCC Camp Leadership",
      dates: "2020",
      location: "Eluru, Andhra Pradesh, India",
      description:
        "Led a team and earned 30+ credits in a National Cadet Corps (NCC) camp, demonstrating leadership, teamwork, and organizational skills.",
      image: "/ncc.png", // Replace with the actual image path if available
      links: [],
      win: "Earned 30+ Credits",
    },
  ],
} as const;
