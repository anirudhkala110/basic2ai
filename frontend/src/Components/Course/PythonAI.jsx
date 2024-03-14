import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const PythonAI = () => {
  const [id, setId] = useState(9)
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
    <div className='p-2 my-2 fontFamily' style={{ minWidth: "250px" }}>
      <Helmet>
        <title>Basic 2 AI - Artificial Intelligence</title>
        <meta name='description' content="Python AI merges the power of Python programming with artificial intelligence techniques, making it a dynamic duo for solving complex problems. Whether you're creating chatbots for customer service, implementing natural language processing for sentiment analysis, or developing self-learning algorithms for predictive analytics, Python AI offers endless possibilities to explore the realm of intelligent systems." />
        <meta name='keywords' content='Image Processing in Python, Python Image Processing Libraries, Python OpenCV, Image Processing Techniques in Python, Python Image Analysis, Image Manipulation with Python' />
      </Helmet>
      <center><h3>Artificial Intelligence</h3> </center>
      <hr />
      <div className='p-2 my-2 rounded-2 base_for_levels_description' style={{ minHeight: "80vh", overflowX: 'auto' }}>
        <div>
          <p>Python AI merges the power of Python programming with artificial intelligence techniques, making it a dynamic duo for solving complex problems. Whether you're creating chatbots for customer service, implementing natural language processing for sentiment analysis, or developing self-learning algorithms for predictive analytics, Python AI offers endless possibilities to explore the realm of intelligent systems.</p>
          <div>
            {/* <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Python & AI</b></div> */}
            <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center justify-content-between w-100' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><div className='d-flex align-items-center justify-content-start'><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Python & AI</b></div>
              <span>
                {msg ? <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => alert("Files Doesn't Exists")}>{msg}</button> : <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => loggedIn ? handleDownload("You can Download the Content") : handleDownload("You can not Download the Content")}>Download Notes</button>}{isAdmin ? <button className='btn btn-outline-dark py-0 rounded-0 mx-2 text-white border border-white' onClick={e => handleRoute('upload_file/pdf', 'Python in A.I')}>Upload</button> : ''}
              </span>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Introduction to AI</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>What is AI?</li>
                <li style={{ marginLeft: "2em" }}>Subsets of AI</li>
              </ul>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Natural Language Programming</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>NLP from Sktrach</li>
              </ul>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>TensorFlow</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>TensorFlow from Skratch</li>
              </ul>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>GPU TensorFlow</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>TensorFlow on GPU</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PythonAI