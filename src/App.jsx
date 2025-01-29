import "./app.scss"
import Navbar from "./components/navbar/Navbar";
// import Test from "./Test";
import Hero from "./components/hero/Hero"

const App = () => {
  return <div>
    <section>
      <Navbar/>
      <Hero/>
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
    <section>Hi</section>
    {/* <Test/> */}
  </div>;
};

export default App;
