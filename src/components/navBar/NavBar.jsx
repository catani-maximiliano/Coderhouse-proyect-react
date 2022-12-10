import "./Navbar.css";

import {Link} from "react-router-dom"

import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {


  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dzaukrjet/image/upload/v1670630013/logo-vw_rdlgbn.png"
          alt=""
          />
          </Link>
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/" >Todos</Link>
        <Link className="navbar-item" to="/category/automovil" >Automoviles</Link>
        <Link className="navbar-item" to="/category/motocicletas" >Motocicletas</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
