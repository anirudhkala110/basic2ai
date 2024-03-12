import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
    const [show, setShow] = useState([{
        show1: false,
        show2: false,
        show3: false,
    }])
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
                setEnrolled(res.data.verified)
            })
            .catch(err => console.log(err))
    })
    const navigate = useNavigate()
    const handleRoute = (route) => {
        navigate(`/${route}`)
    }
    return (
        <div style={{ minHeight: "85vh" }}>
            <center className='mb-3 fw-bold'><h1>Detailing and Pricing for the Courses</h1></center>
            <marquee behavior='alternate' scrollamount='0' className='px-3 marqu '>
                <div className='d-flex slideIT justify-content-between align-items-center w-100 px-5 py-2 fs-5 fw-bolder' style={{ filter: "drop-shadow(0px 5px 5px black)" }}>
                    <button className='rounded-pill marquBtn bg-white mx-5 px-3' style={{ cursor: "pointer" }}>Register Now</button>
                    <button className='rounded-pill marquBtn bg-white mx-5 px-3' style={{ cursor: "pointer" }}>Enroll Now</button>
                    <button className='rounded-pill marquBtn bg-white mx-5 px-3' style={{ cursor: "pointer" }}>Attend All Classes</button>
                    <button className='rounded-pill marquBtn bg-white mx-5 px-3' style={{ cursor: "pointer" }}>Get All Notes</button>
                    <button className='rounded-pill marquBtn bg-white mx-5 px-3' style={{ cursor: "pointer" }}>Register Now</button>
                    <button className='rounded-pill marquBtn bg-white mx-5 px-3' style={{ cursor: "pointer" }}>Enroll Now</button>
                    <button className='rounded-pill marquBtn bg-white mx-5 px-3' style={{ cursor: "pointer" }}>Attend All Classes</button>
                    <button className='rounded-pill marquBtn bg-white mx-5 px-3' style={{ cursor: "pointer" }}>Get All Notes</button>
                </div>
            </marquee>
            <div className='container d-flex justify-content-center align-items-start'>

                <div className='row'>
                    <div className='p-2 col-sm-12 mb-5 rounded col-xl-4 col-xxl-4 col-lg-4'>
                        <div className='card p-3'>
                            <div className='card-title fs-3'>Basic Python Course</div>
                            <hr />
                            <div className='card-body'>
                                <ul style={{ listStyle: "square" }}>
                                    <li style={{ marginLeft: '2rem' }}>Installation of Basic Software</li>
                                    <li style={{ marginLeft: '2rem' }}>Starter Python <button className='handleRate p-2 rounded  mt-3' style={{ display: `${show.show1 ? 'none' : 'block'}` }} onClick={e => setShow({ ...show, show1: !show.show1 })}>{show.show1 ? "" : "Show"}<i class="bi bi-caret-down-fill"></i></button></li>
                                    {show.show1 && <>
                                        <li style={{ marginLeft: '2rem' }}>Learning About Data Types</li>
                                        <li style={{ marginLeft: '2rem' }}>Intro about operators,loops,Data structures and Concept of OOPs
                                            <button className='handleRate p-2 rounded  mt-3' style={{ display: `${show.show1 ? 'block' : 'none'}` }} onClick={e => setShow({ ...show, show1: !show.show1 })}>{show.show1 ? "Hide" : ""}</button>
                                            <button className='border-0 p-2 rounded  mt-3' style={{ display: `${show.show1 ? 'block' : 'none'}` }} onClick={e => setShow({ ...show, show1: !show.show1 })}>@400 Rs /-</button>
                                            <button className='handleRate p-2 rounded  mt-3' style={{ display: `${show.show1 ? 'block' : 'none'}` }} onClick={e => handleRoute('contact')}>Enroll Now</button>
                                            <hr />
                                            <p className='note'><sub className="text-danger fw-semibold"><sup>*</sup>Note: Write a message to the Admin for Enabling the Package with the choosen package name or can use call button.</sub></p>
                                        </li>
                                    </>}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 col-sm-12 mb-5 rounded col-xl-4 col-xxl-4 col-lg-4'>
                        <div className='card p-3'>
                            <div className='card-title fs-3'>Advanced Python Course</div>
                            <hr />
                            <div className='card-body'>
                                <ul style={{ listStyle: "square" }}>
                                    <li style={{ marginLeft: '2rem' }}>Web Scraping</li>
                                    <li style={{ marginLeft: '2rem' }}>Automation with GUI . . . <button className='handleRate p-2 rounded  mt-3' style={{ display: `${show.show2 ? 'none' : 'block'}` }} onClick={e => setShow({ ...show, show2: !show.show2 })}>{show.show2 ? "" : "Show More"}<i class="bi bi-caret-down-fill"></i></button></li>
                                    {show.show2 && <> <li style={{ marginLeft: '2rem' }}>Learning SQL</li>
                                        <li style={{ marginLeft: '2rem' }}>Image Detailing</li>
                                        <li style={{ marginLeft: '2rem' }}>Yolo Working and Learning
                                            <button className='handleRate p-2 rounded  mt-3' style={{ display: `${show.show2 ? 'block' : 'none'}` }} onClick={e => setShow({ ...show, show2: !show.show2 })}>{show.show2 ? "Hide" : ""}</button>
                                            <button className='border-0 p-2 rounded  mt-3' style={{ display: `${show.show2 ? 'block' : 'none'}` }} onClick={e => setShow({ ...show, show2: !show.show2 })}>@1000 Rs/-</button>
                                            <button className='handleRate p-2 rounded  mt-3' style={{ display: `${show.show2 ? 'block' : 'none'}` }} onClick={e => handleRoute('contact')}>Enroll Now</button>
                                            <hr />
                                            <p className='note'><sub className="text-danger fw-semibold"><sup>*</sup>Note: Write a message to the Admin for Enabling the Package with the choosen package name or can use call button.</sub></p>
                                        </li> </>}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 col-sm-12 mb-5 rounded col-xl-4 col-xxl-4 col-lg-4'>
                        <div className='card p-3'>
                            <div className='card-title fs-3'>Expert Python Course</div>
                            <hr />
                            <div className='card-body'>
                                <ul style={{ listStyle: "square" }}>
                                    <li style={{ marginLeft: '2rem' }}>Machine Learning</li>
                                    <li style={{ marginLeft: '2rem' }}>Working with real data</li>
                                    <li style={{ marginLeft: '2rem' }}>Training Models . . .
                                        <button className='handleRate p-2 rounded  mt-3' style={{ display: `${show.show3 ? 'none' : 'block'}` }} onClick={e => setShow({ ...show, show3: !show.show3 })}>{show.show3 ? "" : "Show More"}<i class="bi bi-caret-down-fill"></i></button>
                                    </li>
                                    {show.show3 &&
                                        <> <li style={{ marginLeft: '2rem' }}>Learning New Type of Models</li>
                                            <li style={{ marginLeft: '2rem' }}>Learning Natural Language Programming</li>
                                            <li style={{ marginLeft: '2rem' }}>Learning Large Language Programming</li>
                                            <li style={{ marginLeft: '2rem' }}>Working With tensorflow with and without GPU</li>
                                            <li style={{ marginLeft: '2rem' }}>Finalising AI
                                                <button className='handleRate p-2 rounded  mt-3' style={{ display: `${show.show3 ? 'block' : 'none'}` }} onClick={e => setShow({ ...show, show3: !show.show3 })}>{show.show3 ? "Hide" : ""}</button>
                                                <button className='border-0 p-2 rounded  mt-3' style={{ display: `${show.show3 ? 'block' : 'none'}` }} onClick={e => setShow({ ...show, show3: !show.show3 })}>@5000 Rs/-</button>
                                                <button className='handleRate enroll p-2 rounded  mt-3' onClick={e => handleRoute('contact')}>Enroll Now</button>
                                                <hr />
                                                <p className='note'><sub className="text-danger fw-semibold"><sup>*</sup>Note: Write a message to the Admin for Enabling the Package with the choosen package name or can use call button.</sub></p>
                                            </li>
                                        </>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Pricing