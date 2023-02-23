import { memo } from "react"

type HijoProps = {
    numero: number
    incrementar: (n: number) => void
}

export const Hijo = memo(({numero, incrementar}: HijoProps) => {
    console.log('Me volví a generar :(')
    return (<>
        <button onClick={() => incrementar(numero)}>{numero}</button>
    </>)
})