import './Projects.css'
import oqiga from '../assets/oqiga.png'
import mentor from '../assets/mentor.png'
import funny from '../assets/funny.png'
import geotab from '../assets/geotab.png'
import nbody from '../assets/nbody.gif'
import { useEffect, useState } from 'react'

export default function Projects() {
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
    <div className={`project-section ${showComponent ? 'show' : ''}`}>
      <div class="grid-container">
      <div class="grid-item">
          <h1>OQIGA.AI</h1>
          <a href='https://oqiga-ai.vercel.app/' target='blank'><img src={oqiga} alt='generative ai website'/></a>
          <p>Engineered a pioneering educational platform using React.js for frontend and Flask for backend, featuring interactive storytelling with parental voice integration achieved through IPython and Google Colab with Jupyter Notebook. Achieved second place at the MakeHarvard 2024 hackathon, demonstrating the project’s innovation and impact in educational technology, and garnering significant interest and acclaim.</p>
        </div>
        <div class="grid-item">
          <h1>MyGapMentor</h1>
          <a href='https://mygapmentor.vercel.app/' target='blank'><img src={mentor} alt='generative ai website'/></a>
          <p>Developed with React and Flask, aimed at assisting high school students in enhancing their extracurricular profiles through AI-generated, customized plans. These plans, based on students' input activities and preferences, leverage OpenAI's API to offer tailored suggestions for improvement, including internships, research projects, and hackathons, tailored to different high school levels.</p>
        </div>
        <div class="grid-item">
          <h1>FunnyGame</h1>
          <a href='https://github.com/wjorgensen/funny-game' target='blank'><img src={funny} alt='generative ai game'/></a>
          <p>Inspired by the online game Gartic Phone, it's a web-based game where players create prompts in a lobby, leading to AI-generated images that are passed around for humorous storytelling. Built Funny Game with Next.js for the front end, socket.io for connecting all of the clients together, and Open AI API to generate the images.</p>
        </div>
        <div class="grid-item">
          <h1>GeoTab</h1>
          <a href='https://chromewebstore.google.com/detail/geotab/ifcklilffcpllkallhdaanealofknahe?utm_source=ext_sidebar&hl=en-US' target='blank'><img src={geotab} alt='chrome extension game'/></a>
          <p>Designed and launched a Chrome extension game for geography education. It invites users to identify flags, capitals, and their locations of countries worldwide, effectively blending leisure with the enrichment of geographical knowledge.</p>
        </div>
        <div class="grid-item">
          <h1>N-Body Simulation</h1>
          <a href='https://github.com/zhandolia/nbody' target='blank'><img src={nbody} alt='solary system simulation'/></a>
          <p>Enhanced the solar system simulation using Java, blending background imagery, studio-quality sound, and prototypical planet models with mathematical precision.</p>
        </div>
      </div>
    </div>
  )
}
