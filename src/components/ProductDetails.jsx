import { CheckCircle, ShieldCheck, Truck } from 'lucide-react';

const ProductDetails = ({ product, onBuyNow }) => {
  return (
    <section id="details" className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
            <div className="glass" style={{ 
              position: 'absolute', 
              bottom: '-30px', 
              right: '-30px', 
              padding: '2rem', 
              borderRadius: '20px',
              maxWidth: '250px'
            }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Limited Harvest</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Only 50 jars available from this season's first pick.</p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{product.name}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              {product.description}
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <CheckCircle color="var(--primary)" />
                <span>100% Organic & Chemical Free</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <ShieldCheck color="var(--primary)" />
                <span>ISO 3632 Grade 1 Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Truck color="var(--primary)" />
                <span>Free Express Shipping across India</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>₹{product.price}</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹1,299</span>
              <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>{Math.round(((1299 - product.price) / 1299) * 100)}% OFF</span>
            </div>

            <button onClick={onBuyNow} className="btn-primary" style={{ width: '100%', fontSize: '1.2rem' }}>
              Add to Basket • ₹{product.price}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
