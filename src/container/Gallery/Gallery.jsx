import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';


import './Gallery.css';

const imagegallery = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    if(direction === 'left'){
      scrollRef.current.scrollLeft -= 300;
    }else{
      scrollRef.current.scrollLeft += 300;
    }
  }
  
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:"#AAA", marginTop: "2rem"}}>If you say that fantasizing about the future can give you information about what you really like and don’t like, then dreams are a great sort of virtual exploration</p>
        <button type="button" className='custom__button' >View more</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {
            imagegallery.map((image, index)=>{
              return (
                <div className='app__gallery-images_card flex__center' key={index+1}>
                  <img src={image} alt="galleryImage" />
                  <BsInstagram className='app__gallery__image-icon'/>
                </div>
              )
            })
          }
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')}/>

        </div>
      </div>
    </div>
  )
};

export default Gallery;
