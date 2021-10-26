import React, { useState } from 'react'
import useEffectOnce from '../Hooks/useEffectOnce'

const EffectComponent = () => {
    const [count, setCount] = useState(0)

    useEffectOnce(() => alert("UseEffect Once"))

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default EffectComponent
