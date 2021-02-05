import React from "react";
import Anchor from "../../components/Anchor";

import "./navBar.css";

function NavBar() {
  return (
    <div>
      <Anchor to="/">Hacker News </Anchor>
      <Anchor to="/news"> new </Anchor>
      <Anchor to="/past"> past </Anchor>
      <Anchor to="/comments"> comments </Anchor>
      <Anchor to="/ask"> ask </Anchor>
      <Anchor to="/show"> show </Anchor>
      <Anchor to="/jobs"> jobs </Anchor>
      <Anchor to="/submit"> submit </Anchor>
    </div>
  );
}

export default NavBar;
