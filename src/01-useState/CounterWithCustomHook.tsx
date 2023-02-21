import { useCounter } from "../hooks/useCounter"

export function CounterWithCustomHook() {

    // custom Hook para manejar los cambios
    const {counter, increment, decrement, reset} = useCounter()

    return (
        <>
        <h1>Counter with Hook : {counter}</h1>
        <hr />
        <button type="button" onClick={increment}>+ 1</button>
        <button type="button" onClick={reset}>reset</button>
        <button type="button" onClick={decrement}>- 1</button>
        </>
    )
}