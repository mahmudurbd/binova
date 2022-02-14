import React from 'react';
import './Header.css';
import logo from '../../../../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
const Header = () => {
  const {user, logOut} = useAuth();
  const hanldleLogOut = () => {
    logOut();
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
  <div class="container">
    <a class="navbar-brand p-3 logo" href="/"><img src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active-color" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/exploreshoes">Explore Shoes</Link>
        </li>
        { !user.email && <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>}
        {user.email && <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><Link class="dropdown-item" to="/addproduct">Add Product</Link></li>
            <li><Link class="dropdown-item" to="/manageorders">Manage Orders</Link></li>
            <li><Link class="dropdown-item" to="/admin">Make Admin</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/payment">Pay</Link></li>
            <li><Link class="dropdown-item" to="/">My Orders</Link></li>
            <li><Link class="dropdown-item" to="/review">Reviews</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link onClick={hanldleLogOut} class="dropdown-item" to="/">Logout</Link></li>
          </ul>
        </li>}
        { user.email && <li class="nav-item">
          <Link class="nav-link" to="/">{user.displayName}</Link>
        </li>}
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;