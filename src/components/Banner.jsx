import React from 'react';
import shlok from "../assets/midjourney.jpeg";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
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
            <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Shlok <span>Jagtap</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}
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
            variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt doloribus fugiat nihil earum eveniet repellat quidem, quo explicabo beatae.
            </motion.p>
            <motion.div
            variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
            variants={fadeIn('up',0.7)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}
             className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaDribbble />
            </a>
            </motion.div>
          </div>
          {/*image */}
          <motion.div variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={shlok} alt=""  className=' rounded-lg'/>
          </motion.div>
        </div>

      </div>

    </section>
  )
}


export default Banner;
