import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TimetablePage from "./pages/TimetablePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timetable" element={<TimetablePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
