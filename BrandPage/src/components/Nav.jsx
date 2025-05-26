import React from 'react';
import Cokelogo from "../images/Cokelogo.svg";

function Nav() {
  return (
    <nav>
      <img src={Cokelogo} alt="cd" />
      <ul>
        <li>Brand</li>
        <li>Discover</li>
        <li>Impact</li>
        <li>Shop</li>
      </ul>
      <button>Login</button>
    </nav>
  );
}

export default Nav;
