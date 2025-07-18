// import company1 from "../../public/c1.jpeg";
// import company2 from "../../public/c2.jpeg";
// import company3 from "../../public/c3.jpeg";
// import company4 from "../../public/c4.jpeg";

import xClone from '../../public/x-clone.png';
import project2 from "../../public/p2.jpg";
// import project3 from "../../public/project3.";
// import project4 from "../../public/project4.jpeg";
import lsc from "../../public/LSC.png"

export const PROFILE = {
  name: "Patrick Bravo",
  city: "Houston, Texas 🇺🇸",
  greet: "Nice to Meet you!",
};

export const PROJECT = [
  {
    name: "X (Twitter) clone ",
    image: xClone,
    url: "https://x-project-clone-ascw.vercel.app/",
    technologies: ['React', 'TypeScript', 'Axios', 'Auth','MongoDB']
  },
  {
    name: "E-commerce site",
    image: project2,
    url: "https://dash.infinityfree.com/accounts/if0_39503840/domains/components-e-commerce.infy.uk",
    technologies: ['PHP', 'JavaScript', 'Ajax', 'tailwind','Mysql']
  },
];

export const SKILLS = [
  "React, Angular, Vue.js",
  "Node.js, Express, Django",
  "PostgreSQL, MySQL, MongoDB, and Firebase",
  "RESTful and CRUD APIs",
  "AWS, Azure, and Google Cloud",
];

export const EXPERIENCES = [
  {
    img: lsc,
    year: "2023 - Present",
    role: "Computer science mentor",
    company: "Leyton Sixth Form college",
    description: `Helped guide students with creating projects for their coursework. Guiding students to solutions for their courseworks ranging from bookings website, to games or apps`,
    technologies: ["PHP","Python", "Javascript", "MySQL", "C+"],
  },
  // {
  //   img: project2,
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   img: project3,
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   img: project4,
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];
