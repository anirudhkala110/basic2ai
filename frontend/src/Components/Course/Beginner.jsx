import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Beginner = () => {
    const [id, setId] = useState(1)
    const [loggedIn, setLoggedIn] = useState(false)
    const [isAdmin, setIsadmin] = useState(false)
    const [verified, setVeified] = useState()
    const [msg, setMsg] = useState()
    const [msg_type, setMsg_type] = useState()
    const [allFiles, setAllfiles] = useState()
    const navigate = useNavigate()
    const handleRoute = (route, topic) => {
        navigate(`/${route}/${topic}`)
    }
    const handleDownload = (msg) => {
        if (verified >= 1) {
            window.open(`http://localhost:8099/pdf/${allFiles}`)
        }
        else {
            alert('Enroll to access the data...')
        }
    }
    useEffect(() => {
        axios.get('http://localhost:8099/loggin')
            .then(res => {
                setLoggedIn(res.data.login)
                if (res.data.role === 'admin')
                    setIsadmin(true)
                else {
                    setIsadmin(false)
                }
                if (res.data.verified > 0 || res.data.verified) {
                    setVeified(true)
                }
                else
                    setVeified(false)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`http://localhost:8099/get_pdf/${id}`)
            .then(res => {
                if (res.data.data.length < 1) {
                    setMsg("No File Exists")
                    setMsg_type(res.data.data.msg_type)
                }
                else {
                    setAllfiles(res.data.data.pdfName)
                    setMsg(null)
                }
            })
            .catch(err => {
                setMsg_type('error')
                setMsg("No File Exists")
            })
    })
    return (
        <div className='p-2 my-2' style={{ minWidth: "350px" }}>
            <center><h3>Basic Setup</h3> </center>
            <hr />
            <div className='p-2 rounded-2 my-2 base_for_levels_description' style={{ minHeight: "78vh", overflowX: 'auto' }}>
                <div>
                    <p>Basic Python covers essential concepts and constructs of the Python programming language, including variables, loops, conditionals, and functions. It serves as a stepping stone for beginners to understand programming principles and develop problem-solving skills. With Basic Python, you embark on a journey to explore the core features of Python, paving the way for further learning and mastery of the language.</p>
                    <div>
                        <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center justify-content-between w-100' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><div className='d-flex align-items-center justify-content-start'><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Introduction to jupyter</b></div>
                            <span>
                                {msg ? <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => alert("Files Doesn't Exists")}>{msg}</button> : <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => loggedIn ? handleDownload("You can Download the Content") : handleDownload("You can not Download the Content")}>Download Notes</button>}{isAdmin ? <button className='btn btn-outline-dark py-0 rounded-0 mx-2 text-white border border-white' onClick={e => handleRoute('upload_file/pdf', 'Introduction to jupyter')}>Upload</button> : ''}
                            </span>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Jupyter Notebook Setup </li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Jupyter Notebook Setup</li>
                                <li style={{ marginLeft: "2em" }}>Jupyter Notebook Walkthrough </li>
                            </ul>
                        </div>
                        <div className='ps-1'>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Python Installation</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Python 3.10 <sup>+</sup> Installation </li>
                                <li style={{ marginLeft: "2em" }}>Libraries Installation and Working </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beginner