import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export function CallbackHook () {

    const [counter, setCounter] = useState(10)

    // const increment = () => setCounter(counter + 1)

    // La función `increment`, se volverá a generar (ocupará un espacio
    // de memoria diferente) cada vez que el componente CallbackHook
    // se redibuje.

    // useCallback es como useMemo pero sirve para memorizar funciones.
    // Regresa una función que se puede ejecutar
    const increment = useCallback(() => {
        // en este caso, `counter` está memorizado, así que no se ve
        // el efecto, pues usa siempre el mismo valor
        // setCounter(counter + 1)

        // esto se corrige usando setCounter con un callback
        setCounter(value => value + 1)
    }, [])

    // lo anterior permite que el siguiente código no genere una
    // ejecución infinita, pues si está memorizado, use
    useEffect(() => increment(), [increment])

    return (
        <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={increment} />
        </>
    )
}