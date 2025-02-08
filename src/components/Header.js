import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/header.css"; 

const Header = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar"
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          CreditSea
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Header;
