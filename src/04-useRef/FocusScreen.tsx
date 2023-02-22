import { useRef } from "react"

export function FocusScreen () {

    // useRef referencia a un elemento, sin tener que redibujar la página
    const inputRef = useRef<HTMLInputElement>(null)

    const focusInput = () => {
        inputRef.current?.select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input type="text" ref={inputRef} className="mr-2" placeholder="Ingrese su nombre" />
            <button type="button" onClick={focusInput}>Set focus</button>
        </>
    )
}
