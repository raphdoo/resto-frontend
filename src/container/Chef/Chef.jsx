import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className=' app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt=""/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>We believe in providing a best in class taste for our customers</p>
        </div>
        <p className='p__opensans'>We Stand For Something Good in everything we do: This means carefully sourced premium ingredients from like-minded purveyors we admire and love. </p>
      </div>
    
      <div className='app__chef-sign'>
          <p>Raph Doo</p>
          <p className='p__opensans'>Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
