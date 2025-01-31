import "./navbar.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
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
          <a href="#Homepage">Home</a>
          <a href="#About">About</a>
          <a href="#Experience">Work Experience</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
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
