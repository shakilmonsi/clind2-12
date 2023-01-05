import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/Logo/footer4.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="p-10 mt-10"
    >
      <div className="footer font-bold text-black">
        <div>
          <span className="footer-title font-bold text-primary-900">
            Services
          </span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title font-bold text-primary-900">
            Company
          </span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title font-bold text-primary-900">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="text-center mt-32 font-bold text-red-900">
        <p>Copyright © 2022 - All right reserved by CarFair Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
