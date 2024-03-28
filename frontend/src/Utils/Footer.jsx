import React from 'react'

const Footer = () => {
    return (
        <div className='container-fluid bg-dark' style={{ minHeight: "48px", width: "-webkit-fill-available" }} >
            <div className='text-white footer align-items-center justify-content-center' style={{ height: "48px",fontSize:"10px",width: "-webkit-fill-available" }}>
                <div className='mx-5'> Contact Person: Mr. Janmejay Singh <sup>*</sup><sub>(Owner)</sub></div>
                <div className='mx-5'>Mobile Number: 7345xxxx90;</div>
                <div className='mx-5'>Email: basic2aijsak@gmail.com</div>
            </div>
        </div>
    )
}

export default Footer