import About from "../components/About";
import Centers from "../components/Centers";
import Class from "../components/Class";
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
    </div>
  );
};

export default HomePage;
