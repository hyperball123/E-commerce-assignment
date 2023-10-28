import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignUp/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";
import Products from "./Pages/Products/Products";
import User from "./Pages/userAccount/User";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/user" element={<User />}>
          <Route path="Products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
