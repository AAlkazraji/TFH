import { Link } from "react-router-dom";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">Studio + Partners</h1>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
