import React from "react";
import Logo from "../utility/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../utility/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

function ProductsNav() {
  const currUser = auth.currentUser;


  const navigate = useNavigate();
    const logout = () => {
      signOut(auth);
      console.log("LOGGED OUT SUCCESSFULLY");
      navigate("/");
    };
  return (
    <>
      <Logo />
      <nav className="travellers_nav">
        <ul className="travellers_ul">
          <h2>Signed in as {currUser.displayName || currUser.email}</h2>
          <NavLink to="/SignUp">
            <li onClick={logout}>
              <Button marginTop="-0.2rem" marginLeft="0.5rem">
                Log out
              </Button>
            </li> 
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default ProductsNav;
