import About from './components/About'
import CurrentOrgans from './components/CurrnentOrgans'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Pele from './components/Pele'
import Sign from './components/Sign'
import Slides from './components/Slides'
import Stats from './components/Stats'
import Supporters from './components/Supporters'
import Admin, { getFile, uploadFile } from './pages/Admin';
import { Route, Routes } from 'react-router-dom'
import About2 from './components/About2'

function App() {
  // const [role, _setCookie] = useState(getCookie("role")) ;

  return (
    <Routes>
      <Route path='/' element={
        <>
        <Landing getFile={getFile} isAdmin={false} uploadFile={uploadFile} />
            <Sign />
            <Pele getFile={getFile} isAdmin={false} uploadFile={uploadFile} />
            <About getFile={getFile} isAdmin={false} uploadFile={uploadFile} />
            <About2 getFile={getFile} isAdmin={false} uploadFile={uploadFile} />
            <div className='w-screen flex justify-center'>
              <div className='max-w-4xl w-full'>
                <Slides getFile={getFile} isAdmin={false} uploadFile={uploadFile} />
              </div>
            </div>
            <Stats isAdmin={false} />
            <Supporters />
            <CurrentOrgans />
            <Footer isAdmin={false} getFile={getFile} uploadFile={uploadFile} />
        </>
      } />
      <Route path="/admin" element={<Admin />} />
  </Routes>
  )
}

export default App



export function customAlert(text: string) {
  // notify(text);
  alert(text)
}