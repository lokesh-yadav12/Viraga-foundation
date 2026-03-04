// import React from 'react'

// const ViragaFoundation = () => {
//   return (
//     <div>ViragaFoundation</div>
//   )
// }

// export default ViragaFoundation



import React, { useState } from 'react';

interface ContactCardProps {
  phone: string;
}

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const ChatIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.33-3.82-.91l-.27-.16-2.82.48.48-2.82-.16-.27C4.33 14.67 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
    <circle cx="9" cy="12" r="1"/>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="15" cy="12" r="1"/>
  </svg>
);

const ContactCard: React.FC<ContactCardProps> = ({ phone }) => (
  <div className="contact-card">
    <h3>Need to Know More Details?</h3>
    <div className="phone">{phone}</div>
  </div>
);

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => (
  <div className="info-card">
    <h3>{title}</h3>
    <div className="info-text">
      {children}
    </div>
  </div>
);

const ViragaFoundation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChatClick = () => {
    window.open(`tel:+919492940941`, '_self');
  };

  const handleGetMoreDetails = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('Redirecting to more details...');
  };

  return (
    <div className="body-wrapper">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .body-wrapper {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          padding: 40px 20px;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          background: white;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .header {
          text-align: center;
          padding: 40px 20px 20px;
          background: linear-gradient(to right, white, #fff5ee);
        }

        .header h2 {
          font-size: 1.2rem;
          color: #333;
          font-weight: 500;
          position: relative;
          display: inline-block;
          padding: 0 40px;
        }

        .header h2::before,
        .header h2::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #ff6b35, #ff8c42);
        }

        .header h2::before {
          left: -90px;
        }

        .header h2::after {
          right: -90px;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 60px;
          align-items: center;
        }

        .image-section {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1;
          margin: 0 auto;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          border: 8px solid white;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .contact-card {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 30px 50px;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          text-align: center;
          width: 90%;
          max-width: 400px;
        }

        .contact-card h3 {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .contact-card .phone {
          color: #ff6b35;
          font-size: 1.8rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .text-section {
          padding: 20px;
        }

        .text-section h1 {
          font-size: 3.5rem;
          color: #1a1a2e;
          margin-bottom: 40px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .info-card {
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
          border-radius: 30px;
          padding: 50px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .info-card h3 {
          color: white;
          font-size: 2rem;
          margin-bottom: 25px;
          font-weight: 700;
          position: relative;
          z-index: 1;
        }

        .info-text {
          background: white;
          border-radius: 20px;
          padding: 35px;
          color: #555;
          line-height: 1.8;
          font-size: 1.05rem;
          position: relative;
          z-index: 1;
        }

        .info-text p {
          margin-bottom: 20px;
        }

        .info-text p:last-child {
          margin-bottom: 0;
        }

        .cta-button {
          display: inline-block;
          margin-top: 40px;
          padding: 18px 50px;
          background: white;
          color: #1a1a2e;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          border: 3px solid #1a1a2e;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .cta-button:hover {
          background: #1a1a2e;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .chat-icon {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
          transition: transform 0.3s ease;
        }

        .chat-icon:hover {
          transform: scale(1.1);
        }

        .chat-icon svg {
          width: 35px;
          height: 35px;
          fill: white;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 80px;
            padding: 40px;
          }

          .text-section h1 {
            font-size: 2.5rem;
          }

          .contact-card {
            position: static;
            transform: none;
            margin-top: 40px;
          }
        }

        @media (max-width: 768px) {
          .header h2::before,
          .header h2::after {
            width: 40px;
          }

          .header h2::before {
            left: -50px;
          }

          .header h2::after {
            right: -50px;
          }

          .text-section h1 {
            font-size: 2rem;
          }

          .info-card {
            padding: 30px 25px;
          }

          .info-text {
            padding: 25px;
            font-size: 0.95rem;
          }

          .content-wrapper {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h2>Get to Know About Us</h2>
        </div>

        <div className="content-wrapper">
          <div className="image-section">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=800&fit=crop" 
                alt="Viraga Foundation Team"
              />
            </div>
            <ContactCard phone="+91 9492940941" />
          </div>

          <div className="text-section">
            <h1>VIRAGA FOUNDATION</h1>
            
            <InfoCard title="VIRAGA">
              <p>
                VIRAGA FOUNDATION was established on November 25, 2020, by a group of 
                dedicated individuals inspired by the timeless teachings of Swami Vivekananda. 
                Our journey began with a vision to serve humanity with compassion, and our 
                foundation was graciously inaugurated by Swami Hridananadji Maharaj, Secretary 
                of Ramakrishna Mission, Vijayawada.
              </p>
              
              <p>
                At VIRAGA FOUNDATION, we firmly believe that selfless service is the highest 
                form of humanity. Inspired by Swami Vivekananda's profound words—
              </p>
            </InfoCard>

            <a 
              href="#" 
              className="cta-button"
              onClick={handleGetMoreDetails}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              GET MORE DETAILS
            </a>
          </div>
        </div>
      </div>

      <div className="chat-icon" onClick={handleChatClick}>
        <ChatIcon />
      </div>
    </div>
  );
};

export default ViragaFoundation;