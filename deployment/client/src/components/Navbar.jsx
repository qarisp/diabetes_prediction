import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              alt="Logo"
              width="40"
              height="35"
              className="d-inline-block align-text-top"
            />
            Diabetes-CDC
          </a>
          <Link className='btn btn-outline-primary m-2' to="/inputdata">Diabetes Prediction</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
