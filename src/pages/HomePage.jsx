import About from "../components/About";
import Centers from "../components/Centers";
import Class from "../components/Class";
import Footer from "../components/Footer";
import FreeClass from "../components/FreeClass";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Centers />
      <Class />
      <FreeClass />
      <Footer />
    </div>
  );
};

export default HomePage;
