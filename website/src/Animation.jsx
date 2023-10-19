import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import website from './assets/VttzdhbLan.json';
import './App.css'

function Animation() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: website,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
