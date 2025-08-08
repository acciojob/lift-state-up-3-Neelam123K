import React from 'react';

const ChildComponent2 = ({ onSelect }) => {
  return (
    <div>
      <button onClick={() => onSelect('Option 2')}>Option 2</button>
    </div>
  );
}

export default ChildComponent2;
