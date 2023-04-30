import React from 'react';
import {BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from'../variants';
const services =[{
  name:'Frontend Design',
  description:
  "I have over 1 years of experience working as a developer, and I've had the opportunity to work on a variety of projects.",
  link:'Learn more',
},
  {
    name:'Development',
    description:
    'As a frontend developer, my goal is to design and develop a personal portfolio website that showcases my skills, experience, and accomplishments.',
    link:'Learn more',
  
  },
  {
    name:'Competetive Programming',
    description:
    'As a competitive programmer, I excel at solving algorithmic problems quickly.',
    link:'Learn more',
  
  },
  {
    name:'Projects',
    description:
    'As a frontend developer and an universtiy student i have created multiple projects .',
    link:'Learn more',
  
  },

];
const Services = () => {
  return <section className='section'id='services' >
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text & image*/}
        <motion.div
        variants={fadeIn('right',0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What i Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            I'm a Freelancer Front-end Developer and Block-chain Enthusiast currently studying in 2nd year.
          </h3>
          <a href="https://github.com/DeImOs-Sj">
          <button className='btn btn-sm'>See my Projects</button>
          </a>
        </motion.div>
        {/* services */}
        <motion.div 
         variants={fadeIn('left',0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.3}}
        className='flex-1 '>
          {/* services and list  */}
          <div>
            {services.map((service,index)=>{
              //destrcture service
              const {name,description,link} = service;
              return(
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="https://github.com/DeImOs-Sj" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'> <BsArrowUpRight/> </a>
                    <a href="https://github.com/DeImOs-Sj" className='text-sm'>{link}</a>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
