import React from 'react'
import { FaLock } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import flag from './../../assets/usa-flag.png'
import logo from '../../assets/logo.png'
import './navbar.css'


const Navbar = () => {
  return (

    <div className='navbar-container'>
      <nav className="navbar navbar-expand-lg container  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" className='logo' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">tax tool</a>
              </li>


              <li>
                <a className="nav-link" href="#">Resourses</a>
              </li>
              <li>
                <a className="nav-link" href="#">Business Services</a>
              </li>
              <li>
                <a className="nav-link" href="#">Sale tax</a>
              </li>
              <li>
                <a className="nav-link" href="#"><img src={flag} className='flag' />usa Services</a>
              </li>
            </ul>
            <button className='home-btn btn-signin'><FaSignInAlt /> sign In</button>
            <button className='home-btn btn-signup'><FaLock />sign up</button>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar