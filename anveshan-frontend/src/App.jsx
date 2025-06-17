import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import AboutUs from '../src/components/AboutUs';
import Preloader from '../src/components/Preloader';

function App() {
  return (

    <Router>
      <Routes>
        {/* <Preloader /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
