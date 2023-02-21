import { useState } from "react"

export function CounterApp() {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    const {counter1, counter2, counter3} = state

    const updateCounter1 = () => {
        setCounter({
            // spread a todos las propiedades del objeto
            ...state,
            // sobre escribe a counter1
            counter1: counter1 + 1,
        })
    }

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counter3}</h1>
            <button type="button" onClick={updateCounter1}>+ 1</button>
        </>
    )
}