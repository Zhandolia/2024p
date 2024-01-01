import './Projects.css'
import memory from '../assets/memory.png'
import sfoodify from '../assets/sfoodify.png'
import recipe from '../assets/recipe.png'
import webscraper from '../assets/webscraper.png'
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
          <h1>Sfoodify</h1>
          <a href='https://github.com/rongc0723' target='blank'><img src={sfoodify} alt='sfoodify project'/></a>
          <p>Utilized Spotify and Spooancular API to generate curated playlists and recipes for an authorized user</p>
        </div>
        <div class="grid-item">
          <h1>Memory Game</h1>
          <a href='https://github.com/rongc0723' target='blank'><img src={memory} alt='memory-game project'/></a>
          <p>Recreated the classic memory flip game where users flip cards at an attempt to match them</p>
        </div>
        <div class="grid-item">
          <h1>Recipe Book</h1>
          <a href='https://github.com/rongc0723' target='blank'><img src={recipe} alt='recipe book project'/></a>
          <p>Webapp that allows an user to create recipes and search for recipes on a local json database</p>
        </div>
        <div class="grid-item">
          <h1>Marciano Web Scraper</h1>
          <a href='https://github.com/rongc0723' target='blank'><img src={webscraper} alt='webscraper project'/></a>
          <p>Python program that allows students to quickly get menu items and important nutrition facts</p>
        </div>
      </div>
    </div>
  )
}
