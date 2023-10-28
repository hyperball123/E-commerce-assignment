import React, { useEffect, useState } from "react";
import "./CreateAcc.css";
import Gicon from "../../assets/google.png.png";
import { auth } from "../../config/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../Components/utility/Button";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onlogin(e) {
    e.preventDefault();
    console.log("logged in successfully");
    try {
      const result = signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      navigate("/user/Products");
      // console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log(errorCode, errorMsg);
    }
  }

  return (
    <main className="travellers-createAcc">
      <div className="wrapper">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div
            className="Login btn"
            // onClick={() => logInWithEmailAndPassword(email, password)}
            onClick={onlogin}
          >
            {/* <Button textAlign="center">Login</Button> */}
            Login
          </div>
          <div className="text">
            <h3>
              <NavLink to="/reset">Forgot password</NavLink>
            </h3>
            <h3>
              Don't have an account?
              <NavLink to="/signUp">Register now</NavLink>
            </h3>
          </div>
          <div className="register-google" >
            <Button
              bgColor="#fff"
              textColor="#6E6B6B"
              border="2px solid #ccc"
              textAlign="center"
              width="100%"
            >
              <img
                src={Gicon}
                alt="google"
                height="25"
                width="25"
                style={{ verticalAlign: "middle" }}
              />
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "1rem",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }}
              >
                Sign in with Google
              </p>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignIn;
