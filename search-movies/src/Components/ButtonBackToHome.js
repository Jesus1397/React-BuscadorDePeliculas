import React from "react";
import { Link } from "react-router-dom";

function ButtonBackToHome(props) {
  return (
    <Link className="button is-info" to="/">
      Back
    </Link>
  );
}

export default ButtonBackToHome;
