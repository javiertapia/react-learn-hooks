// por convención, los hooks comienzan con 'use'

import { useState } from "react"

export const useCounter = (initialValue: number = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        if (counter === 0) return
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initialValue)
    }
    // se expone el contador y las funciones para modificarlo
    return {counter, increment, decrement, reset}

}