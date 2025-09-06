import React from 'react';

// ✅ Must export memoized component
const UseCallbackChild = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Child Button</button>;
});

export default UseCallbackChild;
