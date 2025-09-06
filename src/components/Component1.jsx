import React from 'react'

function Component1(props) {
  return (
    <div>
        <h2>Component 1</h2>
        <ul>
            {/* {
                Array.isArray(props.name) ? (
                    props.name.map((n, index) => (
                        <li key={index}>Hello, {n}!</li>
                    ))
                ) : (
                    <li>Hello, {props.name}!</li>
                )
            } */}
            {
                Array.isArray(props.user) ? (
                    props.user.map((n, index) => (
                        <li key={index}>
                            <strong>Name:</strong> {n.name} <br />
                            <strong>Age:</strong> {n.age} <br />
                            <strong>Address:</strong> {n.address} <br />
                            <strong>Religion:</strong> {n.religion}
                        </li>
                    ))
                ) : (
                    <li>
                        <strong>Name:</strong> {props.user.name} <br />
                        <strong>Age:</strong> {props.user.age} <br />
                        <strong>Address:</strong> {props.user.address} <br />
                        <strong>Religion:</strong> {props.user.religion}
                    </li>
                )
            }

        </ul>
    </div>
  )
}

export default Component1