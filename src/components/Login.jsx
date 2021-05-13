import React, { useState } from 'react'
import { auth } from '../fireconfig'
const login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgError, setMsgError] = useState(null)

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then(r => alert('usuario registrado'))
            .catch(e => {
                if (e.code == 'auth/invalid-email') {
                    setMsgError('Formato de email incorrecto')
                }
                if (e.code == 'auth/weak-password') {
                    setMsgError('contraseña no valida')
                }
            })
    }


    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={registrarUsuario} className="form-group" >
                    <input
                        onChange={((e) => { setEmail(e.target.value) })}
                        className="form-control"
                        placeholder="introduce el email"
                        type="email" />
                    <input
                        onChange={((e) => { setPass(e.target.value) })}
                        className="form-control mt-4"
                        placeholder="introduce el password"
                        type="password" />
                    <input className="btn btn-dark btn-block mt-4"
                        type="submit"
                        value="registrar usuario" />
                </form>
                {
                    msgError != null ?
                        (
                            <div>{msgError}</div>
                        )
                        : (
                            <span></span>
                        )
                }
            </div>
            <div className="col"></div>
        </div>
    )
}

export default login