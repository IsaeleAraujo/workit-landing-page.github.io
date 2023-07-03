import React from 'react';
import LogoLight from '../images/logo-light.svg';
import rectangle from '../rectangle.svg';
import CircleGroup from '../images/bg-parttern-1.svg'

const Header = () => (
    <header className="header">
        <div className="box">
      <div className="rectangle-wrapper">
      <img src={rectangle} className="rectangle" alt="Rectangle" />
      <img src={CircleGroup} className="circle-group" alt="circle" />
      <img src={LogoLight}  className="logo" alt="Logo" />
      <h1 className='Data'>Data tailored to your needs.</h1>
      <button>Learn More</button>
      <h1>Apply for access</h1>
      </div>
    </div>

    </header>
    );

    export default Header;