import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!-- ***** Header Area Start ***** --> */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" className="logo">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "assets/images/templatemo-eduwell.png"
                    }
                    alt="EduWell Template"
                  />
                </a>
                {/* <!-- ***** Logo End ***** -->
                      <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#courses">Courses</a>
                  </li>
                  <li className="has-sub">
                    <a href="javascript:void(0)">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/services">Our Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contactus">Contact Us</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact-section">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}
    </>
  );
};

export default Navbar;
