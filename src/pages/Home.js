import './Home.css'
import img from '../assets/zab.jpg'
import Typewriter from 'typewriter-effect';
import whoConfig from '../config/whoConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/ZhandosBrownCV.pdf'
import { useState, useEffect } from 'react';

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className={`content ${showComponent ? 'show' : ''}`}>
      {/* <img src={img} alt="zab"/>
      <div className='info'> */}
      {!imageLoaded && <div className="loader"></div>} {/* Show loader while image is loading */}
      <img src={img} alt="zab" style={{display: imageLoaded ? 'block' : 'none'}} onLoad={() => setImageLoaded(true)}/>
      <div className='info'>
        <h1>Hi, I'm Zhandos</h1>
        <h2>I'm a <span className='typewriter'><Typewriter options={whoConfig}/></span></h2>
        <ul>
          <li> 🇰🇿 based in Kazakhstan, Central Asia</li>
          <li> 🎓 Student at Boston University</li>
          <li> 📧 <a href="mailto:zhandos@bu.edu" style={{ color: 'white', textDecoration: 'none' }}>zhandos@bu.edu</a></li>
        </ul>
        <div className='socials'>
          <a href={resume} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faFilePdf} size='2xl'/>
          </a>
          <a href='https://www.linkedin.com/in/zhanbrown/' target='blank'>
          <FontAwesomeIcon icon={faLinkedinIn} size='2xl'/>
          </a>
          <a href='https://github.com/zhandolia' target='blank'>
          <FontAwesomeIcon icon={faGithub} size='2xl'/>
          </a>
          <a href='https://www.instagram.com/zhanbrown/' target='blank'>
          <FontAwesomeIcon icon={faInstagram} size='2xl'/>
          </a>
        </div>
      </div>
    </div>
  )
}
