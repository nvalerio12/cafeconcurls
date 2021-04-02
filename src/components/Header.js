import React from "react";
import {Link} from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <Link className="logo" to="/" aria-label="Product">
              CafeCon<span>Curls</span>
            </Link>
            <Link className="mt-4" to="/">
              Home
            </Link>
            <Link className="mt-4" to="/contact">
              Contact
            </Link>
            <Link className="mt-4" to="/login">
              Login
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
