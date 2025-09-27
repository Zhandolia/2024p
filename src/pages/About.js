import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faReact, 
  faGit, 
  faSwift,
  faJava,
  faJsSquare,
  faAws,
  faDocker,
  faNode } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faBrain } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function About() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className={`about ${showComponent ? 'show' : ''}`}>
      <div className='about-wrapper'>
        <div className='description'>
          <h1>About Me</h1>
          <p>
          Hailing from Kazakhstan, Central Asia, I'm a Computer Science sophomore at Boston University, 
          fluent in Kazakh, Russian, and English, with additional Turkish, Kyrgyz, and Arabic skills. 
          My tech journey began with high school robotics and was amplified at 80edays, Germany, 
          where I played a pivotal role in the ChargeHotels iOS application, both in development and UI design. 
          As the founder of MyGapMentor, I crafted a platform that empowers gap-year students using OpenAI, 
          a project that secured significant funding and recognition. I'm eager to connect with professionals 
          who share my passion for innovation and envision a transformative tech future.
          </p>
        </div>
        <div className='skills'>
          <h1>Technical Skills</h1>
          <ul>
            <li><FontAwesomeIcon icon={faPython} beat size='2xl'/></li>
            <li><FontAwesomeIcon icon={faSwift} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faJava} beat size='2xl'/></li>
            <li><FontAwesomeIcon icon={faJsSquare} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faReact} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faNode} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faGit} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faAws} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faDocker} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faRobot} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faBrain} beat size="2xl"/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}