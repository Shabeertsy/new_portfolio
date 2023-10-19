import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import website from './assets/animation_lnx3pa6v.json';
import './App.css'

function Animation() {


  return (
    <>
      <div className='dark-bg'>
      <Player
        src={website}
        className="player"
        loop
        autoplay
        background='dark'
      />
      </div>
    </>
  );
}

export default Animation;
