import React, { useState } from "react";
import CountUp from "react-countup";

import ScrollTrigger from 'react-scroll-trigger';

const HappyBlog = () => {
  
  const [counterOn , setCounterOn] = useState(false)
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} 
    onExit={()=>setCounterOn(false)}
    >
   <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 my-24 text-white relative justify-around items-center bg-[url('https://i.ibb.co/9WNmSLG/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles-8353-10052.webp')]   py-32" style={{
      backgroundRepeat:'no-repeat', backgroundSize:'cover', 
   }}
   >
      <div className='w-full absolute top-0 left-0 opacity-50 bg-gray-700 h-full '></div>
   <div className='flex z-10  flex-col items-center'>
      {counterOn && <CountUp className='text-6xl font-bold' start={0} end={326} duration={2} delay={0}/>}
      <p className='text-2xl'>Successfully Trained</p>
   
   </div>
   <div className='flex z-10 flex-col items-center'>
      {counterOn && <CountUp className='text-6xl font-bold' start={0} end={1260} duration={2} delay={0}/>}
      <p className='text-2xl'>Satisfaction Rate</p>
   
   </div>
   <div className='flex z-10 flex-col items-center'>
      {counterOn && <CountUp className='text-6xl font-bold' start={0} end={97} duration={2} delay={0}/>}
      <p className='text-2xl'>Success Rate</p>
   
   </div>
   <div className='flex z-10 flex-col items-center'>
      {counterOn && <CountUp className='text-6xl font-bold' start={0} end={96} duration={2} delay={0}/>}
      <p className='text-2xl'>Classes Completed</p>
   
   </div>
   </div>
    </ScrollTrigger>
  );
};

export default HappyBlog;
