import "./app.scss";
import Navbar from "./components/navbar/Navbar";
// import Test from "./Test";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About">About</section>
    <section id="Skills"><Skills /></section>
    <section id="Experience">Work Experience</section>
    <section id="Projects"><Projects /></section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;
