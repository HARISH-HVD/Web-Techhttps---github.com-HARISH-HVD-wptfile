import React from "react";
import logo from "../assets/imgs/logo111.png";


const Header = () => {
  const getStarted = (e) => {
    e.preventDefault();
    console.log("Getting started...");
  };

  return (
    <div className="header">
      <nav>
        <img src={logo} height={200} alt=""/> 
        <div>
          <button className="language-btn">English ⚡</button>
          <button>Sign In</button>
        </div>
      </nav>
      <div className="header-content">
        <h1>Your One Stop Collection</h1>
        <h3>For Making your Life Memorable</h3>
        <p>Hold Peace and joy in every day of your Life....</p>
        <form className="email-signup" onSubmit={getStarted}>
          <input type="email" id="email" placeholder="Email address" required />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
