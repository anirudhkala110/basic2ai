import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Auth/Login';
import Navbar from './Utils/Navbar';
import Register from './Auth/Register';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import Homepage from './Components/Home/Homepage';
import VerifyEmail from './Auth/VerifyEmail';
import ForgotPass from './Auth/ForgotPass';
import NewPassword from './Auth/NewPassword';
import Course from './Components/Course/Course';
import CourseID from './Components/Course/CourseID';
import Footer from './Utils/Footer';
import PageNotFound from './Components/Course/PageNotFound';
import Contact from './Components/Contact/Contact';
import Pricing from './Components/Pricing/Pricing';
import UploadPdf from './Components/Course/UploadPdf';
import callBtn from './Utils/Logo/callBtn.png'
import Dashboard from './Components/Admin/Dashboard';
import UserProfile from './Components/Profile/UserProfile';

axios.defaults.withCredentials = true

export const userContext = createContext()

function App() {
  const [login, setLogin] = useState(false)
  const [role, setRole] = useState(null)
  const [user, setUser] = useState({})
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    axios.get('http://localhost:8099/loggin')
      .then(res => {
        if (res.data.login) {
          setUser(res.data)
          setLogin(res.data.login)
          setRole(res.data.role)
        }
      })
      .catch(err => console.log(err))
  })
  const handleCallBtn = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  }
  const toggleTheme = () => {
    if(theme=='dark'){
      setTheme('light');
    }else{
      setTheme('dark');
    }
    console.log(theme)
  };
  return (
    <div className='w-100 container-fluid px-0' style={{ minWidth: '370px',filter:`${theme==='light'?'invert(0)':'invert(1)'}` }}>

      {/* <button className='btn border' onClick={toggleTheme} style={{position:'absolute',zIndex:'10000001',top:'12px',left:'30%',color:'white'}}>{theme==='light'?'Dark':'Light'}</button> */}

      <userContext.Provider value={user}>
        <div className="bg-white fontFamily" style={{ minWidth: "350px" }}>
          <div className='w-100 fixed-top'>
            <Navbar />
          </div>
          <div className='pt-3 border-5 border-black mb-5' style={{ minHeight: "80vh" }}>
            <div className='py-1 bg-white mb-5 pt-5' >
              <div className='w-100 d-flex align-items-bottom justify-content-end fixed-top mt-5 pe-4' style={{ height: "1px" }}>
                <button className='fw-bolder rounded-5 sliderCallBtn' onClick={e => handleCallBtn(7668490213)}><img src={callBtn} className='callBtn' width={40} /></button>
              </div>
              <div className='container-fluid'>
                <Router>
                  <Routes>
                    <Route exact path='/login' element={login ? <Homepage /> : <Login />} />
                    <Route exact path='/' element={<Homepage />} />
                    <Route exact path='/home' element={<Homepage />} />
                    <Route exact path='/homepage' element={<Homepage />} />
                    <Route exact path='/pricing' element={<Pricing />} />
                    <Route exact path='/admin/dashboard' element={<Dashboard />} />
                    <Route exact path='/home' element={<Homepage />} />
                    <Route exact path='/register/:email' element={<Register />} />
                    <Route exact path='/verifyEmail' element={<VerifyEmail />} />
                    {/* <Route exact path='/forgot_password' element={<ForgotPass />} />  */}
                    <Route exact path='/reset_password/:id/:role/:forgottoken' element={<NewPassword />} />
                    <Route exact path='/available_courses' element={<Course />} />
                    <Route exact path='/course/:id' element={<CourseID />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/profile' element={<UserProfile />} />
                    <Route exact path='/upload_file/pdf/:topic' element={<UploadPdf />} />
                    {/* Use * wildcard for catch-all route */}
                    <Route path='*' element={<PageNotFound />} />
                  </Routes>
                </Router>
              </div>
            </div>
          </div>
          <div className='w-100 fixed-bottom' style={{ minHeight: "", top: '100%', bottom: '0px' }}>
            <Footer />
          </div>
        </div>
      </userContext.Provider>
    </div>

  );
}


export default App;
