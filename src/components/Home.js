import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Link } from 'react-scroll';
import styles from '../css/Home.module.css';



const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={300}>About</Link></li>
        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={300}>Portfolio</Link></li>
        <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={300}>Contact</Link></li>
      </ul>
    </nav>
  );
};

function Home() {
  return (

    <div className={styles.Home}>
    <div className={styles.sidebar}>
      <div className="header">
        <h1>Ajay </h1>
        <p>Senior .Net developer</p>
      </div>
      <Navbar />
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </div>
    <div className={styles.mainContent}>
    <Sidebar />
    </div>
  </div>

    // <div className={styles.Home}>

    // <div className="header">
    //   <h1>Welcome to My Portfolio</h1>
    //   <div>
    //   <p>This is a brief introduction to my work and skills.</p>
    //   </div>
    // </div>
    // <Navbar className={styles.Navbar} />
    // <Sidebar className={styles.sidebar} />
    // <div className="social-links">
    //     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    //     <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    //     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    //   </div>
    // </div>


  );
}

export default Home;
