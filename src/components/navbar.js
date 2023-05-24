import React from "react";
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';

function Navbar() {
return (
<div>
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/"><img src={logo} alt="Logo"/></Link>
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/projects">Projects</Link>
        <Link className="navbar-brand" to="/contact">Contact</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Skills
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link className="dropdown-item" to="/skills/programmer">Programmer</Link></li>
                  <li><Link className="dropdown-item" to="/skills/graphic-design">Graphic Design</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/links">Links</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</div>
  )
 }         

export default Navbar;