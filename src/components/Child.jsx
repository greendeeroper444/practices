import React from 'react'

const Child = React.memo(({onDataChange}) => {
    
    const handleInputChange = (e) => {
        onDataChange(e.target.value); //send data to parent
    };

  return (
    <div>
        <input type="text" onChange={handleInputChange} placeholder='Type something...' />
    </div>
  )
})

export default Child
