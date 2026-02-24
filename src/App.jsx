import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ImgGallary from './components/ImgGallary';
import Launch from './components/Launch';
import LatestCreationPage from './components/LatestCreationPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureSection />
              <ImgGallary />
              <Launch />
            </>
          }
        />
        <Route path="/latest" element={<LatestCreationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
