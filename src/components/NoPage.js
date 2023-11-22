import React from "react";
import nopage from "../assets/404.jpg";

function NoPage() {
  return (
    <div>
      <img src={nopage} alt="" style={{ height: "100%", width: "100%" }} />
    </div>
  );
}

export default NoPage;
