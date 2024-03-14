import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const PythonAutomation = () => {
    const [id, setId] = useState(3)
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
        <div className='p-2 my-2' style={{ minWidth: "250px" }}>
            <Helmet>
                <title>B2A-Automation</title>
                <meta name='description' content="Python automation streamlines repetitive tasks by writing scripts that perform actions automatically, saving time and effort. Whether you're automating file management, scheduling tasks, or controlling hardware devices, Python's simplicity and flexibility make it a go-to choice for automation projects. By mastering Python automation, you empower yourself to simplify workflows, increase productivity, and focus on more creative endeavors." />
                <meta name='keywords' content="Python Automation Tools, Automation with Python, Python Scripting, Python Automation Framework, Python Scripting for Automation, Automated Tasks with Python" />
            </Helmet>
            <center><h3>Python Automation</h3> </center>
            <hr />
            <div className='p-2 my-2 rounded-2 base_for_levels_description' style={{ minHeight: "78vh", overflowX: 'auto' }}>
                <div>
                    <p>Python automation streamlines repetitive tasks by writing scripts that perform actions automatically, saving time and effort. Whether you're automating file management, scheduling tasks, or controlling hardware devices, Python's simplicity and flexibility make it a go-to choice for automation projects. By mastering Python automation, you empower yourself to simplify workflows, increase productivity, and focus on more creative endeavors.</p>
                    <div>
                        {/* <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Automation</b></div> */}
                        <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center justify-content-between w-100' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><div className='d-flex align-items-center justify-content-start'><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Automation</b></div>
                            <span>
                                {msg ? <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => alert("Files Doesn't Exists")}>{msg}</button> : <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => loggedIn ? handleDownload("You can Download the Content") : handleDownload("You can not Download the Content")}>Download Notes</button>}{isAdmin ? <button className='btn btn-outline-dark py-0 rounded-0 mx-2 text-white border border-white' onClick={e => handleRoute('upload_file/pdf', 'Advanced Python : Automation')}>Upload</button> : ''}
                            </span>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>PyAutoGUI</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Learning PyAutoGUI</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Working with Mouse</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Pointer Position</li>
                                <li style={{ marginLeft: "2em" }}>Cursor Movement</li>
                                <li style={{ marginLeft: "2em" }}>Mouse Events and Scroll</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Working with Keyboard</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>ScreenShot</li>
                                <li style={{ marginLeft: "2em" }}>Keyboard Shortcuts and Button Press</li>
                                <li style={{ marginLeft: "2em" }}>Message Box</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Messaging Techniques</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Alert Box</li>
                                <li style={{ marginLeft: "2em" }}>Confirm Box</li>
                                <li style={{ marginLeft: "2em" }}>Prompt Box</li>
                                <li style={{ marginLeft: "2em" }}>Password Box</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PythonAutomation