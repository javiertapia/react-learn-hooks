import { useEffect, useState } from "react"

export function Message() {

    const [coords, setCoords] = useState({x: 0, y: 0})

    useEffect(() => {
        console.log('message mounted!')
        // aquí se puede instanciar un listener
        const onMouseMove = ({x, y}: MouseEvent) => {
            setCoords({x, y})
        }
        window.addEventListener('mousemove', onMouseMove)
        // esta función se ejecuta cuando el componente se destruye
        return () => {
            console.log('message unmounted!')
            // aquí se puede destruir el listener, para liberar memoria
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])
    
    return (
        <>
        <h3>El usuario ya existe</h3>
        {JSON.stringify(coords)}
        </>
    )
}