import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="aboutus_G"/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className='p__opensans'>The essence of a brand can be found in the feelings and meaning its name evokes. So another good place to start your story is with why your business bears a certain name.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
      <div className='app__aboutus-content_knife flex_center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className='p__opensans'>The essence of a brand can be found in the feelings and meaning its name evokes. So another good place to start your story is with why your business bears a certain name.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>        
  </div>
);

export default AboutUs;
