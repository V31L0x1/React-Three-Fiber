import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Workshops and Training",
    icon: web,
  },
  {
    title: "Seminars and Guest Lectures",
    icon: mobile,
  },
  {
    title: "Hands-on Activities",
    icon: backend,
  },
  {
    title: "Capture the Flag (CTF) Challenges",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Hacnic in MLRIT",
    company_name: "Hacking Club",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2022",
    points: [
      "Commenced on April 21, 2022, Hacnic in MLRIT is an enthusiastic hacking club at MLR Institute of Technology dedicated to exploring the realm of cybersecurity and ethical hacking.",
      "Our mission is to foster a collaborative environment where aspiring hackers and cybersecurity enthusiasts can come together to learn, share ideas, and develop their expertise.",
      "By actively participating in Capture The Flag (CTF) competitions, hackathons, and cybersecurity conferences, we aim to enhance our practical knowledge and showcase our skills.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Joining the hacking club was a game-changer for me. Highly recommended!",
    name: "Tarun Kumar",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Being a part of the hacking club has opened up new horizons for me. Truly grateful!",
    name: "Hari Charan",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I was impressed by the professionalism and passion of the hacking club members. Kudos to the entire team!",
    name: "Surya",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "SCS",
    description:
      "",
    tags: [
      {
        name: "security",
        color: "blue-text-gradient",
      },
      {
        name: "vapt",
        color: "green-text-gradient",
      },
      {
        name: "ctf",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "",
  },
  {
    name: "BCPA",
    description:
      "",
    tags: [
      {
        name: "security",
        color: "blue-text-gradient",
      },
      {
        name: "bitcoin",
        color: "green-text-gradient",
      },
      {
        name: "cryptography",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    name: "CYBER-WEB",
    description:
      "",
    tags: [
      {
        name: "web-security",
        color: "blue-text-gradient",
      },
      {
        name: "vapt",
        color: "green-text-gradient",
      },
      {
        name: "ctf",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
