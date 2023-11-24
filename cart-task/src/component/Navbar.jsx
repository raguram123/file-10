import React from 'react';

function Navbar({ cartValue }) {
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light" >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            <img src="https://th.bing.com/th/id/OIP.OTu-wleaxSncJpQrAs0XNgHaFk?w=1597&h=1200&rs=1&pid=ImgDetMain" alt="icon" style={{width:"100px"}} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
            
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
      
          <form className="d-flex">
            <button className="btn btn-info" href="#!" type="submit">
            <i class="bi bi-cart me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-3 rounded-pill">{cartValue}</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;