import Particles from 'react-tsparticles'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import particlesConfig from '../config/particlesConfig';

export default function Background() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
        }, []);

    const particlesLoaded = useCallback(async engine => {
        console.log(engine)
        await loadFull(engine);
    }, []);

    return (
        <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={particlesConfig} />
    )
}
