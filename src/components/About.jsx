import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const[ref,inView] =useInView({
    threshold:0.5,
  });
  return( 
    <section className='section' id='about' ref={ref}>
  
     <div className='container mx-auto'>
       <div>
         {/* img */}
         <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
         {/* text */}
        <div>
           <h2>About me.</h2>
           <h3>I'm a Freelancer Front-end Developer and Block-chain Enthusiast currently studying in 2nd year.</h3>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt modi temporibus voluptatum quidem accusantium atque quis nisi dolore reprehenderit.
           </p>
           {/* stats */}
           <div className='flex'>
             <div>
               <div className='text-[40px] font-tertiary text-gradient mb-2'>
                 <CountUp start={0} end={13} duration={3}/>
               </div>
               <div className='font-primary text-sm tracking-[2px]'>
                 studying<br/>
                 in 2nd year
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>   
  </section>
);
};

export default About;
