import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../assets/context/UserContext";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

export default function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
};