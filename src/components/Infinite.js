import React from 'react';
import './infinite.css'; // Import your CSS file

const ScrollingText = () => {
  return (
    <div className="marquee-w bg-blue-300">
      <div className="marquee">
        <span >Code <i class="fa-solid fa-code"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Develop <i class="fa-solid fa-computer"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discover <i class="fa-solid fa-star"></i>&nbsp;&nbsp;&nbsp;</span>
      </div>
      <div className="marquee marquee2">
      <span >Code <i class="fa-solid fa-code"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Develop <i class="fa-solid fa-computer"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discover <i class="fa-solid fa-star"></i>&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
};

export default ScrollingText;
