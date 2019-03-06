import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="flex justify-between bg-blue bb b--white-10">
      <a className="link  flex items-center pa3" href="/map">
        <img
          src="https://nmcg.nic.in/logo/Namami%20Gange%20Logo_English.jpg"
          width={70}
          height={50}
        />
      </a>
      <div className="flex-grow pa3 flex items-center">
        <a
          className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
          href="#0">
          Logout
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
