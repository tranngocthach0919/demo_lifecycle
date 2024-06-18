import React, { useState, useEffect } from 'react';

function InfiniteCallbackDemo() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(incrementCount); // No dependency array

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default InfiniteCallbackDemo;
