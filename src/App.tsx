import { Slide, toast, ToastContainer } from 'react-toastify'
import About from './components/About'
import CurrentOrgans from './components/CurrnentOrgans'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Pele from './components/Pele'
import Sign from './components/Sign'
import Slides from './components/Slides'
import Stats from './components/Stats'
import Supporters from './components/Supporters'
import Admin, { getCookie } from './pages/Admin';
import { useEffect, useState } from 'react'

function App() {
  // const [role, _setCookie] = useState(getCookie("role")) ;

  return (
    <>
    {/* // { */}
    {/* //   role == "admin" ? */}
        <Admin />
      {/* // : <>
      // <Landing isAdmin={false} uploadFile={() => {return}} />
      // <Sign />
      // <Pele />
      // <About />
      // <div className='w-screen flex justify-center'>
      //   <div className='max-w-4xl w-full'>
      //     <Slides/>
      //   </div>
      // </div>
      // <Stats />
      // <Supporters />
      // <CurrentOrgans />
      // <Footer />
      // </>
  // } */}
  {/* //         <ToastContainer
  //           position="top-right"
  //           autoClose={3000}
  //           hideProgressBar={false}
  //           newestOnTop={true}
  //           closeOnClick={true}
  //           rtl={true}
  //           pauseOnFocusLoss={false}
  //           draggable
  //           pauseOnHover
  //           theme="dark"
  //           transition={Slide}
  //         /> */}
    </>
  )
}

export default App



export function customAlert(text: string) {
  // notify(text);
  alert(text)
}

const notify = (text: string) => toast.info(text, {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  // progressClassName: "bg-none bg-blue-500",
  className: "bg-red-500",
  transition: Slide,
})