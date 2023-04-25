import React from 'react';
import shlok from "../assets/shlok.png";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return <section className='section' id='home'>
    <div className="container mx-auto">
      <div>
        <h1>Shlok <span>Jagtap</span>
        </h1>
        <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
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
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt doloribus fugiat nihil earum eveniet repellat quidem, quo explicabo beatae.
          </p>
          <div>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
                </a>
            </div>
            <a href="#">
              <FaLinkedin/>
            </a>
            <a href="#">
              <FaGithub/>
            </a>
            <a href="#">
              <FaDribbble/>
            </a>
        </div>
      </div>
      <div>
        <img src={shlok} alt="" className='w-24 rounded-lg ' />
      </div>
    </div>
  </section>;
};

export default Banner;
