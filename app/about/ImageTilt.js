import React, { useState } from 'react';
import './ImageParallax.css';

const ImageParallax = () => {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseEnter = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const containerCenterX = left + width / 2;
    const containerCenterY = top + height / 2;
    const tiltX = (clientX - containerCenterX) / 10; // Adjust tiltX factor for larger area
    const tiltY = (clientY - containerCenterY) / 10; // Adjust tiltY factor for larger area

    setTiltX(tiltX);
    setTiltY(tiltY);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="image1"
        style={{
          transform: `perspective(1000px) rotateY(${tiltX}deg) rotateX(${tiltY}deg) scale(1.1)`,
        }}
      >
        {/* Your image content goes here */}
        <img src="https://cdn.discordapp.com/attachments/1122590461937328290/1122934986404810832/image.png" />
      </div>
    </div>
  );
};

export default ImageParallax;
