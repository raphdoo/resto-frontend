import React, {useState, useEffect} from 'react';
import { SubHeading } from '../../components';
import SupportEngine from '../../container/SupportEngine'


import './Header.css';

const Header = () => {

  return (
    <div className='app__header app__wrapper section__padding' id="home">
      <div className='app_wrapper_info'>
        <SubHeading title="...Kukuruku, cook that thing..."/>
        <h1 className='app__header-h1' style={{marginTop: "1rem"}}>Your favourite Chef</h1>
        <p className='p__opensans' style={{margin:"2rem 0"}}>Are you looking for the right place to get quality meal at affordable prices? Chat with our bot now...</p>
        {/* <button type='button' className='custom__button'>Explore menu</button> */}
      </div>
      <div className='app__wrapper_img'>
        <SupportEngine />
      </div>    
    </div>
  )
}; 

export default Header;
