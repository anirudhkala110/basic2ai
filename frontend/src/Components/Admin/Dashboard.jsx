import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../App';

const Dashboard = () => {
    const [dataFetch, setDataFetch] = useState(null)
    const [msg, setMsg] = useState()
    const [msg_type, setMsg_type] = useState()
    const [title, setTitle] = useState()
    const [verified, setVerified] = useState(false)
    const [course, setCourse] = useState(0);
    const user = useContext(userContext)
    const [valid, setValid] = useState(null)
    const [basic, setBasic] = useState(false)
    const [advanced, setAdv] = useState(false)
    const [expert, setExp] = useState(false)
    const [regiData, setRegiData] = useState()
    const [type, setType] = useState()
    const handleGetData = (getData) => {
        axios.get(`http://localhost:8099/get_data_to_admin/${getData}`)
            .then(res => {
                if (!res.data.data) {
                    // alert("No Data Found")
                    console.log(res.data)
                    setMsg(res.data.msg)
                    setMsg_type(res.data.msg_type)
                    setDataFetch(false)
                }
                else {
                    // console.log(res.data)
                    setMsg(res.data.msg)
                    setDataFetch(res.data.data)
                    setVerified(res.data.data.verified)
                }
            })
            .catch(err => {
                console.log(err)
            })

    }
    const handleVerified = (verify, data) => {
        setVerified(verify)
        // console.log(verify, data)
        axios.post('http://localhost:8099/setVerified', { verified: verify, email: data })
            .then(res => {
                // console.log(res.data.msg)
                setMsg(res.data.msg)
                setMsg_type(res.data.msg_type)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleUpdate = (EMAIL, course, role, type) => {
        console.log(EMAIL, course, role)
        axios.post('http://localhost:8099/update_register_courses/admin', { email: EMAIL, course: course, role: role, type: type })
            .then(res => {
                // alert(res.data.msg);
                setMsg(res.data.msg)
                setMsg_type(res.data.msg_type)
                window.location.reload(true)
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div className='my-2 border' style={{ minHeight: "85vh", minWidth: '250px' }}>
            <h1>Dashboard</h1>
            <div className='dashboard align-items-start' >
                <div className='childDash' >
                    <button className='subTabs w-100 mb-3 childDashBtn' onClick={e => { handleGetData('admin') && setTitle('Admins') }}>Admins</button>
                    <button className='subTabs w-100 mb-3 childDashBtn' onClick={e => handleGetData('user') && setTitle('All Users')}>Users</button>
                    <button className='subTabs w-100 mb-3 childDashBtn' onClick={e => handleGetData('regEnrolled') && setTitle('Registered and Enrolled Users')}>Registered & Enrolled</button>
                    <button className='subTabs w-100 mb-3 childDashBtn' onClick={e => handleGetData('registered') && setTitle('Registered but Not Enrolled')}>Registered Not Enrolled</button>
                </div>
                {<center className={`my-2 shadow fs-4 fw-semibold text-danger`}>{msg ? msg : `Select One of the Above to get the data . . .`}</center>}
                <div className='table-responsive'>
                    {dataFetch &&
                        <table className='hideTable table table-hover'>
                            <thead>
                                <tr>
                                    <th scope="col" class="table-dark">Name</th>
                                    <th scope="col" class="table-dark">Email</th>
                                    <th scope="col" class="table-dark">Phone</th>
                                    <th scope="col" class="table-dark">Role</th>
                                    <th scope="col" class="table-dark">Verified/Enrolled</th>
                                    <th scope="col" class="table-dark">Action</th>
                                    <th scope="col" class="table-dark">Basic</th>
                                    <th scope="col" class="table-dark">Advanced</th>
                                    <th scope="col" class="table-dark">Expert</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataFetch.map((data, i) => (
                                        <tr key={i}>
                                            <td>{data.username}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.role}</td>
                                            <td>{data.verified ? 'Yes' : 'No'}</td>
                                            <td>
                                                {data.email !== "anirudhkala110@gmail.com" ? (
                                                    data.verified ? (
                                                        <button className='btn btn-outline-warning' onClick={e => handleVerified(!data.verified, data.email)}>Depricate</button>
                                                    ) : (
                                                        <button className='btn btn-danger' onClick={e => handleVerified(!data.verified, data.email)}>Enroll</button>
                                                    )
                                                ) : (
                                                    <button className='btn' disabled>Default</button>
                                                )}
                                            </td>
                                            <td>
                                                {user.role == "admin" && <div className='w-100 me-1'>
                                                    <button onClick={e => handleUpdate(data.email, data.basic, data.role, 1)} className={`btn ${data.basic ? 'btn-primary' : 'btn-danger'}`} disabled={!data.verified} >{user.role === 'admin' & data.basic ? 'Remove' : 'Grant'}</button>
                                                </div>}
                                            </td>
                                            <td>
                                                {user.role == "admin" && <div className='w-100 me-1'>
                                                    <button onClick={e => handleUpdate(data.email, data.advanced, data.role, 2)} className={`btn ${data.advanced ? 'btn-primary' : 'btn-danger'}`} disabled={!data.verified} >{user.role === 'admin' && data.advanced ? 'Remove' : 'Grant'}</button>
                                                </div>}
                                            </td>
                                            <td>
                                                {user.role == "admin" && <div className='w-100 me-1'>
                                                    <button onClick={e => handleUpdate(data.email, data.expert, data.role, 3)} className={`btn ${data.expert ? 'btn-primary' : 'btn-danger'}`} disabled={!data.verified} >{user.role === 'admin' && data.expert ? 'Remove' : 'Grant'}</button>
                                                </div>}
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>}
                </div>
                <div className='row showTableBase'>
                    {
                        dataFetch && dataFetch.map((data, i) => (
                            <div key={i} className='showTable col-sm-6 align-items-center justify-content-center col-lg-4 col-xl-4 col-xxl-4 col-md-6'>
                                <div className='p-2 card m-1'>
                                    <div className='fs-5 fw-bold'>{data.username}</div>
                                    <hr />
                                    <div className=''><b>Email:</b> {data.email}</div>
                                    <div className=''><b>Contact:</b> {data.phone}</div>
                                    <div className=''><b>Role:</b> {data.role}</div>
                                    <div className=''><b>Verified Account:</b>{data.verified ? 'Yes' : 'No'}</div>
                                    <hr />
                                    <div className='mb-1'>
                                        {data.email !== "anirudhkala110@gmail.com" ? (
                                            data.verified ? (
                                                <button className='btn btn-warning w-100' onClick={e => handleVerified(!data.verified, data.email)}>Depricate</button>
                                            ) : (
                                                <button className='btn btn-danger w-100' onClick={e => handleVerified(!data.verified, data.email)}>Enroll</button>
                                            )
                                        ) : (
                                            <button className='btn' disabled>Default</button>
                                        )}
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard