import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <nav className="poppins-extralight">
        <div className="logo ">
          <img src="../../images/brand_logo.png" alt="nike logo" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
}

export default App;
