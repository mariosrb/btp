import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import Location from './pages/location';
import PresentationPage from './pages/qui-sommes-nous';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/presentation" element={<PresentationPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
