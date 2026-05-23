import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import PaymentModal from './components/PaymentModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = {
    name: "Pure Himalayan Saffron (Grade A++)",
    price: 999,
    description: "Hand-picked from the pristine valleys of the Himalayas. Our saffron is 100% pure, organic, and lab-tested for the highest safranal content.",
    image: "/assets/product.png"
  };

  return (
    <div className="App">
      <Navbar />
      <Hero product={product} onBuyNow={() => setIsModalOpen(true)} />
      <ProductDetails product={product} onBuyNow={() => setIsModalOpen(true)} />
      <Footer />
      
      {isModalOpen && (
        <PaymentModal 
          product={product} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;
