import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saurabh Chauhan",
  initials: "SC",
  url: "https://www.linkedin.com/in/saurabhchauhan2000/",
  location: "India",
  description:
    "Software Engineer. I help you turn ideas into seamless digital experiences.",
  summary:
    "I'm a Software engineer who loves turning ideas into real-world solutions through clean, efficient code. I’m constantly exploring new tools and technologies to grow as a developer. Outside of coding, I enjoy exploring new ideas, staying curious, and finding inspiration in everyday life. For me, it’s all about progress, balance, and enjoying the journey.",
  avatarUrl: "/my-profile-pic.png",
skills: [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "C/C++",
  "Java",
  "Python",
  "React.js",
  "Next.js",
  "MongoDB",
  "SQL",
  "Firebase",
  "Upstash (Redis)",
  "Node.js",
  "Express.js",
  "REST APIs",
  "GraphQL",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "AWS",
  "Docker",
  "Git",
  "GitHub",
  "Cursor",
  "VS Code"
]

,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "saurabh20002004@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Saurabh-git-hub",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saurabhchauhan2000/",
        icon: Icons.linkedin,

        navbar: true,
      },
    
      // email: {
      //   name: "Send Email",
      //   url: "gaurav.cloud000@gmail.com",
      //   icon: Icons.email,

      //   navbar: true,
      //   // navbar: false,
      // },
    },
  },

  // work: [
  //   {
  //     company: "Shiwansh Solutions",
  //     // href: "Shiwansh Solutions",
  //     badges: [],
  //     // location: "Remote",
  //     title: "DevOps Engineer Intern",
  //     logoUrl: "/shiwansh_solutions_logo.png",
  //     start: "August 2025",
  //     end: "Present",
  //     description:
  //       "Assisted in designing and automating CI/CD pipelines using Jenkins for React and .NET applications, streamlining deployments and reducing manual intervention. Deployed and managed containerized applications using Docker and Kubernetes, ensuring scalable, consistent environments across development and production stages.",
  //   },
  //   {
  //     company: "HopingMinds",
  //     badges: [],
  //     // href: "HopingMinds",
  //     // location: "Remote",
  //     title: "Cloud Computing Intern",
  //     logoUrl: "/hoping_minds_logo.png",
  //     start: "January 2024",
  //     end: "June 2024",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  // ],

  // education: [
  //   {
  //     school: "Chitkara University",
  //     // href: "Chitkara University",
  //     degree: "Bachelor of Technology in Information Technology",
  //     logoUrl: "/Chitkara_logo.png",
  //     start: "June 2020",
  //     end: "August 2024",
  //   },

  // ],
  // Certifications: [
  //   {
  //     school: "AWS Certified Solutions Architect – Associate",
  //     href: "https://www.credly.com/badges/1cf94909-a00e-4570-991c-88efd994a773/public_url",
  //     degree: "Earners of this certification have a comprehensive understanding of AWS services and technologies.",
  //     logoUrl: "/AWS.png",
  //     start: "May 2025",
  //     end: "May 2028",
  //   },

  // ],

  
  projects: [
    {
      title: "Food Order Web App",
      href: "https://food-order-app-2-saurabh-git-hubs-projects.vercel.app/",
      dates: "Jun 2025",
      active: true,
      description:
        "A modern food ordering platform where users can explore menus, add items to their cart, and place orders seamlessly. Built with a clean UI, responsive design, and smooth user experience, it demonstrates core web development skills while replicating a real-world food delivery system.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Clerk",
        "HyGraph",
        "React Query",
        "PayPal",
      ],
      links: [
        {
          type: "Website",
          href: "https://food-order-app-2-saurabh-git-hubs-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Saurabh-git-hub/food-order-app-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/food-order-app.mp4",
    },
    {
      title: "Product Filtering System",
      href: "https://github.com/Saurabh-git-hub/Product-Filtering-System",
      dates: "Jan 2025",
      active: true,
      description:
        "A dynamic web application that allows users to seamlessly browse and filter products based on specific criteria. Built with a clean interface and responsive design, it ensures a smooth user experience while showcasing the power of modern web development practices",
      technologies: [
        "Next.js",
        "TypeScript",
        "React.js",
        "Node.js",
        "Upstash (Redis)",
        "TailwindCSS",
        "React Query",
        "Zod",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Saurabh-git-hub/Product-Filtering-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Filtering-System.mp4",
    },
    {
      title: "Chat With Website",
      href: "https://github.com/Saurabh-git-hub/chat-with-website",
      dates: "Dec 2024",
      active: true,
      description:
        "An interactive web application that enables users to chat directly with any website and retrieve meaningful insights in real-time. Designed with a clean UI, responsive design, and seamless integration, it showcases modern web development skills while replicating real-world use cases of AI-powered web interaction",
      technologies: [
        "Next.js",
        "Typescript",
        "React.js",
        "Node.js",
        "Upstash (Redis)",
        "TailwindCSS",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Saurabh-git-hub/chat-with-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/chat-with-website.mp4",
    },
    {
      title: "Real Time Voting Web App",
      href: "https://github.com/Saurabh-git-hub/real-time-voting-app",
      dates: "Nov 2024",
      active: true,
      description:
        "A real-time voting application that allows users to create polls, cast votes instantly, and see live results with dynamic updates. Built with a modern tech stack, it ensures seamless interactivity, scalability, and an engaging user experience for quick decision-making and collaborative participation.",
      technologies: [
        "Next.js",
        "Typescript",
        "React.js",
        "Node.js",
        "Visx Word Cloud",
        "TailwindCSS",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Saurabh-git-hub/real-time-voting-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/real-time-voting-app.mp4",
    },
  ],
} as const;
