import React, { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './Logo/logo.png'
import { Link, useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true

const Navbar = () => {
    const [msg, setMsg] = useState('Token is not available')
    const [logoutHide, setLogoutHide] = useState(true)
    const [isAdmin, setIsadmin] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8099/loggin')
            .then(res => {
                if (res.data.msg === 'Token is not available') {
                    setLogoutHide(false)
                }
                else {
                    if (res.data.role === 'admin') {
                        setIsadmin(true)
                    }
                    else {
                        setIsadmin(false)
                    }
                    setMsg(res.data.msg)
                }
            })
            .catch(err => console.log(err))
    })
    const handleLogout = () => {
        axios.get('http://localhost:8099/logout')
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleRoute = (route) => {
        window.location.href = `/${route}`
    }
    return (
        <div className='navBack' style={{ minWidth: "350px" }}>
            <div className='suport' >&nbsp;</div>
            <nav className="navbar navbar-light navbar-expand-lg sticky-top px-2 d-flex justify-content-between align-items-center" style={{ background: "linear-gradient(180deg,rgb(0 0 0 / 59%), #0000009a, rgb(0 0 0 / 59%))", minHeight: "55px" }}>
                <div className='text-light d-flex align-items-center' onClick={e => handleRoute('')} style={{ cursor: "pointer" }}>
                    <img src={logo} className="rounded-4 border shadow" style={{ maxWidth: "40px" }} />
                    <span className='mx-3 fs-2'>B2A</span>
                </div>
                <div className='hide-1000 '>
                    <button class="btn btn-dark me-2 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i class="bi bi-list"></i>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <img src={logo} className="rounded-4 border shadow" style={{ maxWidth: "50px" }} />
                            <h2 className='mx-3'>B2A (Basic to AI)</h2>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr />
                        <div class="offcanvas-body">
                            <div class="">
                                {isAdmin && <div className='mb-2 py-2 text-dark '>Admin</div>}
                                <div className='subTabs mb-2 py-2' onClick={e => handleRoute('home')}>Home</div>
                                <div className='subTabs mb-2 py-2' onClick={e => handleRoute('about')}>About</div>
                                <div className='subTabs mb-2 py-2' onClick={e => handleRoute('available_courses')}>Course</div>
                                <div className='subTabs mb-2 py-2' onClick={e => handleRoute('contact')}>Contact</div>
                                <div className='subTabs mb-2 py-2' onClick={e => handleRoute('pricing')}>Pricing</div>
                                {isAdmin && <div className='subTabs mb-2 py-2' onClick={e => handleRoute('admin/dashboard')}>Dashboard</div>}
                                {logoutHide && <button className='btn btn-danger mx-2' onClick={e => handleRoute('profile')}>Profile</button>}
                                {logoutHide ? <button onClick={handleLogout} className='btn btn-danger mx-2'>Logout</button> : <button className='btn btn-success border border-light text-light mx-2' onClick={e => handleRoute('login')}>Login</button>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='show-1000 '>
                    <div class="d-flex align-items-center justify-content-between me-3">
                        {isAdmin && logoutHide && <div className='mx-2 text-white' aria-disabled={true}>Admin</div>}
                        <div className='hovermeshow-1000 mx-2' onClick={e => handleRoute('home')}>Home</div>
                        <div className='hovermeshow-1000 mx-2' onClick={e => handleRoute('about')}>About</div>
                        <div className='hovermeshow-1000 mx-2' onClick={e => handleRoute('available_courses')}>Course</div>
                        <div className='hovermeshow-1000 mx-2' onClick={e => handleRoute('contact')}>Contact</div>
                        <div className='hovermeshow-1000 mx-2' onClick={e => handleRoute('pricing')}>Pricing</div>
                        {isAdmin && logoutHide && <div className='hovermeshow-1000 mx-2' onClick={e => handleRoute('admin/dashboard')}>Dashboard</div>}
                        {logoutHide && <button className='btn btn-danger mx-2' onClick={e => handleRoute('profile')}>Profile</button>}
                        {logoutHide ? <button onClick={handleLogout} className='btn btn-danger mx-2'>Logout</button> : <button className='btn btn-success border border-light text-light mx-2' onClick={e => handleRoute('login')}>Login</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar