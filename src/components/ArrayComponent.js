import React from 'react'
import useArray from '../Hooks/useArray'

const ArrayComponent = () => {
    const { array, set, push, remove, filter, update, clear } = useArray([
        21, 12, 43, 34, 65, 16
    ])

    return (
        <>
            <div>{array.join(", ")}</div>
            {/* Add 7 to the array */}
            <button onClick={() => push(7)}>Add</button> 
            {/* Change Second Element To 9 */}
            <button onClick={() => update(1, 9)}>Change</button>
            {/* Remove Second Element */}
            <button onClick={() => remove(1)}>Remove</button>
            {/* Keep Numbers Less Than 30 */}
            <button onClick={() => filter(n => n < 30)}>Filter</button>
            {/* Set the array to [1, 2] */}
            <button onClick={() => set([1, 2])}>Set</button>
            {/* Clear the array */}
            <button onClick={clear}>Clear</button>
        </>
    )
}

export default ArrayComponent
