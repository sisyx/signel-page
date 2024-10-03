import About from './components/About'
import CurrentOrgans from './components/CurrnentOrgans'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Pele from './components/Pele'
import Sign from './components/Sign'
import Slides from './components/Slides'
import Stats from './components/Stats'
import Supporters from './components/Supporters'

function App() {

  return (
    <>
      <Landing />
      <Sign />
      <Pele />
      <About />
      <div className='w-screen flex justify-center'>
        <div className='max-w-4xl w-full'>
          <Slides/>
        </div>
      </div>
      <Stats />
      <Supporters />
      <CurrentOrgans />
      <Footer />
    </>
  )
}

export default App
