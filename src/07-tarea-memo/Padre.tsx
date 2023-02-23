import { useCallback, useState } from "react"
import { Hijo } from "./Hijo"

export function Padre(){

    const numeros = [2,4,6,8,10]
    const [valor, setValor] = useState(0)

    const incrementar = useCallback((num: number) => setValor(oldValue => oldValue + num), [])

    // const incrementar = (num: number) => {
    //     setValor(valor + num)
    // }

    return (<>
        <h1>Padre</h1>
        <p>Total: {valor}</p>
        <hr />
        {numeros.map((numero: number) => (
            <Hijo key={numero} 
                  numero={numero} 
                  incrementar={(numero) => incrementar(numero)} />
        ))}
    </>)
}