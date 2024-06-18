import React, { useState, useEffect } from 'react';

function ChildComponent() {
    useEffect(() => {
      console.log('ChildComponent mounted!');
  
      return () => {
        console.log('ChildComponent unmounted!');
      };
    }, []);
  
    return <div>I'm a child component!</div>;
  }

function Unmounting() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? 'Hide' : 'Show'} Child
      </button>
      {showChild && <ChildComponent />}
    </div>
  );
}

export default Unmounting;