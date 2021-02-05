import React from "react";
import { Link } from "react-router-dom";

function Anchor({ children, ...remProps }) {
  return (
    <Link {...remProps} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
}

export default Anchor;
