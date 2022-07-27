import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./components/pages/Beranda";
import Potensi from "./components/pages/Potensi";
import Dokumentasi from "./components/pages/Dokumentasi";
import Footer from "./components/Footer";
import UsahaPage from "./components/pages/UsahaPage";
import WisataPage from "./components/pages/WisataPage";
import KesenianPage from "./components/pages/KesenianPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" exact element={<Beranda />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />
          <Route path="/potensi-daerah" element={<Potensi />} />
          <Route path="/usaha/:id" element={<UsahaPage />} />
          <Route path="/wisata/:id" element={<WisataPage />} />
          <Route path="/kesenian/:id" element={<KesenianPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
