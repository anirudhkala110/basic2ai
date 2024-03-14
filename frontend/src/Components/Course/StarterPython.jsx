import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const StarterPython = () => {
    const [id, setId] = useState(2)
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
                <title>B2A - Starter Python</title>
                <meta name='description' content="Starter Python provides an introduction to the fundamentals of programming using Python, making it accessible to beginners. From learning basic syntax and data types to writing simple scripts and solving small coding challenges" />
                <meta name='keywords' content='Python Basics, Python Fundamentals, Python Introduction, Python Tutorial, Python Programming, Python Syntax, Python Variables, Python Data Types' />
            </Helmet>
            <center><h3>Starter Python</h3> </center>
            <hr />
            <div className='p-2 rounded-2 my-2 base_for_levels_description' style={{ minHeight: "78vh", overflowX: 'auto' }}>
                <div>
                    <p>Starter Python provides an introduction to the fundamentals of programming using Python, making it accessible to beginners. From learning basic syntax and data types to writing simple scripts and solving small coding challenges, Starter Python lays the foundation for building solid programming skills. With its gentle learning curve and vast community support, Starter Python offers a welcoming entry point into the world of coding.</p>
                    <div>
                        {/* <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Introduction to Python</b></div> */}
                        <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center justify-content-between w-100' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><div className='d-flex align-items-center justify-content-start'><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Introduction to Python</b></div>
                            <span>
                                {msg ? <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => alert("Files Doesn't Exists")}>{msg}</button> : <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => loggedIn ? handleDownload("You can Download the Content") : handleDownload("You can not Download the Content")}>Download Notes</button>}{isAdmin ? <button className='btn btn-outline-dark py-0 rounded-0 mx-2 text-white border border-white' onClick={e => handleRoute('upload_file/pdf', 'Basic Python')}>Upload</button> : ''}
                            </span>
                        </div>
                        <div className='ps-1'>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Python Basics</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Python Introduction</li>
                                <li style={{ marginLeft: "2em" }}>print() in python </li>
                                <li style={{ marginLeft: "2em" }}>Variables in python </li>
                                <li style={{ marginLeft: "2em" }}>input() in python  </li>
                                <li style={{ marginLeft: "2em" }}>Arithmetic Operators in python</li>
                                <li style={{ marginLeft: "2em" }}>Type () in python </li>
                                <li style={{ marginLeft: "2em" }}>Type Conversion in python</li>
                                <li style={{ marginLeft: "2em" }}>Comments in python </li>
                                <li style={{ marginLeft: "2em" }}>if, else and elif in python</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Operators</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Arithmetic Operators</li>
                                <li style={{ marginLeft: "2em" }}>Logical Operators</li>
                                <li style={{ marginLeft: "2em" }}>Identity Comparision Operators </li>
                                <li style={{ marginLeft: "2em" }}>Membership Test Operators </li>
                                <li style={{ marginLeft: "2em" }}>Bitwise Operator Part 1</li>
                                <li style={{ marginLeft: "2em" }}>Bitwise Operator Part 2</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Loops in Python</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Loops in Python</li>
                                <li style={{ marginLeft: "2em" }}>While Loop in Python</li>
                                <li style={{ marginLeft: "2em" }}>range() in Python </li>
                                <li style={{ marginLeft: "2em" }}>for loop in Python </li>
                                <li style={{ marginLeft: "2em" }}>Break in Python</li>
                                <li style={{ marginLeft: "2em" }}>Continue in Python</li>
                                <li style={{ marginLeft: "2em" }}>Nested Loops in Python</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Funcitons in Python</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Funcitons in Python</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Strings in Python</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Strings in Python</li>
                                <li style={{ marginLeft: "2em" }}>Escape sequence & Raw Strings in Python</li>
                                <li style={{ marginLeft: "2em" }}>String operations in Python Part 1</li>
                                <li style={{ marginLeft: "2em" }}>String operations in Python Part 2</li>
                                <li style={{ marginLeft: "2em" }}>Strings Comparison Python</li>
                                <li style={{ marginLeft: "2em" }}>Pattern Searching Python</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Data Structure in Python</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>List Introduction</li>
                                <li style={{ marginLeft: "2em" }}>Tuples in Python</li>
                                <li style={{ marginLeft: "2em" }}>Set in Python</li>
                                <li style={{ marginLeft: "2em" }}>Dictionary in Python </li>
                                <li style={{ marginLeft: "2em" }}>Slicing (Lists, Tuples and String)</li>
                                <li style={{ marginLeft: "2em" }}>Comprehensions in Python</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Object Oriented Programming</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Introduction to OOPs</li>
                                <li style={{ marginLeft: "2em" }}>Classes and Objects in Python</li>
                                <li style={{ marginLeft: "2em" }}>Encapsulation</li>
                                <li style={{ marginLeft: "2em" }}>Decorators </li>
                                <li style={{ marginLeft: "2em" }}>Class methods and Static members</li>
                                <li style={{ marginLeft: "2em" }}>Inheritance</li>
                                <li style={{ marginLeft: "2em" }}>Types of Inheritance</li>
                                <li style={{ marginLeft: "2em" }}>Multiple Inheritance</li>
                                <li style={{ marginLeft: "2em" }}>Polymorphism</li>
                                <li style={{ marginLeft: "2em" }}>Abstraction</li>
                                <li style={{ marginLeft: "2em" }}>Operator Overloading</li>
                                <li style={{ marginLeft: "2em" }}>Abstract Class</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarterPython