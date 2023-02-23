import React, { memo, useEffect, useState } from "react";
import { Link,Redirect } from "react-router-dom";
import "./CustomerWelcome.css";

export default memo(function CustomerWelcome() {
  

  const [staffName, setName] = useState("");

  

  return (
    <div className="welcomeBackground">
      <Link to="/customerInput">
        <button className="wishButton">我要许愿</button>
      </Link>
    </div>
  );
});
