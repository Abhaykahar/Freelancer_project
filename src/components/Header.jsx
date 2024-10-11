import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  mb-4" style={{background:'#00008B'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/payments">Payments</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
