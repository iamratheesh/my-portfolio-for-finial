import React from 'react';
import './About.css';
import woocommerce  from '../assets/woocommerce.png'
import pycharm from '../assets/pycharm.png'
import blender from '../assets/blender.png'
import Node from '../assets/node.webp'
import ReduxIcon from '../assets/redux.png';
import python from '../assets/python.webp';
import HTML from '../assets/html.png';
import jQuery from '../assets/jquery.png';
import PHP from '../assets/php.png';

import VSCode from '../assets/vscode.png';
import Figma from '../assets/figma.png';
import ReactIcon from '../assets/react.png'

import NPMlogo from '../assets/npm.png'
import GitLogo from '../assets/git.png'
import GitHublogo from '../assets/github.png'
import GMeet from '../assets/meet.png'
import Zoomlogo from '../assets/zoom.webp'
import SkypeLogo from '../assets/skype.png'
import Slack from '../assets/slack.png'


import Canva from '../assets/canva.png'

import CSS from '../assets/css.png'
import BootStrap from '../assets/bootstrap.png'
import NextJS from '../assets/next.webp'
import JavaScript from '../assets/javascript.png'
import Sass from '../assets/sass.png'

import WordPress from '../assets/wordpress.png'

import LangChain from '../assets/langchain.png'
import LangGraph from '../assets/langgraph.png'
import RAG from '../assets/rag.png'
import GenAI from '../assets/genAI.png'
import AgenticAI from '../assets/agenticAI.png'

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">ABOUT ME</h2>
      <p className="paragraph about-para">
      I'm a Full-Stack Developer who started freelancing in 2021, and since then, I’ve worked on a wide range of projects that sharpened my skills and deepened my passion for building smart, user-focused digital solutions. From modern websites and interactive 3D experiences to cutting-edge AI applications, I’ve collaborated with clients across various industries—both independently and as part of a team. I’ve also worked on advanced technologies like GenAI, AI Agents, and the Agintic AI framework, bringing intelligent, adaptive systems to life. I’m driven by clean code, creative problem-solving, and the challenge of turning complex ideas into powerful digital products.
      </p>
      <button className="hire-me">
        <a href="https://drive.google.com/file/d/1OiTH-OPRpXJ_QDQ_7_x6OT92O22Xphu5/view?usp=sharing" target="_blank" rel="noreferrer">
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
        <h2 className="skill-title">AI Framworks</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={LangChain}
            alt=""
          />
          <p>LangChain</p>
        </div>
        <div className="skill">
          <img
            src={LangGraph}
            alt=""
          />
          <p>LangGraph</p>
        </div>
        <div className="skill">
          <img
            src={RAG}
            alt=""
          />
          <p>RAG</p>
        </div>
        <div className="skill">
          <img
            src={GenAI}
            alt=""
          />
          <p>GenAI</p>
        </div>
        <div className="skill">
          <img
            src={AgenticAI  }
            alt=""
          />
          <p>Agintic AI</p>
        </div>
        
      </div>


      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={ReactIcon}
            alt=""
          />
          <p>React</p>
        </div>
        <div className="skill">
          <img
            src={JavaScript}
            alt=""
          />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img
            src={ReduxIcon}
            alt=""
          />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img
            src={HTML}
            alt=""
          />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img
            src={CSS}
            alt=""
          />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img
            src={jQuery}
            alt=""
          />
          <p>jQuery</p>
        </div>
        <div className="skill">
          <img
            src={Sass}
            alt=""
          />
          <p>SASS</p>
        </div>
        <div className="skill">
          <img
            src={BootStrap}
            alt=""
          />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <img
            src={NextJS}
            alt=""
          />
          <p>Next.js</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={Node}
            alt=""
          />
          <p>Node</p>
        </div>
        <div className="skill">
          <img
            src={python}
            alt=""
          />
          <p>Python</p>
        </div>
        <div className="skill">
          <img
            src={PHP}
            alt=""
          />
          <p>PHP</p>
        </div>
      </div>
      {/* <h2 className="skill-title">Other Language</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={ReactIcon}
            alt=""
          />
          <p>React Native</p>
        </div>
        <div className="skill">
          <img src={Flutter} alt="" />
          <p>Flutter</p>
        </div>

      </div> */}
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={blender} alt="" />
          <p>Blender</p>
        </div>
        <div className="skill">
          <img src={pycharm} alt="" />
          <p>Pycharm</p>
        </div>
        {/* <div className="skill">
          <img src={CDT} alt="" />
          <p>Chrome Dev Tools</p>
        </div> */}
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
        <div className="skill">
          <img src={woocommerce} alt="" />
          <p>Woocommerce </p>
        </div>
        {/* <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div> */}
        
        <div className="skill">
          <img src={WordPress} alt="" />
          <p>WordPress</p>
        </div>
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={Slack} alt="" />
          <p>Slack</p>
        </div>
        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Adaptability</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Problem-Solving</p>
        <p className="soft-skill">User-Centric Focus</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Attention to Detail</p>
        <p className="soft-skill">Creativity</p>
        <p className="soft-skill">Client-Centric Approach</p>
        <p className="soft-skill">Resilience</p>
        <p className="soft-skill">Empathy</p>
      </div>
    </div>

  </section>
);

export default About;
