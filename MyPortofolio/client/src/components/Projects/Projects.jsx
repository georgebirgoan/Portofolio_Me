import '../Projects/projects.scss';
import bugetTracker from '../../img/budget_poza.png';
import market from '../../img/market.png'
import gameProj from '../../img/proj3.png'
const projects = [
  {
    title: "Budget Tracker",
    description: "The Personal Budget Tracker project allows user account management, transaction organization, and visualization of income and expenses. It offers visual reporting, data export, notifications, and transaction automation for efficient budget management.",
    image: bugetTracker,
    link: "https://personal-budget-tracker-d.onrender.com"
  },


  {
    title: "Shooping Site",
    description: "The project is an e-commerce site featuring a range of products categorized by type, such as men's clothing and electronics. It includes adding items to the cart, product rating, and detailed product descriptions to enhance the shopping experience.",
    image:market, // Assumed path to your uploaded image
    link: "https://shooping-site.vercel.app/"
  },
  {
    title: "Game Platform",
    description: "This gaming platform offers users the ability to explore video games through an intuitive interface with advanced filtering and search functions. Users can sort games by platform, genre, popularity, ensuring they quickly and efficiently find their favorite games.",
    image: gameProj, // Assumed path to your uploaded image
    link: "https://game-proj-3gow.vercel.app/"
  }
];

export default function Projects() {
  return (
    <div id="projects" className='projectsContainer'>
      <h1>Projects</h1>
      <div className='projectsGrid'>
        {projects.map((project, index) => (
          <div key={index} className='projectCard'>
            <div className='projectImage'>
              <img src={project.image} alt={project.title} />
            </div>
            <div className='projectDetails'>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className='liveButton'>Live Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
