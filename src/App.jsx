import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TimetablePage from "./pages/TimetablePage";
import Nav from "./components/Nav";
import PricesPage from "./pages/PricesPage";
import ContactPage from "./pages/ContactPage";
import ClassPage from "./pages/ClassPage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/class/:id" element={<ClassPage />} />
      </Routes>
    </div>
  );
}

export default App;
