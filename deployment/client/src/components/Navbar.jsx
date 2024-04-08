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
            Bootstrap
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
