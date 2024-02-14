import React, { useEffect, useState } from "react";
import "./LogoSlider.css";

const LogoSlider = () => {
  const [rotating, setRotating] = useState(true);

  useEffect(() => {
    const $clientslider = document.getElementById('clientlogo');
    const clients = $clientslider.children.length;
    const clientwidth = clients * 220;
    $clientslider.style.width = clientwidth + 'px';
    const clientspeed = 1800;
    const seeclients = setInterval(rotateClients, clientspeed);

    function rotateClients() {
      if (rotating !== false) {
        const $first = document.querySelector('#clientlogo li:first-child');
        $first.style.marginLeft = '-220px';
        setTimeout(() => {
          $first.remove();
          $first.style.marginLeft = '0px';
          document.querySelector('#clientlogo').appendChild($first);
        }, 2000);
      }
    }

    return () => clearInterval(seeclients);
  }, [rotating]);

  const handleMouseEnter = () => {
    setRotating(false);
  };

  const handleMouseLeave = () => {
    setRotating(true);
  };

  return (
    <div id="ourclients" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <center><h3>Our Partners</h3></center>
      <div className="clients-wrap">
        <ul id="clientlogo" className="clearfix">
          <li>
            <a href="https://www.sponsor1.com" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/N92D9G3/Screenshot-2020-10-20-My-Brand-New-Logo-My-Brand-New-Logo-Logo-design-proposals-removebg-preview.png" alt="Logo 1" />
            </a>
          </li>
          <li>
            <a href="https://www.sponsor2.com" target="_blank" rel="noopener noreferrer">
              <img src="https://example.com/logo2.png" alt="Logo 2" />
            </a>
          </li>
          <li>
            <a href="https://www.sponsor3.com" target="_blank" rel="noopener noreferrer">
              <img src="https://example.com/logo3.png" alt="Logo 3" />
            </a>
          </li>
          {/* Add more <li> with logo images */}
        </ul>
      </div>
    </div>
  );
};

export default LogoSlider;
