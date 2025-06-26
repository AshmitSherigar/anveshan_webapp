import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import AboutUs from '../src/components/AboutUs';
import Preloader from '../src/components/Preloader';

function App() {
  const [loading, setLoading] = useState(() => {
    const isFirstVisit = !sessionStorage.getItem('preloaderShown');
    return isFirstVisit;
  });

  useEffect(() => {
    console.log("useEffect");

    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('preloaderShown', 'true');
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <Router>
      {loading ? ( <Preloader />) : 
      (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;