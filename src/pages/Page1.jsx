import React from 'react'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'
import Component4 from '../components/Component4'
import Component5 from '../components/Component5'
import ReactMemo from '../components/ReactMemo'

function Page1() {

    // const names = [
    //     'Greendee Roper B. Panogalon',
    //     'Meriam Apatan Cerna',
    //     'Rhondel Colecha'
    // ]
    const users = [
    {
        name: 'Greendee Roper B. Panogalon',
        age: 25,
        address: 'Tagum City, Davao del Norte',
        religion: 'Roman Catholic'
    },
    {
        name: 'Meriam Apatan Cerna',
        age: 45,
        address: 'Panabo City, Davao del Norte',
        religion: 'Islam'
    },
    {
        name: 'Rhondel Colecha',
        age: 30,
        address: 'Davao City',
        religion: 'Christian'
    }
    ];

  return (
    <div>
        {/* <Component1 name='Greendee Roper B. Panogalon' />
        <Component1 name='Meriam Apatan Cerna' /> */}
        <Component1 user={users} />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
    </div>
  )
}

export default Page1