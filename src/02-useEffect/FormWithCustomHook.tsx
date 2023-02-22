import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export function FormWithCustomHook () {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
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
        <br />
        <input type="email" placeholder="javier@google.com" name="email" value={email} onChange={onInputChange} />
        <br />
        <input type="password" placeholder="Password" name="password" value={password} onChange={onInputChange} />
        <br />
        <button type="button" onClick={onResetForm}>Restablecer</button>
        <br />
        {username === 'Javier Tapia' &&
            <Message />
        }
        </>
    )
}