
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
    </div>
  );
}

export default App;