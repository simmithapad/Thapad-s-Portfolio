import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Simmi Thapad
        </motion.span>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#hero">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social">
          <a href="https://github.com/simmithapad"><img src="/github.png" alt="github" /></a>
          <a href="https://www.linkedin.com/in/simmi-thapad-5692511a9/"><img src="/linkedin.png" alt="linkedin" /></a>
          <a href="https://www.instagram.com/simmithapad/"><img src="/instagram.png" alt="instagram" /></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
