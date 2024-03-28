import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
axios.defaults.withCredentials = true
const Register = () => {
    const [name, setName] = useState()
    const { email } = useParams()
    const [password, setPassword] = useState()
    const [cpassword, setCpassword] = useState()
    const [role, setRole] = useState(0)
    const [phone, setPhone] = useState()
    const [validation, setValidation] = useState(false)
    const [msg, setMsg] = useState()
    const [msg_type, setMsg_type] = useState()
    const handleRole = (e) => {
        axios.get('http://localhost:8099/getAdmin')
            .then(res => {
                console.log(res.data.validation)
                if (!res.data.validation) {
                    setRole('user')
                    setValidation(res.data.validation)
                }
                else {

                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect((e) => {
        axios.get('http://localhost:8099/getAdmin')
            .then(res => {
                if (!res.data.validation) {
                    setRole('user')
                    setValidation(res.data.validation)
                }
                else {
                    setRole(e.target.value)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleRegister = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8099/register/email`, { username: name, email: email, role: role, phone: phone, })
            .then(res => {
                console.log(res.data)
                setMsg(res.data.msg)
                setMsg_type(res.data.msg_type)
                if (res.data.msg_type == "good") {
                    setInterval(() => {
                        window.location.href = '/'
                    }, 2000)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='w-100 d-flex justify-content-center bg-light' style={{ height: "50vh", minWidth: "250px" }}>
            <div className='p-2 bg-light'>
                <h2 className='mb-2'>Register</h2>
                <form className='p-2 bg-white shadow' style={{ maxWidth: "650px", minWidth: "250px" }} onSubmit={handleRegister}>
                    {msg && <h5 className={`${msg_type == 'good' ? 'text-success' : 'text-danger'} text-center`}>{msg}</h5>}

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setName(e.target.value)} required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} disabled required />
                    </div>
                    {/* <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setCpassword(e.target.value)} required />
                    </div> */}
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Role</label>
                        <select type="text" class="form-control" id="exampleInputEmail1" value={role} aria-describedby="emailHelp" onChange={e => setRole(e.target.value)} required aria-selected={role}>
                            <option value={0} disabled>Choose Role</option>
                            <option value='admin' disabled={role == 'user' ? true : false}>Admin</option>
                            <option value='user'>User</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setPhone(e.target.value)} required />
                    </div>
                    <div id="emailHelp" class="form-text mb-2">We'll never share your personal details with anyone else.</div>
                    <button type="submit" class="btn btn-success w-100 rounded-0 my-1">Register</button>
                    <div id="emailHelp" class="form-text mt-2 text-center text-success">Have Account ? Login Here.</div>
                    <div type="submit" class="btn btn-primary rounded-0 w-100">Login</div>
                </form>
            </div>
        </div>
    )
}

export default Register