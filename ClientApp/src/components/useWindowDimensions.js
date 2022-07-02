import { useState, useEffect } from 'react';

export default function WindowDims() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const updateSize = () => {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };
  useEffect(() => {
    window.onresize = updateSize;
  }, []);
  return (
    <>
      <p>width is : {size.x}</p>
      <p>height is : {size.y}</p>
    </>
  );
}
