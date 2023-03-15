import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import {images} from '../../constants'
import chefhat from '../../assets/chefhat.png'

import './Navbar.css';

const Menu = () =>{
  return (
    <>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </>
  )
}

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false)

  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={chefhat} alt="logo" style={{ width:'80px'}}/>
      </div>
      <ul className='app__navbar-links'>
        <Menu/>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div/>
        <a href="/" className='p__opensans'>Book table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#FFF' fontSize={27} onClick={()=> {setToggleButton(true)}}/>
        { toggleButton && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>{setToggleButton(false)}}/>
            <ul className='app__navbar-smallscreen_links'>
              <Menu/>
            </ul>
          </div>
        )} 

      </div>
    </div>
  )
};

export default Navbar;
