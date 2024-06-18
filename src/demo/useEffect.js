import React, { useState, useEffect, useLayoutEffect } from "react";

function Flicker() {
  const [value, setValue] = useState(0);

  const [valueLO, setValueLO] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(Math.random());
    }
  }, [value]);

  useLayoutEffect(() => {
    if (valueLO === 0) {
      setValueLO(Math.random());
    }
  }, [valueLO]);
  let style = {fontSize: 80 + 'px'};
  
  return (
    <div>
      <h3 style={style}>useEffect: {value}</h3>
      <button style={style} onClick={() => setValue(0)}>Click to change</button>

      <h3 style={style}>useLayoutEffect: {valueLO}</h3>
      <button style={style} onClick={() => setValueLO(0)}>Click to change</button>
    </div>
  );
};

export default Flicker;