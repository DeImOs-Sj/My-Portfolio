import React from 'react';
import dalle from '../assets/shloklogo.png';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
      <img src={dalle} alt="" className='w-80'/>
      <a href="https://www.linkedin.com/in/shlok-jagtap-5a8122228">
      <button className='btn btn-sm'>Work with Me</button>
      </a>
      </div>
    </div>
  </header>;
};

export default Header;
