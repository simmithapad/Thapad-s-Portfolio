import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    { img: 'html.png', name: 'HTML'},
    { img: 'css.png', name: 'CSS'},
    { img: 'js.png', name: 'JS'},
    { img: 'java.png', name: 'Java'},
    { img: 'mysql.png', name: 'MySQL'},
    { img: 'mongodb.png', name: 'Mongodb'},
];

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className='skills' 
        variants={variants} 
        initial="initial" 
        ref={ref}
        animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <h3>Skills</h3>
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <h2>The Skills I Acquire</h2>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <div className="box">
                    {skills.map((skill, index) => (
                    <div className="col" key={index}>
                        <img src={skill.img} alt={skill.name} />
                        <div className="layer">
                        <h4>{skill.name}</h4>
                        </div>
                    </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Skills;
