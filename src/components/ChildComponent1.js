import React from 'react';

function ChildComponent1({ onSelect }) {
  return (
    <div>
      <button onClick={() => onSelect('Option 1')}>Option 1</button>
    </div>
  );
}

export default ChildComponent1;
