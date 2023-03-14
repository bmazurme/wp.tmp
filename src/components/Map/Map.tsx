/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, MouseEvent } from 'react';
import './Map.css';

export default function Map() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent) => {
    setCoordinate({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const onMouseClick = () => console.log(`x: ${coordinate.x} - y: ${coordinate.y}`);

  return (
    <div
      className="whiteboard"
      onMouseMove={onMouseMove}
      onClick={onMouseClick}
    >
      {`x: ${coordinate.x} - y: ${coordinate.y}`}
    </div>
  );
}
