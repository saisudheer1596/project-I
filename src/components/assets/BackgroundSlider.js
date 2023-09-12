import React, { useEffect, useState } from 'react';
import './BackgroundSlider.css';
import imageSlide from './Data';
import Navbar from './Navbar';

export default function BackgroundSlider() {
    const [currentState, setCurrentState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0)
            } else {
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [currentState])
    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }
    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }
    return (
        <div className='container-style'>
            <div style={bgImageStyle}>
                <Navbar />
            </div>
            <div className='description'>
                <h1>{imageSlide[currentState].title}</h1>
                <div className='carousel-boullt'>
                    {
                        imageSlide.map((imageSlide, currentState) => (
                            <span key={currentState} onClick={() => goToNext(currentState)}></span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
