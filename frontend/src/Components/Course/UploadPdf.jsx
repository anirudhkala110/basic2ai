import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const UploadPdf = () => {
    const [file, setFile] = useState()
    const [msg, setMsg] = useState()
    const { topic } = useParams()
    const [fileName, setFileName] = useState()
    const [module, setModule] = useState()
    const [allFiles, setAllfiles] = useState([])
    const [updated, setUpdated] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('topic', fileName)
        formData.append('module', module)
        formData.append('file', file)
        const result = await axios.post('http://localhost:8099/upload_pdf', formData, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        if (result) {
            setUpdated(!updated)
        }
    }
    const [msg_type, setMsg_type] = useState()
    useEffect(() => {
        axios.get('http://localhost:8099/get_pdf')
            .then(res => {
                if (res.data.data.length < 1) {
                    setMsg("No File Exists")
                    setMsg_type(res.data.data.msg_type)
                }
                else {
                    setAllfiles(res.data.data)
                    setMsg(null)
                }
            })
            .catch(err => {
                console.log(err)
            })
    })
    const showPDF = (pdfName) => [
        window.open(`http://localhost:8099/pdf/${pdfName}`)
    ]
    const handleDelete = (id) => {
        const confirmation = window.confirm("Do you want to Delete this file ?");
        if (confirmation) {
            axios.post(`http://localhost:8099/delete_pdf/${id}`)
                .then(res => {
                    console.log(res.data)
                    setMsg_type(res.data.msg_type)
                    setTimeout(() => {
                        setMsg(null);
                        window.location.reload();
                    }, 2500);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };


    return (
        <div className='d-flex justify-content-center container-fluid w-100 bg-white'>
            <div className='p-2 bg-light rounded '>
                <h4>Upload File for "<b>{topic}</b>"</h4>
                <hr className='horizontalBack' />
                <form className='border p-3 rounded shadow' onSubmit={handleSubmit} style={{ maxWidth: "px", minWidth: "400px" }}>
                    <div className='form-group'>
                        <label className='form-label'>Name of File</label>
                        <input type='text' className='form-control mb-2' placeholder='Enter the File Name' onChange={e => setFileName(e.target.value)} required />
                        <input type='text' className='form-control mb-2' placeholder='Enter the Module Number (1 or 2 or 3 etc.)' onChange={e => setModule(e.target.value)} required />
                        <input type='file' accept='application/pdf' className="form-control mb-2" onChange={e => setFile(e.target.files[0])} required />
                    </div>
                    <button className='btn btn-primary w-100'>Upload</button>
                </form>
                <div className='row'>
                    {msg && <center className={`mt-3 fs-3 fw-semibold ${msg_type === 'good' ? 'text-success' : 'text-danger'}`} style={{ filter: "drop-shadow(0px 4px 4px black)" }}>{msg}</center>}
                    {
                        allFiles && allFiles.map((data, i) => (
                            <div className='mt-4 col-sm-12 col-xl-4 col-xxl-3 col-lg-4 col-md-6 d-flex justify-content-center border rounded bg-white' key={i}>
                                <div className='my-2 bg-white p-2 card'>
                                    <h5>{data.title}</h5>
                                    <button className='btn btn-success' onClick={() => showPDF(data.pdfName)}>Show PDF</button>
                                    <button className='btn btn-danger my-1' onClick={() => handleDelete(data.moduleNo)}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UploadPdf