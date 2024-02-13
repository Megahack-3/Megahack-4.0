import React from 'react';
import LOGOO from "../../images/MEGA HACK 4.0.png";

function HomePage() {
  return (
    <div className="container" style={{backgroundImage: `url("../MEGA HACK 4.0.png")`}}>
      {/* <div className="logo"></div> */}
      <img className="logo" src={LOGOO} alt="Logo" />
      <div className="text">
        <h1>CODE | COMPETE | CONQUER</h1>
      </div>
    </div>
  );
}

export default HomePage;
