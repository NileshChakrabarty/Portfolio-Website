import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Nilesh Chakrabarty</b>, and I am from West Bengal, India.
            I'm a pursuing <b>B.Tech</b> in <b>Computer Science and Artificial Intelligence</b> at <b>Newton School Of Technology</b>.
            <br /><br />
            I enjoy creating efficient and user-friendly applications. Check out my projects in the portfolio section.
            <br /><br />
            I am <b>open</b> to new opportunities and collaborations. Connect with me via the links in the footer.
          </p>

        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='Python' />
        <Skills skill='TypeScript' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='JavaScript' />
        <Skills skill='Java' />
        <Skills skill='SQL' />
        <Skills skill='React' />
        <Skills skill='Vue.js' />
        <Skills skill='Tailwind CSS' />
        <Skills skill='Figma' />
        <Skills skill='MySQL' />


      </div>
    </>
  )
}

export default About

