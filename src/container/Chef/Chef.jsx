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
            <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className='p__opensans'>Vero obcaecati eum iusto impedit, accusantium accusamus, dignissimos in veniam deserunt aliquid cumque, praesentium quia cupiditate. Beatae est maxime sint perspiciatis? Quod.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & founder</p>
          <img src={images.sign} alt='sign img' />
        </div>
    </div>
  </div>
);

export default Chef;
