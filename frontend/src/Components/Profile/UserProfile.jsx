import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../App';
import { Helmet } from 'react-helmet';

axios.defaults.withCredentials = true
const UserProfile = () => {
    const [course, setCourse] = useState(0);
    const [dataAva, setDataava] = useState()
    const user = useContext(userContext)
    const [valid, setValid] = useState(null)
    const [msg, setMsg] = useState('Token is not available')
    const [msg_type, setMsg_type] = useState()
    const [logoutHide, setLogoutHide] = useState(true)
    const [isAdmin, setIsadmin] = useState(false)
    const [basic, setBasic] = useState(null)
    const [advanced, setAdv] = useState(null)
    const [expert, setExp] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:8099/loggin')
            .then(res => {
                if (res.data.msg === 'Token is not available') {
                    setLogoutHide(false)
                }
                else {
                    if (res.data.role === 'admin') {
                        setIsadmin(true)
                    }
                    else {
                        setIsadmin(false)
                    }
                    setMsg(res.data.msg)
                }
            })
            .catch(err => console.log(err))
    })
    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8099/update_register_courses', { course: course })
    //         .then(res => {
    //             alert(res.data.msg);
    //             setMsg(res.data.msg)
    //             setMsg_type(res.data.msg_type)
    //             window.location.reload(true)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };
    useEffect(() => {
        axios.get('http://localhost:8099/registration_data')
            .then(res => {
                console.log(res.data)
                if (res.data.msg === "Data not available" || res.data.msg_type === 'error') {
                    setBasic(false)
                    setAdv(false)
                    setExp(false)
                    setValid(0)
                    // alert("Your Account is not verified at administerator Level please contact them.")
                }
                else {
                    setBasic(res.data.basic)
                    setAdv(res.data.advanced)
                    setExp(res.data.expert)
                    setValid(res.data.valid)
                }
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            <div className='userProfileBase p-2'>
                {/* {user.role !== "admin" && <div className='w-100 me-1'>
                    <form className='p-2 border shadow ' style={{ height: '-webkit-fill-available' }}>
                        <center>Choose the Course</center>
                        <hr />
                        <select className='form-select' onChange={e => setCourse(e.target.value)} value={course}>
                            <option value={0} selected disabled>
                                <div className='form-group'>
                                    <input type="radio" id="basic" name="course" value="basic" className="form-check-input me-2 mb-2 " />
                                    <label htmlFor="basic" className="form-check-label">Select the Course below</label>
                                </div>
                            </option>
                            <option value={1}>
                                <div className='form-group'>
                                    <input type="radio" id="basic" name="course" value="basic" className="form-check-input me-2 mb-2 " />
                                    <label htmlFor="basic" className="form-check-label">Basic Course</label>
                                </div>
                            </option>
                            <option value={2}>
                                <div className='form-group'>
                                    <input type="radio" id="advanced" name="course" value="advanced" className="form-check-input me-2 mb-2 " />
                                    <label htmlFor="advanced" className="form-check-label">Advanced Course</label>
                                </div>
                            </option>
                            <option value={3}>
                                <div className='form-group'>
                                    <input type="radio" id="expert" name="course" value="expert" className="form-check-input me-2 mb-2 " />
                                    <label htmlFor="expert" className="form-check-label">Expert Course</label>
                                </div>
                            </option>
                            <option value={4}>
                                <div className='form-group'>
                                    <input type="radio" id="all" name="course" value="all" className="form-check-input me-2 mb-2 " checked={course.all} onChange={() => setCourse({ ...course, all: true })} />
                                    <label htmlFor="all" className="form-check-label">All Courses</label>
                                </div>
                            </option>
                        </select>
                        <hr />
                        <button onClick={handleUpdate} className="btn btn-primary" disabled={!valid}>Update Courses</button>
                    </form>
                    {msg && <center className={`${msg_type == 'good' ? 'text-success' : 'text-danger'}`} >{msg}</center>}
                </div>} */}
                <Helmet>
                    <title>B2A- User Profile</title>
                </Helmet>
                <div className='card py-2' style={{ minWidth: "250px" }}>
                    <div className='card-body'>
                        <p className='card-title text-center fs-3 fw-semibold'>User Profile</p>
                        <hr />
                        <p className='card-text fw-semibold'>Name: {user.username}</p>
                        <p className='fw-semibold'>Email: {user.email}</p>
                        <div className='card-footer'>
                            <p className='fw-semibold'>Role: <t className="text-uppercase">{user.role}</t></p>
                            <p className='fs-5'>Enrolled Account: {valid != 0 ? <i class="bi bi-bookmark-check-fill" style={{ color: "green" }}></i> : <i class="bi bi-ban-fill" style={{ color: 'red' }}></i>}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <center className='my-2 fs-3 fw-bolder'>
                    Your Details
                </center>
                <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <table className='table table-striped table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm table-responsive-xxl'>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Role</td>
                                <td>Verified</td>
                                <td>Basic Course</td>
                                <td>Advanced Course</td>
                                <td>Expert Course</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{valid != 0 ? <i class="bi bi-bookmark-check-fill" style={{ color: "green" }}></i> : <i class="bi bi-ban-fill" style={{ color: 'red' }}></i>}</td>
                                <td>
                                    <div className='w-50 d-flex align-items-center justify-content-center'>
                                        {basic != 0 ? <i class="bi bi-check2-all" style={{ color: "green" }}></i> : <i class="bi bi-ban-fill" style={{ color: 'red' }}></i>}
                                    </div>
                                </td>
                                <td>
                                    <div className='w-50 d-flex align-items-center justify-content-center'>
                                        {advanced != 0 ? <i class="bi bi-check2-all" style={{ color: "green" }}></i> : <i class="bi bi-ban-fill" style={{ color: 'red' }}></i>}
                                    </div>
                                </td>
                                <td>
                                    <div className='w-50 d-flex align-items-center justify-content-center'>
                                        {expert != 0 ? <i class="bi bi-check2-all" style={{ color: "green" }}></i> : <i class="bi bi-ban-fill" style={{ color: 'red' }}></i>}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
