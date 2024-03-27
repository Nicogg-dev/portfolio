import { Home } from './components/Home'
import { Nav } from './components/Nav'
import ParticlesComponent from './components/particles';

function App() {

  return (
    <div className='h-full flex flex-col'>
      <Nav />
      <ParticlesComponent id="particles" />
      <Home />
    </div>
  )
}

export default App
