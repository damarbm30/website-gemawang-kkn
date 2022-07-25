import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./components/pages/Beranda";
import Potensi from "./components/pages/Potensi";
import Dokumentasi from "./components/pages/Dokumentasi";
import Footer from "./components/Footer";
import UsahaItem from "./components/pages/UsahaItem";
import WisataItem from "./components/pages/WisataItem";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" exact element={<Beranda />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />
          <Route path="/potensi-daerah" element={<Potensi />} />
          <Route path="/usaha/:id" element={<UsahaItem />} />
          <Route path="/wisata/:id" element={<WisataItem />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
