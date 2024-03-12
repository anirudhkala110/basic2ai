import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

axios.defaults.withCredentials = true
const ForgotPass = () => {
    const [phone, setPhone] = useState()
    const [role, setRole] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [otpSent, setOptSent] = useState(false);
    const [msg, setMsg] = useState('Please verify your email first.');
    const [msg_type, setMsg_type] = useState('error');
    const [redirecting, setRedirecting] = useState(false)
    const navigate = useNavigate()
    const handleResetPassword = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8099/forgot_password', { email: email, phone: phone, role: role })
            .then(res => {
                console.log(res.data)
                if (res.data.msg_type === 'good') {
                    setRedirecting(true)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className=''>
            <div className='w-100  d-flex justify-content-center' style={{ height: "", minWidth: "350px" }}>
                <div className='w-50'>
                    <h2>Forgot Password Form</h2>
                    {!redirecting ? <form className='p-2 bg-white shadow' onSubmit={handleResetPassword}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setPhone(e.target.value)} required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Role</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setRole(e.target.value)} required />
                        </div>
                        <button type="submit" class="btn btn-success w-100 rounded-0 my-1">Reset Password</button>
                        <hr />
                        <div id="emailHelp" class="form-text mt-2 text-center text-success">Don't have an account ? Register Here.</div>
                        <Link to='/'><div type="submit" class="btn btn-dark rounded-0 w-50">Login</div></Link>
                        <Link to='/verifyEmail'><div type="submit" class="btn btn-primary rounded-0 w-50">Register</div></Link>
                    </form> : <div>Check the Gmail, and follow the instructions.</div>}
                </div>
            </div>
        </div>
    )
}

export default ForgotPass