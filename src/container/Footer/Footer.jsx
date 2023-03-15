import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';

import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import chefhat from '../../assets/chefhat.png'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding' id="login">
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>18, Mushin Street, Mushin, Lagos State, Nigeria</p>
        <p className='p__opensans'>+44 783 2431 234</p>
        <p className='p__opensans'>+44 323 2431 234</p>

      </div>
      <div className='app__footer-links_logo'>
        <img src={chefhat} alt="logo" style={{width:"80px"}}/>
        <p className='p__opensans'>The best way to find yourself is to loose yourself in the service of others.</p>
        <img src={images.spoon} className="sppon__img" alt="spoon" style={{marginTop: "15px"}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>8:00am - 4:00pm</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>9:00am - 3:00pm</p>

      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Raphdoo, All Rights Reserved</p>
    </div>

  </div>
);

export default Footer;
