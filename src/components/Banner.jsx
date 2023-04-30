import React from 'react';
import shlok from "../assets/midjourney.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex item-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:true,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Shlok <span>Jagtap</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up',0.2)} initial="hidden" whileInView={'show'} viewport={{once:true,amount:0.7}}
             className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Frontend Developer',
                2000,
                'Competetive Programmer',
                2000,
                'Blockchain Enthusiast',
                2000,
              ]}
                speed={50}
                className="text-accent"
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
            variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:true,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
             HI !! <br />
             This is Shlok Jagtap.
             I am a Frontend Developer my Frontend Techstack includes HTML,CSS,TAILWIND CSS,JAVASCRIPT,REACT JS.
             Proficient in C,C++,Python and Javascript
            </motion.p>
            <motion.div
            variants={fadeIn('up',0.2)} initial="hidden" whileInView={'show'} viewport={{once:true,amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href="https://www.linkedin.com/in/shlok-jagtap-5a8122228"  >
              <button className='btn btn-lg'>Contact Me</button>
              </a>
              <a href="https://github.com/DeImOs-Sj" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
            variants={fadeIn('up',0.2)} initial="hidden" whileInView={'show'} viewport={{once:true,amount:0.7}}
             className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://www.linkedin.com/in/shlok-jagtap-5a8122228">
              <FaLinkedin />
            </a>
            <a href="https://github.com/DeImOs-Sj">
              <FaGithub />
            </a>
            <a href="https://twitter.com/jagtap_shlok?t=rezAT-M-1131s24Ihp7tVw&s=09">
              <FaTwitter/>
            </a>
            </motion.div>
          </div>
          {/*image */}
          <motion.div variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} viewport={{once:true,amount:0.7}}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={shlok} alt=""  className=' rounded-lg'/>
          </motion.div>
        </div>

      </div>

    </section>
  )
}


export default Banner;
