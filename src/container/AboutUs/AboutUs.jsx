import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.m} alt="m_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Here at Macafella's fine and dine everything we do is carefully planned well in advance to ensure the highest quality service. The food we serve is picked fresh from our garden daily and prepared by our top chefs with many years of experience. Rest assure you will get the very best of what we have to offer.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our history at Macafella's fine and dine is recently new. Founded by Angus Macapella. Opened to the public in 2018, after it had operated on a take away basis only since its inception 3 years earlier, we have grown rapidly. Despite our recent growth, we still operate exclusively out of Auckland's central business district with only one location on lower Queen Street.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;