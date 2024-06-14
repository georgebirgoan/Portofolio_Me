import './about.scss';
import aboutImg from '../../img/me2.png';

export default function About() {
  return (
    <div id='about' className='aboutContainer'>
      <div className="titleAbout">
        <h1>About Me</h1>
      </div>
      <div className="mainContainer">
        <div className="imgAbout">
          <img src={aboutImg} alt="me" />
        </div>
        <div className="rightAbout">
          <div className="textAbout">
          <h1>
            I'm a front-end web developer currently in my second year at Stefan cel Mare University of Suceava. 
            My journey into programming began out of curiosity and the challenge of constantly pushing the 
            boundaries in various fields. This curiosity quickly turned into a passion as 
            I discovered the limitless possibilities of web development. 
            I thrive on creating innovative and user-friendly web applications,
             always striving to improve and learn new things.
          </h1>

          </div>
          <div className="butonCv">
            <a className='bt' href='/Cv_Folder/CV George1.docx' download>Download CV</a>          </div>
        </div>
      </div>
    </div>
  );
}
