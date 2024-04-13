import React from 'react';
import logo from '../static/stackline_logo.svg'
import './Header.css'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <img src={logo} alt="Logo" className='logo' />
    </div>
  );
};


export default Header;
