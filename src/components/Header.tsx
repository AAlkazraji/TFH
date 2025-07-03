import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">Your Architecture Firm</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
