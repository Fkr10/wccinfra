import React from "react";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
  <a href="/" className="logo d-flex align-items-center me-auto">
          {/* <img src="assets/img/logo.svg" alt="" /> */}
          <h1 className="sitename">WCC INFRA</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
                <br />
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#team" > Team</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
