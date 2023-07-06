import React from 'react';
import LogoLight from '../images/logo-light.svg';
import rectangle from '../rectangle.svg';
import CircleGroup from '../images/bg-parttern-1.svg'
import { motion } from 'framer-motion';


const Header = () => (
    <header className="header">
        <div className="box">
      
      <img src={rectangle} className="rectangle" alt="Rectangle" />
      <img src={CircleGroup} className="circle-group" alt="circle" />
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
      <img src={LogoLight} className="logo" alt="Logo" />
      </motion.div>
      <h1 className='Data'>Data <span className='tailored'>tailored</span> to your needs.</h1>
      <button className='button'>Learn more</button>
      <h1 className='Apply'>Apply for access</h1>
    
    </div>

    </header>
    );

    export default Header;