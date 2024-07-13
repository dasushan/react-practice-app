import SearchIcon from '../SearchIcon';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <header>
        <h1>DAS & SONS</h1>
      </header>

      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </nav>
      <section className="section-icon">
        
          <SearchIcon />
        
      </section>
    </div>
  );
};

export default Header;
