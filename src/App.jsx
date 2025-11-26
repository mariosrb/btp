import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import QuiSommesNous from './pages/QuiSommesNous/QuiSommesNous';
import Realisations from './pages/Realisations/Realisations';
import Location from './pages/Location/Location';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
