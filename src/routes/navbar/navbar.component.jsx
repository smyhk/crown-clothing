import { Outlet, Link } from 'react-router-dom';

import CrownLogo from '../../assets/crown.svg';

import './navbar.styles.scss';

const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={CrownLogo} alt="crown link" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
