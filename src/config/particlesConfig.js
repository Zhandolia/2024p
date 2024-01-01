
const particlesConfig = {
          background: {
            color: {
              value: '#000000',
            },
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              mode:{
                repulse: {
                  distance: 200,
                  duration: 0.4,
                }
              }
            }
          },
          particles: {
            color: {
              value: "#F5EEF8",
            },
            links: {
              enable: true,
              width: 1,
              opacity: 1,
              distance: 150,
              color: '#b1ddf1',
              triangles: {
                enable: true,
                color: '#b1ddf1',
                opacity: 0.2,
              },
            },
            move: {
              enable: true,
              direction: 'none',
              outModes: 'bounce',
              random: true,
              speed: 5,
              straight: false
            },
            number: {
              value: 100,
              density: {
                enable: true,
                area: 1200
              },
            }
          },
          opacity: {
            value: 0.9,
          },
          shape: {
            type: 'triangle'
          },
          size: {
            random: true,
            value: 5
          },
          detectRetina: true
        }

export default particlesConfig;