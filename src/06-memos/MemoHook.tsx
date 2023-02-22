import { useMemo, useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

// tarea pesada que será memorizada después de su primera ejecución
const heavyStuff = (iteration: number = 10) => {
    for(let i = 1; i <= iteration; i++) {
        console.log('heavy stuff')
    }
    return `${iteration} iteraciones realizadas`
}

export function MemoHook () {

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)

    // useMemo() memoriza el valor resultado de la variable o función,
    // para que no se reprocese al redibujar un componente.
    // La lista de dependencias indica cuándo sí se ejecutará
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button type="button" onClick={() => increment()}>+ 1</button>
            <button type="button" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}