import React from 'react'
import { Link } from 'react-router-dom'
import vdo from './pnf.png'

const PageNotFound = () => {
    return (
        <div style={{ background: "#0e153", minHeight: "87vh" }}>
            <div className=" d-flex justify-content-center align-items-center container-fluid pnfBase">
                <div className=' p-2'>
                    <center className=' d-flex justify-content-center' style={{ content: '',height:'30vh',minHeight:"300px" }}>
                        {/* <img src={vdo} className='my-2 rounded' style={{ height: "500px", width: "" }} /> */}

                        <div className='text-black mx-3 down1'>4</div>
                        <div className='text-black mx-3 down2'>0</div>
                        <div className='text-black mx-3 down3'>4</div>
                    </center>
                    <div id="info" className='text-danger my-2'>
                        <h1>Error 404: Oops !!!!</h1>
                        <h3 className='text-dark'>This Page is Not on the Map</h3>
                        <span className='fs-6 w-50 text-dark' style={{ filter: "drop-shadow(2px 3px 2px black)" }}>Oops! Looks like you've ventured into uncharted territory. This page seems to be hiding, just like treasure on a deserted island.</span>
                    </div>
                    <Link to='/home'><button className='btn go_back my-1 text-white'>Go Home <i class="bi bi-house"></i></button></Link>
                </div>
            </div>
        </div >
    )
}

export default PageNotFound