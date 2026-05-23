import { motion } from 'framer-motion';

const Hero = ({ product, onBuyNow }) => {
  return (
    <section style={{ 
      height: '100vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      overflow: 'hidden' 
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/assets/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))'
        }} />
      </div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '600px', color: 'white' }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              color: 'var(--secondary)', 
              textTransform: 'uppercase', 
              letterSpacing: '4px', 
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            Organic & Pure
          </motion.span>
          <h1 style={{ fontSize: '4.5rem', margin: '1rem 0', lineHeight: 1.1 }}>
            Harvesting Nature's <br /> 
            <span style={{ color: 'var(--secondary)' }}>Purest Gold</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Experience the exquisite aroma and vibrant color of authentic Himalayan Saffron, hand-harvested with love from our sustainable farms.
          </p>
          <button onClick={onBuyNow} className="btn-primary" style={{ fontSize: '1.1rem' }}>
            Get Your Jar Today • ₹{product.price}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
