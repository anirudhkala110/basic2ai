import React, { useEffect } from 'react'
import axios from 'axios'
const Footer = () => {
    useEffect(() => {
        console.log('Connected')
        axios.get('https://backend.basic2ai.info')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div className='container-fluid bg-dark text-bg-danger text-danger' style={{ minHeight: "48px", width: "-webkit-fill-available", top: '10%' }} >
            <div className='text-white footer align-items-center justify-content-center' style={{ minHeight: "48px", fontSize: "10px", width: "-webkit-fill-available", position: 'relative' }}>
                <div className='mx-5'> Contact Person: Mr. Janmejay Singh <sup>*</sup><sub>(Owner)</sub></div>
                <div className='mx-5'>Mobile Number: 7607593521</div>
                <div className='mx-5'>Email: basic2aijsak@gmail.com</div>
            </div>
        </div>
    )
}

export default Footer