import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const Expert = () => {
  const [id, setId] = useState(8)
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
        <title>B2A-Machine Learning</title>
        <meta name='keywords' content="Python Machine Learning, Machine Learning Algorithms in Python, Python ML Libraries, Python Scikit-learn, Machine Learning Models in Python, Python ML Tutorials, Python ML Projects" />
        <meta name='description' content='Machine learning empowers computers to learn from data and improve over time without being explicitly programmed.' />
      </Helmet>
      <center><h3>Machine Learning</h3> </center>
      <hr />
      <div className='p-2 my-2 rounded-2 base_for_levels_description' style={{ minHeight: "80vh", overflowX: 'auto' }}>
        <div>
          <p>Machine learning empowers computers to learn from data and improve over time without being explicitly programmed. It's the driving force behind personalized recommendations on streaming platforms, predictive maintenance in industries, and autonomous vehicles. With machine learning, you dive into algorithms that enable computers to make data-driven decisions, revolutionizing various fields like healthcare, finance, and marketing.</p>
          <div>
            {/* <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Machine Learning</b></div> */}
            <div className='pe-2 mb-1 mt-2 text-uppercase d-flex align-items-center justify-content-between w-100' style={{ width: "fit-content", background: "#2e8c45", color: "white" }}><div className='d-flex align-items-center justify-content-start'><button className='bg-white' style={{ width: "20px", height: "10px", border: "0px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></button><b className='ms-4 fs-4'>Machine Learning</b></div>
              <span>
                {msg ? <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => alert("Files Doesn't Exists")}>{msg}</button> : <button className='btn fs-6 fw-bolder handleDownloadBtn' onClick={e => loggedIn ? handleDownload("You can Download the Content") : handleDownload("You can not Download the Content")}>Download Notes</button>}{isAdmin ? <button className='btn btn-outline-dark py-0 rounded-0 mx-2 text-white border border-white' onClick={e => handleRoute('upload_file/pdf', 'Machine Learning')}>Upload</button> : ''}
              </span>

            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Neural Network</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>What is Neural Network?</li>
                <li style={{ marginLeft: "2em" }}>Types of Learning</li>
                <li style={{ marginLeft: "2em" }}>Confusion Matrix</li>
                <li style={{ marginLeft: "2em" }}>Linear Regeression</li>
              </ul>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Regression</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>Bagger </li>
                <li style={{ marginLeft: "2em" }}>Gradient Boosting</li>
                <li style={{ marginLeft: "2em" }}>Linear</li>
                <li style={{ marginLeft: "2em" }}>Decision Tree</li>
                <li style={{ marginLeft: "2em" }}>Random Forest</li>
                <li style={{ marginLeft: "2em" }}>Support Vector Machine Regression</li>
                <li style={{ marginLeft: "2em" }}>Polynomial Regression</li>
              </ul>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Classification Algorithms</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>Logistic </li>
                <li style={{ marginLeft: "2em" }}>KNN</li>
                <li style={{ marginLeft: "2em" }}>Naive Bayes</li>
                <li style={{ marginLeft: "2em" }}>Decision Tree</li>
                <li style={{ marginLeft: "2em" }}>Random Forest</li>
                <li style={{ marginLeft: "2em" }}>Support Vector Machine</li>
              </ul>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Clustering Algorithms</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>K-Mean </li>
                <li style={{ marginLeft: "2em" }}>Herarical </li>
              </ul>
            </div>
            <div className='ps-1'>
              <ul style={{ listStyleType: "none", borderTop: "1px solid " }} className='pb-1 '>
                {/* <li style={{ marginLeft: "1em", textIndent: "1em" }}>Python Basics</li> */}
                <li style={{ marginLeft: "-1em", color: "#2e8c45" }} className='fw-bold d-flex align-items-center'><button className='me-2' style={{ width: "12px", background: "#2e8c45", height: "5px", border: "0px", borderRadius: "10px" }}></button>Scaling</li>
              </ul>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ marginLeft: "2em" }}>SKLearn</li>
                <li style={{ marginLeft: "2em" }}>AllinOne Scaling</li>
                <li style={{ marginLeft: "2em" }}>Feature Scaling </li>
                <li style={{ marginLeft: "2em" }}>Label Encoding Scaling </li>
                <li style={{ marginLeft: "2em" }}>OneHotEncoder Scaling </li>
                <li style={{ marginLeft: "2em" }}>Train Test Split</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expert