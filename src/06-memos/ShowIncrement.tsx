import { memo } from "react"

type ShowIncrementProps = {
    increment: () => void
}

// este componente no se puede memorizar porque la función
// `increment` que recibe del padre cambia cada vez que este
// se redibuja.
//
// useCallback (en el componente padre) lo resuelve al memorizar
// la función `increment`

export const ShowIncrement = memo(({increment}: ShowIncrementProps) => {
    console.log('ShowIncrement generado...')
    return (
        <>
        <button type="button" onClick={increment}>Incrementar</button>
        </>
    )
})

