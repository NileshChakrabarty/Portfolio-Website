import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3Alt, FaVuejs } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiMysql } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiTypescript, SiTailwindcss, SiMysql } from "react-icons/si";



const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus />,
        'Python': <FaPython />,
        'TypeScript': <SiTypescript />,
        'HTML': <FaHtml5 />,
        'CSS': <FaCss3Alt />,
        'JavaScript': <DiJavascript1 />,
        // 'Java': <SiJava />,
        'SQL': <DiMysql />,
        'React': <FaReact />,
        'Vue.js': <FaVuejs />,
        'Tailwind CSS': <SiTailwindcss />,
        'Figma': <FaFigma />,
        'MySQL': <DiMysql />,
        'Postman': <SiPostman />,
        'Node': <DiNodejs />,
        'Express': <SiExpress />,
        'MongoDb': <SiMongodb />,
        'Git': <FaGitAlt />,
        'Github': <FaGithub />,
        'Npm': <FaNpm />,
        'Bootstrap': <FaBootstrap />,
        'Vercel': <SiVercel />
    };

    return (
        <div title={skill} className='SkillBox'>
          {icon[skill] || <span>{skill}</span>}  {/* Display skill name if icon not found */}
        </div>
    );
}

export default Skills;
