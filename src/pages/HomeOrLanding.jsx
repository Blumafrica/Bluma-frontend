import React, { useState } from "react";
import Homepage from "./HomePage";

import LandingPage from "./landinPage/LandingPage";
import AdminLogin from "./admin/AdminLogin";

function HomeLandingOrAdmin() {
  const [loggedIn, setLoggedin] = useState(false);
  return (
    <div className="home-or-landing-page">
      {loggedIn ? <Homepage /> : <LandingPage />}
    </div>
  );
}

export default HomeLandingOrAdmin;
