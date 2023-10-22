import React from 'react'
import './Project.css'
import website from '../assets/animation_lnslvlda.json';
import { Player } from '@lottiefiles/react-lottie-player';


export default function () {
  return (
    <div>
      <div className="project-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">

              <div className='p-anime'>
                <Player
                  src={website}
                  className="player"
                  loop
                  autoplay
                  background='dark'


                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-heading  d-flex">
                <p className='p-main'>Discover Our </p> <p className='p-second'>Projects</p>
              </div>
              <p className='p-3'>In the ever-evolving landscape of web development, full-stack development has become increasingly popular. Full-stack developers are well-versed in both front-end and back-end technologies, allowing them to create comprehensive and feature-rich web applications. Python and Django, a high-level web framework, have gained significant prominence in this domain. Together, they form a dynamic duo that empowers developers to bring their web development ideas to life. In this essay, we explore the world of full-stack development projects using Python and Django.

                Python is a versatile and widely used programming language known for its readability, flexibility, and extensive library support. With its elegant syntax, Python is an excellent choice for both beginners and experienced developers. In combination with Django, a robust web framework, it offers a powerful toolset for building web applications efficiently. Django follows the "batteries-included" philosophy, which means it comes with a variety of built-in features and libraries, saving developers time and effort. This combination makes Python and Django ideal for full-stack development.

                One of the most common types of full-stack projects is the creation of e-commerce websites. These websites often encompass product listings, user authentication, shopping carts, payment processing, and order management. With Python and Django, developers can quickly build these features, and they can also add advanced functionalities like product reviews, recommendations, and user profiles.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
