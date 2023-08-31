import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    //cleanUp function
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"} `}>
      <div className="nav_content">
        <img
          className="nav_logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
