import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true
const VerifyEmail = () => {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [otpSent, setOptSent] = useState(false);
    const [msg, setMsg] = useState('Please verify your email first.');
    const [msg_type, setMsg_type] = useState('error');
    const navigate = useNavigate()
    const handleVerify = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8099/verifyOTP', { email: email, OTP: otp })
            .then(res => {
                console.log(res);
                if (res.data.forwarding) {
                    navigate(`/register/${email}`)
                }
            })
            .catch((err) =>
                console.log(err)
            );
    };

    const handleSentOTP = (e) => {
        e.preventDefault();
        if (!email) {
            alert("Enter email first..")
        }
        else axios.post('http://localhost:8099/verifyEmail', { email: email, otp: otp })
            .then(res => {
                console.log(res);
                setMsg(res.data.msg)
                setMsg_type(res.data.msg_type)
                setOptSent(res.data.otpSent)
            })
            .catch((err) =>
                console.log(err)
            );
    };

    return (
        <div className='container-fluid w-100 d-flex justify-content-center'>
            <div className='' style={{ maxWidth: "770px", minWidth: "350px" }}>
                <div className={`alert ${msg_type === 'error' ? 'alert-danger text-danger-emphasis' : 'alert-success text-success-emphasis'} my-3`}>
                    <i className="bi bi-exclamation-circle me-4"></i> {msg}
                </div>

                <div>
                    <form className='p-2 bg-white shadow'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} required />
                        </div>
                        {otpSent && <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Enter OTP</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={e => setOTP(e.target.value)} required />
                        </div>}
                        <div id="emailHelp" className="form-text mb-2">Never share your OTP details with anyone else.</div>
                        {!otpSent && <button type="button" className="btn btn-success w-100 rounded-0 my-1" onClick={handleSentOTP}>Send OTP</button>}
                        {otpSent && <button type="button" className="btn btn-success w-100 rounded-0 my-1" onClick={handleVerify}>Verify</button>}
                        <div id="emailHelp" className="form-text mt-2 text-center text-success">Already have an account? <Link to='/'>Login Here</Link>.</div>
                        <Link to='/'><button type="button" className="btn btn-primary rounded-0 w-100">Login</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
