import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const Advanced = () => {
  const [id, setId] = useState(6)
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
        <title>B2A-Advanced Python</title>
        <meta name='description' content="Advanced Python delves deeper into the language's capabilities, covering topics like metaprogramming, decorators, and asynchronous programming." />
        <meta name='keywords' content='Python Pandas, Python NumPy, Python Regression, Python Clustering, Advanced Python Techniques, Python Data Analysis, Python Data Science, Python Machine Learning, Advanced Python Libraries' />
      </Helmet>
      <center><h3>Advanced Python</h3> </center>
      <hr />
      <div className='p-2 my-2 rounded-2 base_for_levels_description' style={{ minHeight: "78vh", overflowX: 'auto' }}>
        <div>
          <p>Advanced Python delves deeper into the language's capabilities, covering topics like metaprogramming, decorators, and asynchronous programming. It enables you to write cleaner, more efficient code, optimize performance, and tackle complex challenges with elegance. By mastering advanced Python concepts, you elevate your programming skills to a professional level, unlocking new opportunities in software development and engineering.</p>
          <div>
            {/* <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Data ToolKit</b></div> */}
            <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center justify-content-between w-100' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><div className='d-flex align-items-center justify-content-start'><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Data ToolKit</b></div>
              <span>
                {msg ? <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => alert("Files Doesn't Exists")}>{msg}</button> : <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => loggedIn ? handleDownload("You can Download the Content") : handleDownload("You can not Download the Content")}>Download Notes</button>}{isAdmin ? <button className='btn btn-outline-dark py-0 rounded-0 mx-2 text-white border border-white' onClick={e => handleRoute('upload_file/pdf', 'Advanced Python')}>Upload</button> : ''}
              </span>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Getting Started with Files</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>Reading Data from the text file</li>
                <li style={{ marginLeft: "2em" }}>Writing Data on text file </li>
              </ul>
            </div>
            <div className='ps-1 '>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Mastering Numpy Arrays</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>Getting Started with Numpy</li>
                <li style={{ marginLeft: "2em" }}>Reshape and Random Number Generator</li>
                <li style={{ marginLeft: "2em" }}>Arithmetic Operations on Arrays </li>
                <li style={{ marginLeft: "2em" }}>Arithmetic Operations on multiple Arrays </li>
                <li style={{ marginLeft: "2em" }}>Array Sorting</li>
                <li style={{ marginLeft: "2em" }}>Array Merging</li>
                <li style={{ marginLeft: "2em" }}>Array Slicing</li>
                <li style={{ marginLeft: "2em" }}>Automating Using Numpy</li>
              </ul>
            </div>
            <div className='ps-1 '>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Getting Started with OS</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>OS library in Python</li>
                <li style={{ marginLeft: "2em" }}>OS Library - List Directories  </li>
                <li style={{ marginLeft: "2em" }}>OS Library - Bulk Directories Creation </li>
                <li style={{ marginLeft: "2em" }}> OS Library - Hierarchical Bulk Directories Creation </li>
                <li style={{ marginLeft: "2em" }}>Bulk Text-file Reading  </li>
                <li style={{ marginLeft: "2em" }}>Continue in Python</li>
                <li style={{ marginLeft: "2em" }}>Bulk Text-file Data Combining </li>
              </ul>
            </div>
            <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Data Analysis with Pandas</b></div>
            <div className='ps-1 '>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Getting Started with Pandas</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>Pandas library in Python</li>
                <li style={{ marginLeft: "2em" }}>Dataframes </li>
                <li style={{ marginLeft: "2em" }}>Mean, Median and Mode</li>
                <li style={{ marginLeft: "2em" }}>Standard Deviation and Variance</li>
                <li style={{ marginLeft: "2em" }}>Normal Distribution</li>
              </ul>
            </div>
            <div className='ps-1 '>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Data Preprocessing</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>Data Preprocessing - Removing Null Values</li>
                <li style={{ marginLeft: "2em" }}>Data Analysis - Numerical </li>
                <li style={{ marginLeft: "2em" }}>Null Values Handling - Numerical</li>
                <li style={{ marginLeft: "2em" }}>Null Values Handling - Categorical</li>
                <li style={{ marginLeft: "2em" }}>Data Analysis with Multiple Columns </li>
                <li style={{ marginLeft: "2em" }}>Groupby in Pandas </li>
                <li style={{ marginLeft: "2em" }}>Creating and Reading Different Types of Files </li>
              </ul>
            </div>
            <div className='ps-1 '>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Aggregation</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>What is Aggregation?</li>
                <li style={{ marginLeft: "2em" }}>Min, Max, Sum, Avg</li>
                <li style={{ marginLeft: "2em" }}>Count, Distinct</li>
                <li style={{ marginLeft: "2em" }}>Orderby</li>
                <li style={{ marginLeft: "2em" }}>Groupby</li>
                <li style={{ marginLeft: "2em" }}>Sorting</li>
              </ul>
            </div>
            <div className='ps-1 '>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Joins</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>What is Joins?</li>
                <li style={{ marginLeft: "2em" }}>Types of Joins</li>
                <li style={{ marginLeft: "2em" }}>Left Join</li>
                <li style={{ marginLeft: "2em" }}>Right Join</li>
                <li style={{ marginLeft: "2em" }}>Inner Join</li>
                <li style={{ marginLeft: "2em" }}>Outer Join</li>
                <li style={{ marginLeft: "2em" }}>Natural Join</li>
              </ul>
            </div>
            <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Plots</b></div>
            <div className='ps-1 '>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1'>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Designing Plots</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>Matplotlib - PyPlot</li>
                <li style={{ marginLeft: "2em" }}>Box and Whisker Plot</li>
                <li style={{ marginLeft: "2em" }}>Combo Charts</li>
                <li style={{ marginLeft: "2em" }}>Pie Chart</li>
                <li style={{ marginLeft: "2em" }}>Contour Plot</li>
                <li style={{ marginLeft: "2em" }}>Scatter Plot</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advanced