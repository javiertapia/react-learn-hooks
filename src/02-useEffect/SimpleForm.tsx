import { useEffect, useState } from "react"
import { Message } from "./Message"

export function SimpleForm () {
    const [formState, setFormState] = useState({
        username: 'Javier Tapia',
        email: 'contacto@javiertapia.cl'
    })

    const {username, email} = formState
    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // useEffect es para disparar efectos secundarios
    // Si no se indican dependencias, dispara cada vez que el componente es redibujado
    // Si se indica [], solo se dispara una vez, al cargarse el componente
    useEffect(() => {
        console.log('UseEffect called!')
    }, [])

    // Se recomienda hacer un useEffect por cada efecto secundario
    // En este caso se dispara al cambiar formState
    useEffect(() => {
        console.log('formState changed!')
    }, [formState])

    useEffect(() => {
        console.log('email changed!')
    }, [email])

    return (
        <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text" placeholder="Username" name="username" value={username} onChange={onInputChange} />
        <input type="email" placeholder="javier@google.com" name="email" value={email} onChange={onInputChange} />
        {username === 'Javier Tapia' &&
            <Message />
        }
        </>
    )
}