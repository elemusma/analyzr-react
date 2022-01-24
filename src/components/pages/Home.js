import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";


              

function Home() {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Machine Learning Made Simple | Analyzr</title>
            {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            <meta name="description" content="Helmet application" />
        </Helmet>
            <HeroSection />
            {/* start of intro section */}
            <section className="pt-5 pb-5 position-relative bg-accent section-approach">
                <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 text-center pb-5">
                <h2 className="text-accent-blue pb-4">The Analyzr Approach</h2>
                </div>
                <div className="col-lg-2 col-md-6 col-approach">
                <div className="position-relative bg-white box-shadow px-2 pb-4" style={{borderRadius:"4px"}}>
                <img src="/images/Icon-Intro.png" width="100%" height="auto" style={{marginTop: "-35px"}} />
                </div>
                <h3 className="text-center text-accent-blue h5 mt-4">Tailored</h3>
                <p className="text-justify bold text-accent-blue">Predictive modeling should be tailored to your business needs</p>
                </div>
                <div className="col-lg-2 col-md-6 col-approach">
                <div className="position-relative bg-white box-shadow px-2 pb-4" style={{borderRadius:"4px"}}>
                <img src="/images/Icon-Intro.png" width="100%" height="auto" style={{marginTop: "-35px"}} />
                </div>
                <h3 className="text-center text-accent-blue h5 mt-4">Tailored</h3>
                <p className="text-justify bold text-accent-blue">Predictive modeling should be tailored to your business needs</p>
                </div>
                <div className="col-lg-2 col-md-6 col-approach">
                <div className="position-relative bg-white box-shadow px-2 pb-4" style={{borderRadius:"4px"}}>
                <img src="/images/Icon-Intro.png" width="100%" height="auto" style={{marginTop: "-35px"}} />
                </div>
                <h3 className="text-center text-accent-blue h5 mt-4">Tailored</h3>
                <p className="text-justify bold text-accent-blue">Predictive modeling should be tailored to your business needs</p>
                </div>
                <div className="col-lg-2 col-md-6 col-approach">
                <div className="position-relative bg-white box-shadow px-2 pb-4" style={{borderRadius:"4px"}}>
                <img src="/images/Icon-Intro.png" width="100%" height="auto" style={{marginTop: "-35px"}} />
                </div>
                <h3 className="text-center text-accent-blue h5 mt-4">Tailored</h3>
                <p className="text-justify bold text-accent-blue">Predictive modeling should be tailored to your business needs</p>
                </div>
                </div>
                </div>
            </section>
            {/* end of intro section */}

            {/* start of how analyzr works section */}
            <section className="pt-5 pb-5 position-relative">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 text-center pb-5">
                <h2 className="text-accent-blue pb-4">The Analyzr Approach</h2>
                <img src="/images/How-Analyzr-Works.jpg" width="100%" height="auto" style={{maxWidth:"900px"}} />
                </div>
                </div>
                </div>
            </section>
            {/* end of how analyzr works section */}

            {/* start of features */}
            <section className="pt-5 pb-5 position-relative section-features">
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-7 text-center pb-5">
            <h2 className="text-accent-blue pb-4">We can handle the engineering, so you can focus on uncovering insights</h2>
            </div>
            </div>
            <div className="row justify-content-center px-md-5">
            <div className="col-lg-4 col-md-6 text-center pb-5 col-features px-md-5">
            <img src="/images/Features-01.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Simple</h3>
            <p className="">Executes using simple Python calls with AutoML built in.</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center pb-5 col-features px-md-5">
            <img src="/images/Features-01.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Simple</h3>
            <p className="">Executes using simple Python calls with AutoML built in.</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center pb-5 col-features px-md-5">
            <img src="/images/Features-01.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Simple</h3>
            <p className="">Executes using simple Python calls with AutoML built in.</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center pb-5 pt-5 col-features px-md-5">
            <img src="/images/Features-01.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Simple</h3>
            <p className="">Executes using simple Python calls with AutoML built in.</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center pb-5 pt-5 col-features px-md-5">
            <img src="/images/Features-01.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Simple</h3>
            <p className="">Executes using simple Python calls with AutoML built in.</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center pb-5 pt-5 col-features px-md-5">
            <img src="/images/Features-01.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Simple</h3>
            <p className="">Executes using simple Python calls with AutoML built in.</p>
            </div>

            
            </div>
            </div>
            </section>
            {/* end of features */}
            <img src="/images/Divider.jpg" width="100%" height="auto" />
            {/* start of how can we help you */}
            <section className="pt-5 pb-5 position-relative bg-accent">
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-7 text-center pb-5">
            <h2 className="text-accent-blue pb-4">We can handle the engineering, so you can focus on uncovering insights</h2>
            </div>
            </div>
            
            <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 text-center pb-5 pt-5 px-md-5">
            <img src="/images/Icon-Help.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Propensity Scoring</h3>
            <p className="">Target more accurately and improve coversion rates by predicting propensity to buy or to churn. Understand key drivers affecting your prospect or customer behavior and take action before it's too late.</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center pb-5 pt-5 px-md-5">
            <img src="/images/Icon-Help.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Propensity Scoring</h3>
            <p className="">Target more accurately and improve coversion rates by predicting propensity to buy or to churn. Understand key drivers affecting your prospect or customer behavior and take action before it's too late.</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center pb-5 pt-5 px-md-5">
            <img src="/images/Icon-Help.png" width="100%" height="auto" style={{maxWidth:"150px"}} />
            <h3 className="text-center text-accent h5 mt-4">Propensity Scoring</h3>
            <p className="">Target more accurately and improve coversion rates by predicting propensity to buy or to churn. Understand key drivers affecting your prospect or customer behavior and take action before it's too late.</p>
            </div>
            </div>

            </div>
            </section>
            {/* end of how can we help you */}

            {/* start of cta */}
            <section className="pt-5 pb-5 position-relative bg-accent-dark text-white">
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 text-center">
                <h2>Talk to us about the power of ML Analytics today.</h2>
                <Link to='https://facebook.com/' className="btn bg-gradient-peach position-relative text-white position-absolute px-5 py-2" style={{bottom:"0",left:"50%",transform:"translate(-50%,50%)",borderRadius:"25px"}}>Ask an Expert</Link>
            </div>
            </div>
            </div>
            </section>
            {/* end of cta */}

            {/* start of partnerships */}
            <section className="" style={{padding:"100px 0"}}>
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 text-center">
            <p>We have strong partnerships with the world's top tech companies.</p>
            <img src="/images/Partners.jpg" width="100%" height="auto" style={{maxWidth:"900px"}} />
            </div>
            </div>
            </div>
            </section>
            {/* end of partnerships */}
        </>
    );
}

export default Home;