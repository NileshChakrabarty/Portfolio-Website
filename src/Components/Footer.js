import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Nilesh Chakrabarty</h4>
      <div className='footerLinks'>
        <a href="https://github.com/NileshChakrabarty" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/nilesh-chakrabarty-57a729293/" target='_blank'><FaLinkedin /></a>
        <a href='mailTo:nilesh.c23csai@nst.rishihood.edu.in' target='_blank'><GrMail /></a>
      </div>

    </footer>
  )
}

export default Footer