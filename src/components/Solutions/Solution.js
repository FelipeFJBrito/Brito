import React from 'react';
import img from '../About/AboutAssets/p2.jpeg'
import './Solution.css';

const Solution = () => {
    return (
        <div className='solution-wrapper'>
            <div className='solution-container'>
                <div className='solution-rside'>
                    <img src={img} />
                </div>
                <div className='solution-lrside'>
                    <h3 className="solution-title">Why Choose Us</h3>
                    <h2 className="solution-title2">Personalized web solutions to meet your individual needs.</h2>
                </div>
            </div>

        </div>
    )
}

export default Solution;