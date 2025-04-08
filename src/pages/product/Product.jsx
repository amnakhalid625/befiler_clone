import React from 'react'
import './product.css'; 

const Product = () => {

    const products = [
        {
          title: 'Tax Filing',
          desc: 'No appointments, no documents. File your taxes within minutes.'
        },
        {
          title: 'Business NTN Registration',
          desc: 'Quickest way to start your business in Pakistan.'
        },
        {
          title: 'Sales Tax Registration',
          desc: 'Register your sales tax with ease.'
        },
      
      ];
  return (
   <>
   <h1 className='product-title'>Popular Products</h1>
 <div className="grid-wrapper container">
      <div className="grid-container">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="card-btn">Click here to start now</button>
          </div>
        ))}
      </div>
    </div>

   </>
  )
}

export default Product