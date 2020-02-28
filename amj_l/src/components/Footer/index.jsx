import React from "react";
import "./index.css";

function Footer() {
  const date = new Date();
  return <div className="footer">Copyright: @amj_l {date.getFullYear()}</div>;
}

export default Footer;
