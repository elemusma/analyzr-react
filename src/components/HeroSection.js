import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
return (
    <>
    <section className='hero'>
        <div className="container">
        <div className="row align-items-center">
            <div className="col-md-4">
                <h2 className="h6 text-accent">Predictive analytics made simple.</h2>
                <h1>Make SMARTER Decisions</h1>
            </div>
            <div className="col-md-8">
            <img src="/images/Analyzr-Predictions-Made-Simple.jpg" width="100%" height="auto" />
            </div>
        </div>
        </div>
    </section>
    <img src="/images/Divider.jpg" width="100%" height="auto" />
    </>
);
}

export default HeroSection;
