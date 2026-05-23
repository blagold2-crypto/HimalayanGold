import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Leaf size={28} color="var(--secondary)" />
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif" }}>
                Himalayan Gold
              </span>
            </div>
            <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
              Bringing the world's most precious spice directly from our Himalayan farms to your kitchen. Pure, potent, and ethically harvested.
            </p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
          © 2026 Himalayan Gold Saffron Farms. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
