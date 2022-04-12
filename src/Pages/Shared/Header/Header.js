import React from 'react';
import CustomLink from '../../../Customlink/Customlink';

const Header = () => {
  return (
    <div>
      <div className="brand_area">
        <p>Car Services</p>
      </div>
      <nav>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/login'>Login</CustomLink>
      </nav>
    </div>
  );
};

export default Header;