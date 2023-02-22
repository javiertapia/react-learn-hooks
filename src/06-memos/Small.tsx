import { memo } from "react"

type SmallProps = {
    value: number
}

// memo "memoriza" al componente: solo se vuelve a 
// redibujar si cambian las properties.
// Debe usarse solo cuando el redibujado tiene impacto en el desempeño
// (ej: se vuelven a disparar llamadas asincronas)

export const Small = memo(({value}: SmallProps) => {

    console.log('small :(')

    return (
        <small>{value}</small>
    )
})