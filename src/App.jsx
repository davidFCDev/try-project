import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TimetablePage from "./pages/TimetablePage";
import Nav from "./components/Nav";
import PricesPage from "./pages/PricesPage";
import ContactPage from "./pages/ContactPage";
import ClassPage from "./pages/ClassPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/class/:id" element={<ClassPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
