import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/Cartzilla.png';
import img2 from '../assets/Clock Project.png';
import img3 from '../assets/PORTFOLIO.png';

export const Work = () => {
  return (
    <section className='section'id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
            {/* text */}
            <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br />
            Work.
          </h2>
          <p className='max-w-sm mb-16'>
            My Latest Work includes this Portfolio Website which I have created to showcase my skills and to showcase my projects.
          </p>
          <a href="https://github.com/DeImOs-Sj">
          <button className='btn btn-sm'>View all Project</button>
          </a>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500 ' src={img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Food Delivery Website</span>
                 </div>
                  {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
                <span className='text-3xl text-white'>Cartzilla</span>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
           className='flex-1 flex flex-col gap-y-12 pt-4'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Realtime Clock</span>
                 </div>
                  {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
                <span className='text-3xl text-white'>Realtime Clock Project in Javascript</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Particle.JS Portfolio</span>
                 </div>
                  {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
                <span className='text-3xl text-white'>Dynamic Background</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Work;
