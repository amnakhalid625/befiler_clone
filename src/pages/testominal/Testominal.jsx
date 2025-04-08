import React from 'react'
import './testominal.css'
import test from '../../assets/test.png'

const Testominal = () => {
  return (
  <>
    <section className="testominal-section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img src={test} alt="Mobile App" className="testominal-image" />
          </div>

          <div className="col-lg-6">
            <h3 className="testominal-title">What Our Customers Says</h3>
            <p className="testominal-text">
              "This product has completely changed the way I do my work! I am more productive and organized. Highly recommend!"
            </p>
            <p className="customer-name">-John Doe</p>

            

            <p className="testominal-text">
              "Absolutely love it! It's intuitive and easy to use. Worth every penny!"
            </p>
            <p className="customer-name">-Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Testominal
