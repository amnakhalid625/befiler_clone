import mobile from '../../assets/mobile.png';
import button1 from '../../assets/button.png';
import button2 from '../../assets/button1.png';
import './mission.css';

const Mission = () => {
  return (
    <section className="mission-section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left image */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img src={mobile} alt="Mobile App" className=" mission-image" />
          </div>

          {/* Right text and buttons */}
          <div className="col-lg-6 text-lg-start text-center">
            <h1 className="mission-title">
              Say hello to the app that made everything even more convenient
            </h1>
            <p className="mission-subtext">Millions of app downloads by Pakistanis</p>
            <div className="mission-buttons d-flex justify-content-center justify-content-lg-start gap-3 mt-3">
              <img src={button1} alt="Download on Store" className="mission-button" />
              <img src={button2} alt="Download on Store" className="mission-button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
