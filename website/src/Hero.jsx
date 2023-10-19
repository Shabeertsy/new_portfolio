import React, { useState } from 'react';
import Animation from './Animation';
import { BsArrowRightCircle } from "react-icons/bs"
import { Link } from 'react-router-dom';
import './Hero.css'
import Projects from './Project/Projects';
import About from './about/About';
import  Footer  from './footer/Footer';


function Hero() {
  return (
    <>
      <div className='dark-bg text-light hero row' >
        <div className="col-lg-6">

          <div>
            <div className="container animated-container ">
              <div>
                <div className="name-container text-light pt-3 d-flex">
                  <p className='font-family  hero-name hero-name-h1'>Hi!  I'm </p> <p className='hero-name-h2'> Shabeer</p>

                </div>
                <div className="animated-text mt-4">
                  <h4 className='text-light font-family'>Fullstack Web developer</h4>
                </div>
                <div className="dis-container">
                  <p className="font-family description text-light">
                    I am a Fullstack Web Developer with expertise in Python Django and React. I specialize in building robust and scalable web applications, combining the power of backend development with Django and frontend interactivity using React.
                  </p>
                </div>
                <div className="hireme d-flex align-items-center ">
                  <Link to='/contacts' className='contact-btn font-family'> Let's Connect<i className='arrow-icon'><BsArrowRightCircle /></i> </Link>
                  <Link to='/contacts' className='contact-btn-1 font-family'>View Works<i className='arrow-icon-1'><BsArrowRightCircle /></i> </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-lg-6 hero-right">
          <Animation />
        </div>
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="about">
        <About/>
      </div>
      {/* <div className="footer">
        <Footer/>
      </div> */}

    </>
  );
}

export default Hero;
