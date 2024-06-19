import nextjs from '../src/img/nextjs.png'


const skills = [
  {
    icon: "bx bxl-html5",
    title: "FrontEnd",
    skills: [
      { name: "HTML 5", icon: "bx bxl-html5", color: "#E34F26", type: "class" },
      { name: "CSS", icon: "bx bxl-css3", color: "#1572B6", type: "class" },
      { name: "Chakra", icon: "bx bx-cloud-lightning", color: "#40E0D0", type: "class" },
      { name: "Bootstrap", icon: "bx bxl-bootstrap", color: "#8806CE", type: "class" },
      { name: "JavaScript", icon: "bx bxl-javascript", color: "#F7DF1E", type: "class" },
      { name: "TypeScript", icon: "bx bxl-typescript", color: "#3178C6", type: "class" },
      { name: "React", icon: "bx bxl-react", color: "#61DAFB", type: "class" },
      { name: "Redux", icon: "bx bxl-redux", color: "#764ABC", type: "class" },
      { name: "UI/UX", icon: "bx bxs-paint", color: "#5AA9E6", type: "class" },
      { name: "Nextjs", icon:nextjs , color: "#4F4F4F", type: "image" },
    ],
  },
  
  {
    icon: "bx bx-code-alt",
    title: "BackEnd",
    skills: [
      { name: "NodeJS", icon: "bx bxl-nodejs", color: "#339933", type: "class" },
      { name: "Express", icon: "bx bx-code-alt", color: "#000000", type: "class" },
      { name: "MongoDB", icon: "bx bxl-mongodb", color: "#47A248", type: "class" },
      { name: "Mongoose", icon: "bx bx-leaf", color: "#800000" , type: "class"},
      { name: "PostgreSql", icon: "bx bxl-postgresql", color: "#6596a9" , type: "class"},
      { name: "RestAPI", icon: "bx bx-network-chart", color: "#E34F26", type: "class" },
    ],
  },
  {
    icon: "bx bx-slideshow",
    title: "Tools",
    skills: [
      { name: "Git", icon: "bx bxl-git", color: "#F05032", type: "class" },
      { name: "GitHub", icon: "bx bxl-github", color: "#181717", type: "class" },
      { name: "VSCode", icon: "bx bxl-visual-studio", color: "#007ACC", type: "class" },
      { name: "Postman", icon: "bx bxl-postman", color: "#FF6C37", type: "class" },
      { name: "Firebase", icon: "bx bxl-firebase", color: "#ffb703", type: "class" },
      { name: "AWS", icon: "bx bxl-aws", color: "#fb8500", type: "class" },
    ],
  },
];

export default skills;
