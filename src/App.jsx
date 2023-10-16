import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TimetablePage from "./pages/TimetablePage";
import Nav from "./components/Nav";
import PricesPage from "./pages/PricesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
