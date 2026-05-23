import { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const PaymentModal = ({ product, onClose }) => {
  const [step, setStep] = useState('QR'); // QR, VERIFY, DONE
  const upiId = "9063048089@ybl";

  const handleOpenTelegram = () => {
    window.open("https://t.me/Tradingwithram_bot", "_blank");
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '1rem'
    }}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          backgroundColor: 'var(--bg-card)',
          color: 'var(--text-dark)',
          padding: '2.5rem',
          borderRadius: '24px',
          maxWidth: '500px',
          width: '100%',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', border: 'none', background: 'none', cursor: 'pointer', color: 'inherit' }}
        >
          <X size={24} />
        </button>

        {step === 'QR' && (
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Complete Your Order</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Secure payment via UPI
            </p>

            <div style={{ 
              backgroundColor: 'var(--bg-cream)', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Amount to Pay</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>₹{product.price}</div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>Scan QR to Pay</p>
              <div style={{ 
                width: '200px', 
                height: '200px', 
                backgroundColor: 'var(--bg-qr)', 
                margin: '0 auto',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed var(--border-qr)'
              }}>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=${upiId}%26pn=HimalayanGold%26am=${product.price}%26cu=INR`} alt="UPI QR" />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={onClose}
                className="btn-primary" 
                style={{ flex: 1, backgroundColor: 'var(--bg-button-secondary)', color: 'var(--text-dark)' }}
              >
                Cancel
              </button>
              <button 
                onClick={() => setStep('VERIFY')}
                className="btn-primary" 
                style={{ flex: 1 }}
              >
                I Have Paid
              </button>
            </div>
          </>
        )}

        {step === 'VERIFY' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Verify Payment</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Please send a screenshot of your successful payment to our Telegram admin for manual verification.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button 
                onClick={handleOpenTelegram}
                className="btn-primary" 
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                Open Telegram
              </button>
              <button 
                onClick={() => setStep('DONE')}
                className="btn-primary" 
                style={{ width: '100%', backgroundColor: 'var(--bg-button-secondary)', color: 'var(--text-dark)' }}
              >
                Done
              </button>
            </div>
          </div>
        )}

        {step === 'DONE' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📩</div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Screenshot submitted!</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Link will be sent to you shortly in telegram after verifying payment successfully, please wait 📩⏳
            </p>
            <button 
              onClick={onClose}
              className="btn-primary" 
              style={{ width: '100%' }}
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentModal;
