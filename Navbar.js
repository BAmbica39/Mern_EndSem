import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div style={{ backgroundColor: '#E6E6FA' }} className="container">
        <Link to="/">
          <h1>Fitness Tracker</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;