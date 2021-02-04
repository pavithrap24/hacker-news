import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

function NavBar() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        Hacker News{" "}
      </Link>
      <Link to="/news"> new </Link>
      <Link to="/past"> past </Link>
      <Link to="/comments"> comments </Link>
      <Link to="/ask"> ask </Link>
      <Link to="/show"> show </Link>
      <Link to="/jobs"> jobs </Link>
      <Link to="/submit"> submit </Link>
    </div>
  );
}

export default NavBar;
