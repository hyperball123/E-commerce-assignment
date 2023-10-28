import React, { useEffect, useState } from "react";
import "./CreateAcc.css";
import Gicon from "../../assets/google.png.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/utility/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // destructuring to assign values to three variables
  // const [user, loading] = useAuthState(auth);

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) {
  //     navigate("/user/Products", { replace: true });
  //   }
  // }, [user, loading, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || !email || !password) {
      alert("Please fill in all the details.");
      return false; // Prevent the form from submitting
    } else {
      // signUpWithEmailAndPassword(name, email, password);
      SignIn();
    }
  }

  async function SignIn() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      const token = sessionStorage.setItem("auth-token", user.refreshToken);
      console.log(token);

      navigate("/user/Products");
    } catch (err) {
      console.error("Sign in Error" + err);
    }
  }

  return (
    <main className="travellers-createAcc">
      <div className="wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>

          <div className="input-box button">
            <input type="Submit" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <NavLink to="/Login">Login now</NavLink>
            </h3>
          </div>
          <div className="register-google">
            <Button
              bgColor="#fff"
              textColor="#6E6B6B"
              border="2px solid #ccc"
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
                className="google-btn"
              >
                <NavLink to="/Login">Sign up with Google</NavLink>
              </p>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
