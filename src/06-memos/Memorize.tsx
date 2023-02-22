import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export function Memorize () {

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />
            <button type="button" onClick={() => increment()}>+ 1</button>
            <button type="button" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}