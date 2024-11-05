import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../assets/menu1.json";

const Demo = () => {

    const defaultOptions = {
        loop: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div className='w-[100vw] h-[100vh]'>
        <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
    </div>
  )
}

export default Demo