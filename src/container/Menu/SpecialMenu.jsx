import React from 'react';
import { images, data } from '../../constants';

import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className='app__specialMenu-title'>
      <SubHeading title="We have got some amazing menu"/>
      <h1 className='headtext__cormorant'>Today's menu</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine'>
        <p className='app__specialMenu-menu_heading'>Menu</p>
        <div className='app__specialMenu_menu_items'>
          {
            data.foods.map((food, index) => {
              return (
                <MenuItem key={food.title + index.toString()} title={food.title} price={food.price} tags={food.tags}/>
              )
            })
          }
        </div>
        
        
      </div>
      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menu image" />
      </div>
      <div className='app__specialMenu-menu_cocktails'>
        <p className='app__specialMenu-menu_heading'>Fruits</p>
        <div className='app__specialMenu_menu_items'>
          {
            data.fruits.map((fruit, index) => {
              return (
                <MenuItem key={fruit.title + index.toString()} title={fruit.title} price={fruit.price} tags={fruit.tags}/>
              )
            })
          }
        </div>
        
        
      </div>
    </div>
    <div style={{marginTop: "15px"}} className=''>
      <button type='button' className='custom__button'>View more</button>
    </div>        
  </div>
);

export default SpecialMenu;
