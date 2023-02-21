import { useState } from "react"

export function useForm (initialForm = {}): any {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {
        // Se desestructura el objeto para enviar sus propiedades
        ...formState, 
        formState,
        onInputChange,
    }

}