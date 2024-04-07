import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
// Importar el engine de manera relativa

const ParticlesComponent = () => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
      await loadPolygonMaskPlugin(tsParticles);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
        background: {
          color: {
            value: "#06010d"
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              distance: 50,
              duration: 3,
              opacity: 8,
              size: 7,
              speed: 3
            }
          }
        },
        particles: {
          color: {
            value: "#00FFFF",
            animation: {
              enable: false, // cambia color de las particulas
              speed: 20,
              sync: true
            }
          },
          links: {
            blink: false,
            color: "#FFFFFF",
            consent: false,
            distance: 30,
            enable: true,
            opacity: 0.5,
            width: 0.6
          },
          move: {
            enable: true,
            outModes: "bounce",
            speed: { min: 0.5, max: 1 }
          },
          number: {
            value: 200
          },
          opacity: {
            animation: {
              enable: true,
              speed: 2,
              sync: false
            },
            random: false,
            value: { min: 0.05, max: 1 }
          },
          shape: {
            type: "circle"
          },
          size: {
            animation: {
              enable: false,
              speed: 40,
              sync: false
            },
            random: true,
            value: { min: 0.1, max: 1 }
          }
        },
        polygon: {
          draw: {
            enable: true,
            stroke: {
              color: "#ffffff",
              width: 0.5,
              opacity: 0.5
            }
          },
          move: {
            radius: 10
          },
          inline: {
            arrangement: "equidistant"
          },
          scale: 0.6,
          type: "inline",
          url: "https://particles.js.org/images/smalldeer.svg"
        }
      }),
    [],
  );


  // eslint-disable-next-line react/prop-types
  return <Particles id="tsparticles" init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;