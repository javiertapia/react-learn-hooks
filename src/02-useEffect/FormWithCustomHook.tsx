import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export function FormWithCustomHook () {

    const {formState, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const {username, email, password} = formState

    return (
        <>
        <h1>Formulario con Custom Hook</h1>
        <hr />
        <input type="text" placeholder="Username" name="username" value={username} onChange={onInputChange} />
        <input type="email" placeholder="javier@google.com" name="email" value={email} onChange={onInputChange} />
        <input type="password" placeholder="Password" name="password" value={password} onChange={onInputChange} />
        {username === 'Javier Tapia' &&
            <Message />
        }
        </>
    )
}