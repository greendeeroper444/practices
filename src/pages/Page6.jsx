import React, { useEffect } from 'react'

function Page6() {
    useEffect(() => {
        const arr = [1, 2, 3, 4];
        const result = arr.map((e) => {
            // return e * 2; //e means each element in the array//2, 4, 6, 8
            // return e % 2 === 0; // true, false, true, false
            return e > 2; // false, false, true, true
        })

        console.log(result); // [false, false, true, true]
    });
  return (
    // <div class='container'>
    //   <div>Item 1</div>
    //   <div>Item 2</div>
    //   <div>Item 3</div>
    //   <div>Item 4</div>
    // </div>

    <div className='box'>
      <div>sds</div>
    </div>

  )
}

export default Page6