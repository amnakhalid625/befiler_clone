import React from 'react';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import './partner.css';

const Partner = () => {
  const partnerImages = [
    one,
    two,
    'https://www.befiler.com/assets/images/home/partner_3.png',
    'https://www.befiler.com/assets/images/home/partner_4.png',
    'https://www.befiler.com/assets/images/home/partner_5.png',
    'https://www.befiler.com/assets/images/home/partner_6.png',
    'https://www.befiler.com/assets/images/home/partner_7.png',
    'https://www.befiler.com/assets/images/home/partner_8.png',
    'https://www.befiler.com/assets/images/home/partner_9.png',
    'https://www.befiler.com/assets/images/home/partner_10.png',
    'https://www.befiler.com/assets/images/home/partner_11.png',
    'https://www.befiler.com/assets/images/home/partner_12.png',
    'https://www.befiler.com/assets/images/home/partner_13.png',
    'https://www.befiler.com/assets/images/home/partner_14.png',
  ];

  return (
    <section className="partner-section container-fluid py-5">
      <div className="container text-center">
        <h1 className="mb-4">Our Partners and Collaborators</h1>
        <div className="row justify-content-center align-items-center">
          {partnerImages.map((imgSrc, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" key={index}>
              <img src={imgSrc} alt={`partner-${index + 1}`} className="img-fluid partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
