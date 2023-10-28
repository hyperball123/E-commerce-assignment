import React from "react";
import { Button } from "../utility/Button";
// import Logo from "../utility/Logo";
import { NavLink } from "react-router-dom";
import Logo from "../utility/Logo";

function Nav() {
  return (
    <>
      <Logo />

      <nav className="travellers_nav">
        <ul className="travellers_ul">
          <NavLink to="/login">
            <Button marginTop="-0.2rem" marginLeft="0.5rem">
              Login
            </Button>
          </NavLink>
          <NavLink to="/SignUp">
            <Button marginTop="-0.2rem" marginLeft="0.5rem">
              Register
            </Button>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
