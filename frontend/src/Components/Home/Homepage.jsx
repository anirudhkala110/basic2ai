import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import logo2 from '../../Utils/Logo/logo2.png'
import installation from './Images/installingPython.jpg'
import StarterPython from './Images/Startprograming.png'
import automation from './Images/PythonAutomation.jfif'
import webScraping from './Images/Webscraping.png'
import sql from './Images/SQL.png'
import pythonAI from './Images/AI.jpeg'
import advancedPython from './Images/advancedPython.png'
import imageProcessing from './Images/imageProcessing.jfif'
import machineLearning from './Images/MachineLearning.jpg'
// import sampleUpdate from './Images/SmapleUpdate.mp4'
import VideoComponent from './VideoComponent'
import Typewriter from '../../Utils/Typewriter'
import { Helmet } from 'react-helmet'

const Homepage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const paragraphs = [
    "From grasping the basics of Python syntax and data types to navigating more intricate concepts like functions and modules, the journey from a novice to an expert in Python is a captivating one. At the basic level, learners acquaint themselves with the core elements of Python, understanding how to structure code and execute simple programs. Progressing to an intermediate stage, they delve deeper into topics such as file handling and exception handling, honing their skills in building more robust applications. As proficiency grows, so does the complexity of the challenges tackled. Advanced Python enthusiasts explore sophisticated language features like decorators and generators, striving for code elegance and efficiency.",
    "The realm of web development beckons, beckoning adventurers to explore frameworks like Django and Flask, where they craft dynamic and interactive web applications. Beyond traditional domains, Python enthusiasts often specialize in niche areas like data science or machine learning, where they harness powerful libraries and frameworks tailored to their specific needs. With each level of expertise attained, from basic proficiency to specialized mastery, the allure of Python's versatility and elegance continues to inspire learners on their quest for knowledge and innovation.",
    "Pythonic practices become ingrained, guiding developers toward writing idiomatic code that adheres to community standards and enhances readability. Object-oriented programming principles come to the forefront, empowering developers to design scalable and maintainable solutions by leveraging concepts like encapsulation and inheritance. Mastery extends to data structures and algorithms, as practitioners delve into efficient methods for organizing and manipulating data. Concurrency and parallelism open up new avenues, enabling developers to optimize performance by executing tasks concurrently or in parallel."
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const navigate = useNavigate()
  const handleTab = (index) => {
    navigate(`/course/${index + 1}`)
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % paragraphs.length);
    }, 5000);

    return () => clearInterval(intervalId);
  });
  function truncateString(str, length) {
    let final = ''
    if (str.length <= length) {
      return str;
    } else {
      final = str.slice(0, length) + '...';
      return final
    }
  }
  return (
    <div className='w-100' style={{ minWidth: "255px", minHeight: "90vh", overflowY: "auto", background: "white" }}>
      <Helmet>
        <title>B2A- Homepage</title>
        <meta name='description' content="Python programming, Python courses, Python tutorials, Python classes, Python training, Python coaching, Learn Python, Python certification, Python bootcamp, Online Python courses, Python for beginners, Advanced Python, Python workshops, Python coding academy, Python mentorship, Python development courses, Python coding school, Python crash course, Python coding camps, " />
        <meta name='keywords' content='Natural Language Processing (NLP), Machine Learning (ML), Deep Learning, Neural Networks (NN), Artificial Intelligence (AI), Data Science, Data Analysis, Data Visualization, Web Scraping, Automation, Computer Vision, Image Processing, Sentiment Analysis, Chatbots, Recommender Systems, Text Mining, Speech Recognition, Time Series Analysis, Reinforcement Learning, Predictive Modeling' />
      </Helmet>
      <center>
        <h2 className='w-100'><Typewriter /></h2>
      </center>
      <marquee className="hide-1000 py-2 my-2" behavior="alternate" direction="left" scrollamount={0} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="d-flex text-white marqueBehaviour justify-content-between align-items-center " style={{ width: "350px" }}>
          <div className='p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(0)}>
            Basic Setup &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(1)}>
            Starter Python &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(2)}>
            Python Automation &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(3)}>
            Advanced Python &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(4)}>
            SQL in Python &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(5)}>
            Python Webscrapping &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(6)}>
            Machine Learning &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(7)}>
            Python AI &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-3 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(8)}>
            Image Processing &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
        </div>
      </marquee>
      <div className=''>
        <VideoComponent />
      </div>
      <div className='backiBase shadow' style={{ width: "", minHeight: "250px", maxHeight: "" }}>
        <div className='p-2 container-fluid'>
          <div className='' style={{ position: "static" }}>
            <div className='backiBase' style={{ color: "" }}>
              <div className={`p-2 fade-in-out backi text-white  ${currentIndex === 0 ? 'fade-in' : ''}`}>
                From grasping the basics of Python syntax and data types to navigating more intricate concepts like functions and modules, the journey from a novice to an expert in Python is a captivating one. At the basic level, learners acquaint themselves with the core elements of Python, understanding how to structure code and execute simple programs. Progressing to an intermediate stage, they delve deeper into topics such as file handling and exception handling, honing their skills in building more robust applications. As proficiency grows, so does the complexity of the challenges tackled. Advanced Python enthusiasts explore sophisticated language features like decorators and generators, striving for code elegance and efficiency.
              </div>
              <div className={`p-2 fade-in-out backi text-white ${currentIndex === 1 ? 'fade-in' : ''}`}>
                The realm of web development beckons, beckoning adventurers to explore frameworks like Django and Flask, where they craft dynamic and interactive web applications. Beyond traditional domains, Python enthusiasts often specialize in niche areas like data science or machine learning, where they harness powerful libraries and frameworks tailored to their specific needs. With each level of expertise attained, from basic proficiency to specialized mastery, the allure of Python's versatility and elegance continues to inspire learners on their quest for knowledge and innovation.
              </div>
              <div className={`p-2 fade-in-out backi text-white ${currentIndex === 2 ? 'fade-in' : ''}`}>
                Pythonic practices become ingrained, guiding developers toward writing idiomatic code that adheres to community standards and enhances readability. Object-oriented programming principles come to the forefront, empowering developers to design scalable and maintainable solutions by leveraging concepts like encapsulation and inheritance. Mastery extends to data structures and algorithms, as practitioners delve into efficient methods for organizing and manipulating data. Concurrency and parallelism open up new avenues, enabling developers to optimize performance by executing tasks concurrently or in parallel.
              </div>
            </div>
          </div>
        </div>
      </div>
      <marquee className="show-1000 py-2 my-2" behavior="alternate" direction="left" scrollamount={`${isHovered ? '0' : "2"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="d-flex text-white marqueBehaviour justify-content-between align-items-center " style={{ width: "fit-content" }}>
          <div className='p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(0)}>
            Basic Setup &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(1)}>
            Starter Python &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(2)}>
            Python Automation &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(3)}>
            Advanced Python &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(4)}>
            SQL in Python &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(5)}>
            Python Webscrapping &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(6)}>
            Machine Learning &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(7)}>
            Python AI &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
          <div className=' p-2 ps-4 subTabsHomeMarquee mx-5' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(8)}>
            Image Processing &nbsp;&nbsp;&nbsp;-<i class="bi bi-arrow-right text-white">&nbsp;&nbsp;</i>
          </div>
        </div>
      </marquee>
      <div className='container shadow p-2 rounded bg-white' style={{ background: "#58575794" }}>
        <div className='row col-12 mx-1 '>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(0)}>
              <img src={installation} style={{ width: "100%", height: "200px" }} /> <hr /> <h3>Basic Setup</h3>
              <br />{truncateString('Basic Python covers essential concepts and constructs of the Python programming language, including variables, loops, conditionals, and functions.', 60)}
            </div>
          </div>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(1)}>
              <img src={StarterPython} style={{ width: "100%", height: "200px" }} /> <hr /> <h3>Starter Python</h3>
              <br />{truncateString('Starter Python provides an introduction to the fundamentals of programming using Python, making it accessible to beginners.', 60)}
            </div>
          </div>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(2)}>
              <img src={automation} style={{ width: "100%", height: "200px" }} /> <hr /> <h3>Python Automation</h3>
              <br />
              {truncateString('Python automation streamlines repetitive tasks by writing scripts that perform actions automatically, saving time and effort.', 60)}
            </div>
          </div>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(3)}>
              <img src={webScraping} style={{ width: "100%", height: "200px" }} /> <hr /> <h3>Webscrapping</h3>
              <br />{truncateString('Python web scraping empowers you to extract data from websites efficiently, automating the process of gathering information for analysis or research', 60)}
            </div>
          </div>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(4)}>
              <img src={sql} style={{ width: "100%", height: "200px" }} /> <hr /> <h3>SQL in Python</h3>
              <br />{truncateString('Integrating SQL with Python allows seamless interaction with databases, enabling data retrieval, manipulation, and analysis.', 60)}
            </div>
          </div>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(5)}>
              <img src={advancedPython} style={{ width: "100%", height: "200px" }} /> <hr /> <h3>Advanced Python</h3>
              <br />{truncateString("Advanced Python delves deeper into the language's capabilities, covering topics like metaprogramming, decorators, and asynchronous programming.", 60)}
            </div>
          </div>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(6)}>
              <img src={imageProcessing} style={{ width: "100%", height: "200px" }} /> <hr /> <h3>Image Processing</h3>
              <br />{truncateString("Did you know that image processing is used in medical imaging to detect diseases like cancer at an early stage? It's also essential in satellite imagery for weather forecasting and environmental monitoring.", 60)}
            </div>
          </div>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(7)}>
              <img src={machineLearning} style={{ width: "100%", height: "200px" }} /> <hr /> <h3>Machine Learning</h3>
              <br />{truncateString("Machine learning empowers computers to learn from data and improve over time without being explicitly programmed.", 60)}
            </div>
          </div>
          <div className='col-sm-12 col-lg-3 col-md-6 p-1 g-sm-1 g-lg-2 g-md-2 g-xl-3 g-xxl-3 border-0'>
            <div className='card p-2 subTabsHome' style={{ background: "transparent", cursor: "pointer" }} onClick={e => handleTab(8)}>
              <img src={pythonAI} style={{ width: "100%", height: "200px" }} />
              <hr />
              <h3>Python AI</h3>
              <br />{truncateString("Python AI merges the power of Python programming with artificial intelligence techniques, making it a dynamic duo for solving complex problems.", 60)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
