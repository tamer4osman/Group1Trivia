import Quiz from "./components/Quiz";
import './App.scss'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"



function App() {


  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
   };
  
  const particlesLoaded = (container) => {
    console.log(container);
  }
  return (
    <>
      <Quiz />
      <Particles 
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            fpsLimit: 40,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true
              },
            },
            particles: {
              color: {
                value: "#fff"
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 500,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 6,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'square',
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 2
                },
                value: 1
              }
            }
          }}
      /> 
    </>
  )
}

export default App
