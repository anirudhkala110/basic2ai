import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

axios.defaults.withCredentials = true

const Login = () => {
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [role, setRole] = useState()
    const [password, setPassword] = useState()
    const [msg, setMsg] = useState()
    const [msg_type, setMsg_type] = useState('error')
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8099/login', { email: email, password: password })
            .then(res => {
                if (res.data.msg_type === 'good') {
                    window.location.href = '/home'
                }
                else {
                    setMsg(res.data.msg)
                    setMsg_type(res.data.msg_type)
                    setInterval(() => {
                        setMsg(null)
                    }, 2000)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleResetPassword = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8099/forgot_password', { email: email })
            .then(res => {
                if (res.data.msg_type === 'good') {
                    navigate('/home')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='w-100  d-flex justify-content-center' style={{ minHeight: "85vh", minWidth: "350px" }}>
            <div className='w-50'>
                <h1>Login Form</h1>
                <form className='p-2 bg-white shadow' onSubmit={handleLogin}>
                    {msg && <center className='text-danger'>{msg}</center>}
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div id="emailHelp" class="form-text mb-2">We'll never share your personal details with anyone else.</div>
                    <button type="submit" class="btn btn-success w-100 rounded-0 my-1">Login</button>
                    <div id="emailHelp" class="form-text text-center text-success" onClick={e => handleResetPassword}></div>
                    {/* <Link to='/forgot_password' className='text-decoration-none'><div type="submit" class="text-danger text-center rounded-0 w-100">Don't remeber password ? Reset Here.</div></Link> */}
                    <Link to='/verifyEmail'><div type="submit" class="btn mt-2 btn-primary rounded-0 w-100">Register</div></Link>
                    <div id="emailHelp" class="form-text  text-center text-success">Don't have an account ? Register Here.</div>
                </form>
            </div>
        </div>
    )
}

export default Login