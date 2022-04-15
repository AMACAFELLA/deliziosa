import React from 'react';
import { images } from '../../constants';
import { SubHeading} from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app_wrapper_img-reverase'>
      <img src={images.chef} alt='chef img' />
    </div>

    <div className='app__wrapper_info'>
        <SubHeading title="chef's word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote img' />
            <p className='p__opensans'>We believe the best food is found in the company of people you enjoy.</p>
          </div>
          <p className='p__opensans'>This is what makes Macafellas fine and dine differently from the rest. We believe the dining experience should be a special, shared experience.</p>
          <p className='p__opensans'>People who come to eat with us go home feeling more than just full—they go home with a different perspective on food and culture, and they go home knowing they have experienced something new and extraordinary.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef</p>
          <img src={images.sign} alt='sign img' />
        </div>
    </div>
  </div>
);

export default Chef;
