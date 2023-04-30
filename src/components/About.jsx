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
       <div className='flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-20 lg:gap-y-0 h-screen'>
         {/* img */}
         <motion.div 
          variants={fadeIn('right',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[650px] mix-blend-lighten bg-top'></motion.div>
         {/* text */}
        <motion.div variants={fadeIn('left',0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.3}}
          className='flex-1'>
           <h2 className='h2 text-accent'>About me.</h2>
           <h3 className='h3 mb-4'>I'm a Freelancer Front-end Developer and Block-chain Enthusiast .</h3>
           <p className='mb-4'>
            My name is Shlok Jagtap, and I'm a Frontend developer based in Pune. I specialize in building modern web applications using React.
           </p>
           {/* stats */}
           <div className='flex gap-x-6 lg:gap-x-10 mb-12 pt-[21px]'>
             <div>
               <div className='text-[40px] font-tertiary text-gradient mb-2'>
                 {inView? <CountUp start={0} end={2} duration={3}/>: null}
                 nd
               </div>
               <div className='font-primary text-sm tracking-[2px]'>
                 Year<br/>
                 CSE
               </div>
             </div>
             <div>
               <div className='text-[40px] font-tertiary text-gradient mb-2'>
                 {inView? <CountUp start={0} end={15} duration={3}/>: null}
               </div>
               <div className='font-primary text-sm tracking-[2px]'>
                 Projects<br/>
                 completed
               </div>
             </div>
             <div>
               <div className='text-[40px] font-tertiary text-gradient mb-2'>
                 {inView? <CountUp start={0} end={13} duration={3}/>: null}
                 +
               </div>
               <div className='font-primary text-sm tracking-[2px]'>
                 TechStack Language<br/>
                 Knowledege
               </div>
             </div>
           </div>
           <div className='flex gap-x-8 items-center'>
            <a href="https://www.linkedin.com/in/shlok-jagtap-5a8122228">
            <button className='btn btn-lg'>Contact me</button>
            </a>
            <a href="https://github.com/DeImOs-Sj" className='text-gradient btn-link'>My portfolio</a>
           </div>
         </motion.div>
       </div>
     </div>   
  </section>
);
};

export default About;
