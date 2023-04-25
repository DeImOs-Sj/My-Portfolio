import React from 'react';
import dalle from '../assets/dalle.png';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
      <a href="#"></a>
      <img src={dalle} alt="" className='w-16'/>
      <button className='btn btn-sm'>Work with Me</button>
      </div>
    </div>
  </header>;
};

export default Header;
