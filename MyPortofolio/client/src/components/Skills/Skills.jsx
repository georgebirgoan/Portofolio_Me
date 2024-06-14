import '../Skills/skills.scss';
import skills from '../../../utils/skills';

export default function Skills() {
  return (
    <div id="skills" className='skillsContainer'>
      <div className="titleSkill">
        <h1>My Skills</h1>
      </div>
      
      <div className="mainContainerSkills">
        {skills.map((skillSet, index) => (
          <div key={index} className="skillSet">

            <div className="title">
              <i className={skillSet.icon}></i>
              <h2>{skillSet.title}</h2>
              <div className="customLine"></div>
            </div>
            
            <div className="skillsList">
              {skillSet.skills.map((skill, i) => (
                <div key={i} className="skill" style={{ backgroundColor: skill.color }}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
