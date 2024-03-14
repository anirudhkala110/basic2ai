import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useNavigationType } from 'react-router-dom'

const DatabaseConnection = () => {
    const [id, setId] = useState(5)
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
                <title>B2A - Python Connection with Database</title>
                <meta name='description' content="Integrating SQL with Python allows seamless interaction with databases, enabling data retrieval, manipulation, and analysis. Whether you're building web applications with Django or Flask, conducting data analysis with pandas, or developing machine learning models with scikit-learn, SQL in Python serves as a powerful tool for managing and querying structured data, enhancing your ability to extract valuable insights. " />
                <meta name='keywords' content='Python SQL, SQL in Python, Database Operations in Python, Python Database Connectivity, Python SQLite, Python MySQL, Python PostgreSQL, Database Queries in Python' />
            </Helmet>
            <center><h3>Python + Database</h3> </center>
            <hr />
            <div className='p-2 my-2 rounded-2 base_for_levels_description' style={{ minHeight: "80vh", overflowX: 'auto' }}>
                <div>
                    <p>Integrating SQL with Python allows seamless interaction with databases, enabling data retrieval, manipulation, and analysis. Whether you're building web applications with Django or Flask, conducting data analysis with pandas, or developing machine learning models with scikit-learn, SQL in Python serves as a powerful tool for managing and querying structured data, enhancing your ability to extract valuable insights.</p>
                    <div>
                        {/* <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>SQL</b></div> */}
                        <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center justify-content-between w-100' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><div className='d-flex align-items-center justify-content-start'><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>SQL</b></div>
                            <span>
                                {msg ? <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => alert("Files Doesn't Exists")}>{msg}</button> : <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => loggedIn ? handleDownload("You can Download the Content") : handleDownload("You can not Download the Content")}>Download Notes</button>}{isAdmin ? <button className='btn btn-outline-dark py-0 rounded-0 mx-2 text-white border border-white' onClick={e => handleRoute('upload_file/pdf', 'Python + Database')}>Upload</button> : ''}
                            </span>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>DBMS</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Database</li>
                                <li style={{ marginLeft: "2em" }}>Relational and Non- Relational Database</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Installing MYSQL</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Installing the MYSQL in Windows</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Introduction to SQL</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>What is SQL?</li>
                                <li style={{ marginLeft: "2em" }}>Basic Terminologies</li>
                                <li style={{ marginLeft: "2em" }}>ER Diagram</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Creating Tables and Databases</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Creating a Database</li>
                                <li style={{ marginLeft: "2em" }}>Creating a Table</li>
                                <li style={{ marginLeft: "2em" }}>What is a Schema?</li>
                            </ul>
                        </div>
                        <div className='ps-1 '>
                            <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Operations on data in Database/Tables</li>
                            </ul>
                            <ul style={{ listStyleType: "square" }}>
                                <li style={{ marginLeft: "2em" }}>Instering Data</li>
                                <li style={{ marginLeft: "2em" }}>Retrieving Data</li>
                                <li style={{ marginLeft: "2em" }}>Datatypes</li>
                                <li style={{ marginLeft: "2em" }}>Constraints (NOT NULL, PRIMARY KEY, UNIQUE, FOREIGN KEY, CHECK, DEFAULT)</li>
                                <li style={{ marginLeft: "2em" }}>Updating Data (SELECT CLAUSE, WHERE, AND & OR, LIKE, TOP, DELETE)</li>
                                <li style={{ marginLeft: "2em" }}>Arithmetic, Comparision, Logical Oprations </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatabaseConnection