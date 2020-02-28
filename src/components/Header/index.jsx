import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Anna Lebiedziewicz</div>

        <nav className="nav">
          <ul className="linkList">
            <li>
              <NavLink exact to="/" className="link" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="link"
                activeClassName="active"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="link" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
