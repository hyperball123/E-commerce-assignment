import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { auth } from "../../config/firebase";
import { Button } from "../../Components/utility/Button";
import { useAuthState } from "react-firebase-hooks/auth";

function User() {
  // u can validate either ways if user is logged in or not

  const [user, setUser] = useState(null);
  const [users, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     console.log(user);
  //     user ? setUser(user) : setUser(null);
  //   });
  // }, []);

  return (
    <div>
      {loading ? (
        <h1 style={{ textAlign: "center", fontSize: "6rem" }}>
          Loading Your page. Please wait!!!
        </h1>
      ) : users ? (
        <Outlet />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <h1>
          Login First
          <NavLink to="/login">
            <Button marginTop="-0.2rem" marginLeft="0.5rem">
              Login
            </Button>
          </NavLink>
        </h1>
      )}
    </div>
  );
}

export default User;
