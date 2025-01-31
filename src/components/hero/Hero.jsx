import { motion } from "framer-motion"
import "./Hero.scss"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-520%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
        },
    },
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div 
            className="textContainer" 
            variants={textVariants} 
            initial="initial" 
            animate="animate"
            >
                <motion.h2 variants={textVariants}>SIMMI THAPAD</motion.h2>
                <motion.h1 variants={textVariants}>
                    Software Developer
                </motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img 
                variants={textVariants} 
                animate="scrollButton" 
                src="/scroll.png" 
                alt="scroll" />
            </motion.div>
        </div>

        <motion.div 
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate">
            Developer Ethical Hacker Musician
        </motion.div>

        <div className="imageContainer">
            <img src="/me.png" alt="myimage" />
        </div>
    </div>
  )
}

export default Hero
