import { Home } from './Home'
import { Nav } from './components/Nav'
import ParticlesComponent from './components/particles';

function App() {

  return (
    <div className='h-full flex flex-col'>
      <Nav />
      <ParticlesComponent/>
      <Home />
    </div>
  )
}

export default App
