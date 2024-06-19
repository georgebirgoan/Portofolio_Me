import './hero.scss';
import main_img from '../../img/hero_img.jpg'
import { useEffect } from 'react';
import {handleScroll} from '../../../utils/handleScroll';



export default function Hero() {
  
  useEffect(() => {
    // Accesează Typed din fereastra globală
    const typed = new window.Typed('.typed-text', {
      strings: ["George"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Curățare la demontarea componentei pentru a evita scurgeri de memorie
    return () => {
      typed.destroy();
    };
  }, []);
  
  

  
  return (
    <div id="hero" className='heroContainer'>

    <div className="ledtSide">
    <div className="heroText">
       <h1>Hi I'm <span className='typed-text'></span></h1> 
       <p>
          I'm a creative web developer who loves exploring new ideas
           and building innovative solutions. I'm eager to collaborate 
           and help bring your ideas to reality!
        </p>

    </div>
        
    <div className="butoane">
        <a  href='#about' onClick={handleScroll}>About Me</a>
        <a href='#contact' onClick={handleScroll}>Contact Me</a>
    </div>

    </div>  
    
    <div className="heroImage">
        <img src={main_img} alt="image" />
    </div>

 

    </div>
  )
}
