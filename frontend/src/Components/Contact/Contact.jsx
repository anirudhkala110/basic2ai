import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import help from '../Contact/helphand.png';
import axios from 'axios'
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';
import csc from './Customer_service_chat.gif'

axios.defaults.withCredentials = true
const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [name, setName] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [query, setQuery] = useState()
    const [finalquery, setFQuery] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [id, setId] = useState()
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const handleSubmit = (e) => {
        setDate(currentDate)
        setTime(currentTime)
        setId(Date.now())
        e.preventDefault();
        if (name === '' || !name || mobile === '' || !mobile || email === '' || !email || query === '' || !query) {
            alert("Please Enter All the Fields")
        }
        else {
            axios.post('https://localhost8099/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
                //   axios.post('https://api.legalbrother.in/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
                .then(res => {
                    console.log(res)
                    if (res.data.success) {
                        alert("Your  Query Has been saved.\nNow you are redirecting to the Homepage. . .")
                        window.location.href = '/'
                    }
                    else {
                        alert("Sorry, not able to send your query.\nTry again after some time.")
                    }
                })
                .catch(err => console.log(err))
            emailjs.sendForm('service_j5cbb74', 'template_x4fuopb', form.current, 'hSXZGZXrCPMp3p6wt')
                .then((result) => {
                    alert("Your  Query Has been saved.\nNow you are redirecting to the Homepage. . .")
                    navigate('/')
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    const handleButtonClick = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleQuery = (e) => {
        setQuery(e.target.value)
        setDate(currentDate)
        setTime(currentTime)
        setFQuery(name + "\n" + email + "\n" + mobile + "\n" + date + "\n" + time + "\n" + 'Message is : ' + e.target.value)
    }

    return (
        <>
            <Helmet>
                <title>Contact Us</title>
                <meta name='description' content='' />
                <meta name='keywords' content='' />
            </Helmet>
            <div className="bg-white">
                <center className="fs-4 text-primary bg-white border-bottom py-3">Contact Us</center>
                <div className="px-5 py-1 container" style={{ background: "rgba(0, 0, 0, 5%)", minHeight: "100vh" }}>
                    <div className="my-3">
                        <i className="bi bi-exclamation-triangle-fill text-warning me-1"></i> If you have any questions or require our assistance, please don't hesitate to get in touch with <b>B 2 A</b>. We are here to help you.
                    </div>
                    <hr className="" style={{ color: "black" }} />
                    <div className="row col-12 contactUsBG">
                        <div className="border bg-white col-lg-6 col-xl-6 my-2 py-2 col-sm-12 d-flex align-items-center justify-content-center " style={{ minHeight: "" }}>
                            <img src={csc} className="border shadow rounded border-secondary contactUsBG" style={{ width: "100%" }} alt="Contact Us at 7668490213" />
                        </div>
                        <div className="container border pt-3 col-lg-6 col-xl-6 my-2 py-2 col-sm-12 pb-1 bg-white">
                            <form onSubmit={(e) => handleSubmit(e)} ref={form} >
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="formGroupName">Name</label>
                                    <input type="text" className="form-control rounded-0" id="formGroupName" placeholder="Your Valid Name" name="user_name" value={name} onChange={e => setName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="formGroupMobile">Mobile Number</label>
                                    <input type="number" className="form-control rounded-0" id="formGroupMobile" placeholder="Mobile Number" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="formGroupEmail">Email Address</label>
                                    <input type="email" className="form-control rounded-0" id="formGroupEmail" placeholder="Email Address" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fw-bold" htmlFor="formGroupQuery">Query / Information / Problem / Suggestion</label>
                                    <textarea
                                        type="text"
                                        className="form-control rounded-0"
                                        cols={30}
                                        rows={5}
                                        style={{ resize: "none" }}
                                        id="formGroupQuery"
                                        value={query}
                                        onChange={e => handleQuery(e)}
                                        placeholder="Enter your query here" required
                                    />
                                    <textarea name="message" value={finalquery} style={{ display: "none" }} />
                                </div>
                                <button className="btn border-0 rounded-0 mb-2 send-mail" value="Send">Send Mail</button>
                                <button className="btn border-0 rounded-0 ms-2 mb-2 call-btn" id="call" onClick={() => handleButtonClick(7668490213)}>Make a Call</button>
                                <Link to="/" className="text-decoration-none">
                                    <button className="btn ms-2 border-0 rounded-0 mb-2 back-home">Back to Home</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;