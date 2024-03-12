import React, { useRef } from 'react';
// import sampleUpdate from './Images/SmapleUpdate.mp4';
import sampleUpdate from './Images/1pX9.gif';

const VideoComponent = () => {
    const videoRef = useRef(null);

    // Set starting volume to 10%
    if (videoRef.current) {
        videoRef.current.volume = 0.05;
    }

    // Function to increase the volume by 10%
    const increaseVolume = () => {
        if (videoRef.current) {
            videoRef.current.volume = Math.min(videoRef.current.volume + 0.1, 1);
        }
    };

    // Function to decrease the volume by 10%
    const decreaseVolume = () => {
        if (videoRef.current) {
            videoRef.current.volume = Math.max(videoRef.current.volume - 0.1, 0);
        }
    };

    return (
        <div className='d-flex justify-content-center'>
            <div>
                <video
                    ref={videoRef}
                    className='positionSetupforVideo rounded'
                    autoPlay
                    loop
                    muted
                    controls
                    disablePictureInPicture
                    controlsList='nodownload'
                    style={{
                        width: "100%",
                        boxShadow: "inset 1px 2px 10px 5px black",
                        filter: 'brightness(1) contrast(1)',
                        minWidth: "50px",
                        maxWidth: "700px"
                    }}
                >
                    <source src={sampleUpdate} type="video/mp4" />
                </video>
                <div className='d-flex py-1'>
                    <div className='mx-2 w-100'>
                        <button className='btn btn-primary w-100 d-flex align-items-center justify-content-center' onClick={decreaseVolume}><b>Decrease Volume</b> <i class="fs-4 bi bi-volume-down"></i></button>
                    </div>
                    <div className='mx-2 w-100'>
                        <button className='btn btn-primary w-100 d-flex align-items-center justify-content-center' onClick={increaseVolume}><b>Increase Volume</b> <i class="fs-4 bi bi-volume-up-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoComponent;
