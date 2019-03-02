import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="flex justify-between bg-blue bb b--white-10">
      <a
        className="link white-70 hover-white no-underline flex items-center pa3"
        href="">
        NMCG
      </a>
      <div className="flex-grow pa3 flex items-center">
        <a className="f6 link dib white dim mr3 mr4-ns" href="#0">
          About
        </a>
        <a className="f6 link dib white dim mr3 mr4-ns" href="#0">
          Sign In
        </a>
        <a
          className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
          href="#0">
          Sign Up
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
