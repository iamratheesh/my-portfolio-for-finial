import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';
import Me from '../assets/me.png'

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">Hi I AM RATHEESH R</h2>
        <h3 className="tagline">Building the Future, One Line of Code at a Time</h3>
        <p className="paragraph">I'm a Full-Stack Developer with 3 years of hands-on experience building fast, reliable, and user-focused web apps. I work with tools like React, Next.js, Node.js, and PHP to write clean, efficient code that delivers real results. I've also worked on cutting-edge projects using GenAI, AI Agents, and the Agintic AI framework. I’m passionate about solving problems, working with teams, and creating tech that makes an impact.</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/1MPfGEDZ2J2ZHxJh6EQvEGFaC9btpjZwR/view?usp=sharing" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Me} alt="RATHEESH R" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="https://github.com/RatheeshCoder" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/ratheeshcoder/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100035923960609" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://www.instagram.com/single_rider_r/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
  </div>
);

export default Hero;
