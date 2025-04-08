import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HomeImage from '../../assets/home-img.png'
import './home.css'
const Home = () => {
  return (
    <>
    <Navbar />
    <div>

<section className='container-fluid home-section'>
    <div className="container home-container">
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-sm-12 col-12">
                <div className="home-text">
                <h1>
                        File Your Taxes In Just 6 Minutes
                        With Our Qualified Consultants!
                    </h1>
                    <h2>Now available in just Rs. 3000/-</h2>
                    
                    <p>
                        Befiler goes beyond tax filing! We also help with all your business registration,
                        sales tax filing, trademark registration, and LLC registration in the USA — all in one place.
                    </p>
                    <button className='home-btn'>File Now</button>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-12">
                <div><img src={HomeImage} alt="" className='img-fluid' /></div>
            </div>
        </div>
    </div>
</section>


    </div>
    </>
  )
}

export default Home