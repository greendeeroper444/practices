import React from 'react';
import toast from 'react-hot-toast';

const UseCallback = ({onClick}) => {
  toast.success('UseCallback Component Rendered');
  return <button onClick={onClick}>Click Me (useCallback)</button>;
};

export default UseCallback;