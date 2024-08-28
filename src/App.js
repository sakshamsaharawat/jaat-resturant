import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Color from './pages/Color';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/color" element={<Color />} />
          <Route path="*" element={<Pagenotfound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
