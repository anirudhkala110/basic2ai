import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

axios.defaults.withCredentials = true
const NewPassword = () => {
    const [validated, setValidated] = useState(false)
    const { forgottoken } = useParams()
    const [msg, setMsg] = useState()
    const [msg_type, setMsg_type] = useState()
    const [password, setPassword] = useState()
    const [cpassword, setCpassword] = useState()
    const [id, setId] = useState()
    useEffect(() => {
        axios.get(`http://localhost:8099/forgotlinkChk/${forgottoken}`)
            .then(res => {
                setValidated(res.data.validated)
                setId(res.data.id)
            })
            .catch(err => {
                console.log(err)
            })

    })
    const navigate = useNavigate()
    const handleUpdatePass = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8099/reset_password/${id}/${forgottoken}`, { password: password, cpassword: cpassword })
            .then(res => {
                setMsg(res.data.msg)
                setMsg_type(res.data.msg_type)
                setInterval(() => {
                    navigate('/')
                }, 2500)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='w-100 d-flex justify-content-center'>
            {
                validated ? <div className='' style={{ maxWidth: "750px", minWidth: "250px" }}>
                    <center ><h3>Reset Password</h3></center>
                    <form className='p-2 bg-white shadow' style={{ maxWidth: "650px", minWidth: "250px" }} onSubmit={handleUpdatePass}>
                        {msg && <h5 className={`${msg_type == 'good' ? 'text-success' : 'text-danger'} text-center`}>{msg}</h5>}
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setCpassword(e.target.value)} required />
                        </div>
                        <button type="submit" class="btn btn-success w-100 rounded-0 my-1">Confirm</button>
                        <Link to='/' className='text-decoration-none'>
                            <div id="emailHelp" class="form-text mt-2 text-center text-success">Have Account ? Login Here.</div>
                            <div type="submit" class="btn btn-primary rounded-0 w-100">Login</div></Link>
                    </form>
                </div> : <div>Not Authorised</div>
            }
        </div>
    )
}

export default NewPassword