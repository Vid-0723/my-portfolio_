import React from 'react';
import { Link, Element } from 'react-scroll';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';


const Sidebar = () => {
  return (
    <div >
      <div>
          <Element name="about">
            <About />
          </Element>
          <Element name="portfolio">
            <Portfolio />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
    </div>
    </div>
 
  );
};

export default Sidebar;
