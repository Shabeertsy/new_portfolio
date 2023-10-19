import React from 'react'
import './About.css'
import Card from '../card/Card'
import { AiOutlineHtml5 } from "react-icons/ai"
import { ImCss3 } from 'react-icons/im'
import { SiJavascript } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'
import { SiSqlite } from 'react-icons/si'
import { FaBootstrap, FaReact } from 'react-icons/fa'
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs"
import { Player } from '@lottiefiles/react-lottie-player';
import tech from '../assets/animation_lntud7i4.json';
import react from '../assets/animation_lntuewqg.json';
import js from '../assets/animation_lnturah0.json';


export default function About() {
  return (
    <div>
      <div className="about-main">
        <div className="container">
          <div className="row">
            <p className='p-main text-center mb-5 mt-5'>Techonologies</p>
          </div>
          <div className="row">
            <Player
              src={tech}
              className="player"
              loop
              autoplay
              background='dark'
            />
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <Player
                src={react}
                className="skill-icon"
                loop
                autoplay
                background='dark'
                style={{ width: '50px', height: '50px' }}
              />
              <div className="row">
                <h3 className=''>React</h3>

                <p className=''>React is a popular JavaScript library for building user interfaces. Developed by Facebook, it's known for its efficiency and flexibility. React allows developers to create interactive and dynamic web applications with ease. Its component-based architecture simplifies the development process, making it a go-to choice for many front-end developers.</p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              {/* <Player
                src={js}
                className="skill-icon"
                loop
                autoplay
                background='dark'
                style={{ width: '50px', height: '35px' }}
              /> */}

              <DiDjango style={{ width: '50px', height: '35px', color: 'black' }} />
              <div className="row">
                <h3>Django</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic recusandae nihil ipsum nisi dolorem, rem architecto est saepe! Veritatis fugit quae consequatur facere aliquid! Recusandae animi totam perferendis? Eligendi?</p>

              </div>
            </div>
            <div className="col-lg-4 text-center">
              <Player
                src={js}
                className="skill-icon"
                loop
                autoplay
                background='dark'
                style={{ width: '50px', height: '35px' }}
              />
              <div className="row">
                <h3>React</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic recusandae nihil ipsum nisi dolorem, rem architecto est saepe! Veritatis fugit quae consequatur facere aliquid! Recusandae animi totam perferendis? Eligendi?</p>

              </div>
            </div>

            <div className="col-lg-4 text-center mt-5">
              <Player
                src={js}
                className="skill-icon"
                loop
                autoplay
                background='dark'
                style={{ width: '50px', height: '35px' }}
              />
              <div className="row">
                <h3>React</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic recusandae nihil ipsum nisi dolorem, rem architecto est saepe! Veritatis fugit quae consequatur facere aliquid! Recusandae animi totam perferendis? Eligendi?</p>

              </div>
            </div>

            <div className="col-lg-4 text-center mt-5">
              <Player
                src={js}
                className="skill-icon"
                loop
                autoplay
                background='dark'
                style={{ width: '50px', height: '35px' }}
              />
              <div className="row">
                <div className="row">
                  <h3>React</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic recusandae nihil ipsum nisi dolorem, rem architecto est saepe! Veritatis fugit quae consequatur facere aliquid! Recusandae animi totam perferendis? Eligendi?</p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center mt-5">
              <Player
                src={js}
                className="skill-icon"
                loop
                autoplay
                background='dark'
                style={{ width: '50px', height: '35px' }}
              />
              <div className="row">
                <h3>React</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic recusandae nihil ipsum nisi dolorem, rem architecto est saepe! Veritatis fugit quae consequatur facere aliquid! Recusandae animi totam perferendis? Eligendi?</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}