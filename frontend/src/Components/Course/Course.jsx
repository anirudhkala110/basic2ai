import React, { useEffect, useState } from 'react'
import Beginner from './Beginner'
import Advanced from './Advanced'
import Expert from './Expert'
import StarterPython from './StarterPython'
import PythonAutomation from './PythonAutomation'
import DatabaseConnection from './DatabaseConnection'
import PythonSalenium from './PythonSalenium'
import PythonAI from './PythonAI'
import ImageProcessing from './ImageProcessing'
import axios from 'axios'

const Course = () => {
    const [index, setIndex] = useState(0)
    const [msg, setMsg] = useState('Token is not available')
    const [loggedIn, setLogin] = useState(true)
    const [enrolled, setEnrolled] = useState(true)
    const [logoutHide, setLogoutHide] = useState(true)
    const [isAdmin, setIsadmin] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8099/loggin')
            .then(res => {
                if (res.data.role === 'admin' && res.data.login) {
                    setIsadmin(true)
                }
                else {
                    setMsg(res.data.msg)
                    setIsadmin(false)
                }
            })
            .catch(err => console.log(err))
    })
    return (
        <div className='basedisplay w-100' style={{ minWidth: "250px" }}>
            <div className='hide-1000 '>
                <button class="me-2 setPosition " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLevels" aria-controls="offcanvasLevels">
                    <i class="bi bi-arrow-down-up fs-2"></i>
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLevels" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <center className='p-2 fs-1 fw-bold text-dark' >Course Catalog</center>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr />
                    <div class="offcanvas-body">
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 0 ? '#000000de' : ''}`, color: `${index == 0 ? 'white' : '#000000de'}` }} onClick={e => setIndex(0)}>Basic Setup<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 1 ? '#000000de' : ''}`, color: `${index == 1 ? 'white' : '#000000de'}` }} onClick={e => setIndex(1)}>Starter Python<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 2 ? '#000000de' : ''}`, color: `${index == 2 ? 'white' : '#000000de'}` }} onClick={e => setIndex(2)}>Python Automation<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 5 ? '#000000de' : ''}`, color: `${index == 5 ? 'white' : '#000000de'}` }} onClick={e => setIndex(5)}>Python Webscrapping <i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 4 ? '#000000de' : ''}`, color: `${index == 4 ? 'white' : '#000000de'}` }} onClick={e => setIndex(4)}>SQL in Python<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 3 ? '#000000de' : ''}`, color: `${index == 3 ? 'white' : '#000000de'}` }} onClick={e => setIndex(3)}>Advanced Python<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 8 ? '#000000de' : ''}`, color: `${index == 8 ? 'white' : '#000000de'}` }} onClick={e => setIndex(8)}>Image Processing<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 6 ? '#000000de' : ''}`, color: `${index == 6 ? 'white' : '#000000de'}` }} onClick={e => setIndex(6)}>Machine Learning <i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 7 ? '#000000de' : ''}`, color: `${index == 7 ? 'white' : '#000000de'}` }} onClick={e => setIndex(7)}>Python AI <i class="bi bi-arrow-right text-white"></i></div>
                    </div>
                </div>
            </div>
            <div className='bg-white hide_1000 shadow me-2 p-2' style={{ minWidth: "250px"}}>
                <center className='mb-3 bg-primary p-2 fw-bold text-light' >Levels</center>
                <hr />
                <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 0 ? '#000000de' : ''}`, color: `${index == 0 ? 'white' : '#000000de'}` }} onClick={e => setIndex(0)}>Basic Setup<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 1 ? '#000000de' : ''}`, color: `${index == 1 ? 'white' : '#000000de'}` }} onClick={e => setIndex(1)}>Starter Python<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 2 ? '#000000de' : ''}`, color: `${index == 2 ? 'white' : '#000000de'}` }} onClick={e => setIndex(2)}>Python Automation<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 5 ? '#000000de' : ''}`, color: `${index == 5 ? 'white' : '#000000de'}` }} onClick={e => setIndex(5)}>Python Webscrapping <i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 4 ? '#000000de' : ''}`, color: `${index == 4 ? 'white' : '#000000de'}` }} onClick={e => setIndex(4)}>SQL in Python<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 3 ? '#000000de' : ''}`, color: `${index == 3 ? 'white' : '#000000de'}` }} onClick={e => setIndex(3)}>Advanced Python<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 8 ? '#000000de' : ''}`, color: `${index == 8 ? 'white' : '#000000de'}` }} onClick={e => setIndex(8)}>Image Processing<i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 6 ? '#000000de' : ''}`, color: `${index == 6 ? 'white' : '#000000de'}` }} onClick={e => setIndex(6)}>Machine Learning <i class="bi bi-arrow-right text-white"></i></div>
                        <div className='p-2 mt-1 mb-3 subTabs fw-bold d-flex align-items-center justify-content-between' style={{ cursor: "pointer", background: `${index == 7 ? '#000000de' : ''}`, color: `${index == 7 ? 'white' : '#000000de'}` }} onClick={e => setIndex(7)}>Python AI <i class="bi bi-arrow-right text-white"></i></div>
            </div>
            <div className='ms-2 bg-white shadow'>
                {index == 0 ? <Beginner /> : index == 1 ? <StarterPython /> : index == 2 ? <PythonAutomation /> : index == 3 ? <Advanced /> : index == 4 ? <DatabaseConnection /> : index == 5 ? <PythonSalenium /> : index == 6 ? <Expert /> : index == 7 ? <PythonAI /> : index == 8 ? <ImageProcessing /> : "Data not available"}
            </div>
        </div>
    )
}

export default Course