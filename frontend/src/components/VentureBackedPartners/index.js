"use client";
import React from 'react';
import { motion } from 'framer-motion';
// const partners = [
//   { name: 'polygon', logo: 'https://via.placeholder.com/80x30?text=Polygon' },
//   { name: 'techstars', logo: 'https://via.placeholder.com/80x30?text=Techstars' },
//   { name: '105G Ventures', logo: 'https://via.placeholder.com/80x30?text=105G' },
//   { name: 'Signum Capital', logo: 'https://via.placeholder.com/80x30?text=Signum' },
//   { name: 'Combinator', logo: 'https://via.placeholder.com/80x30?text=Combinator' },
// ];

const highlightData = [
  { title: '50+', subtitle: 'Customers' },
  { title: '3+', subtitle: 'Countries' },
  { title: '2200+', subtitle: 'Projects' },
];
const VentureBackedPartners = () => {
  

  return (
    <div  className="bg-dark text-white py-5 rounded-4 mb-5" style={{ background: 'linear-gradient(to left,rgb(85, 46, 129),rgb(168, 33, 141))' }}>
      <div className="container">
        <div className="text-center mb-5">
        <h2 className="display-6 fw-bold mb-3">
  We help companies to{' '}
  <span
    style={{
      background: 'linear-gradient(135deg, rgb(255, 153, 250), rgba(159, 210, 255, 0.3))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    }}
  >
    brand market & sell
  </span>{' '}
  effortlessly
</h2>
        </div>

        {/* Highlighted Data */}
        <div className="row text-center border-top border-bottom border-secondary py-4">
          {highlightData.map((data, index) => (
            <div
              key={index}
              className={`col-12 col-sm-4 ${index < highlightData.length - 1 ? 'border-end border-secondary' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="display-6 fw-semibold">{data.title}</h3>
                <p className="text-light">{data.subtitle}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Partner Logos
        <div className="mt-5">
          <h3 className="text-center h4 fw-semibold mb-4">Backed by top venture partners</h3>
          <motion.div
            className="d-flex flex-wrap justify-content-center align-items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="img-fluid"
                style={{ height: '40px', objectFit: 'contain' }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              />
            ))}
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default VentureBackedPartners;
