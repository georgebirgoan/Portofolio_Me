import './header.scss';
import brain from '../../img/brain.png'
import useAutoHide from 'auto-hide-hook';
import { useRef, useState } from 'react';
import hamburger from '../../img/hamburger.png'
import {handleScroll} from '../../../utils/handleScroll';

export default function Header() {
  const menuRef=useRef(null);
  const [isMenuOpen,setMenuOpen]=useState(false);
  useAutoHide(menuRef,setMenuOpen);

  console.log(isMenuOpen);


  return (
    <div className='navContainer'>

      <div className="navElements">

        <div className="logo">
          <img src={brain} alt='logo'/>
          <span>GEORGE</span>
        </div>


        <div className="nav-pages">
          <a href='#about' onClick={handleScroll}>About Me</a>
          <a href='#skills' onClick={handleScroll}>Skills</a>
          <a href='#projects' onClick={handleScroll}>Projects</a>
          <a href='#contact' onClick={handleScroll}>Contact Me</a>
        </div>

        <div className="menuContainer" ref={menuRef}>

            <button
            className='hamburger'
            aria-label='Open Meniu'
            title='Open'
            onClick={()=>setMenuOpen(true)}
            >
            <img src={hamburger}/>
            </button>
          {isMenuOpen && (
            <div className="leftsideContainer">
            <div className="menu-header">

              <div className="left">
                <img src={brain} alt='logo'/>
                <span>GEORGE</span>
              </div>

              <button onClick={()=>setMenuOpen(false)}
               className='iesire'>X</button>
               
            </div>
            <div className="menu-content">
              <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
              </ul>
            </div>
          </div>
            

          )}
      

        </div>

      </div>


      
    </div>
  )
}
