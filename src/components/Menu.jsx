import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../fireconfig'
const Menu = () => {
    const [usuario, setUsuario] = useState('')
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email)
                console.log(user.email)
            }
        })
    }, [])
    const cerrarSesion = () => {
        auth.signOut()
        setUsuario(null)

    }


    return (
        <div>
            <nav className=" navbar nav-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" exact to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                </ul>
                {
                    usuario ?
                        (
                            <button
                                className="btn btn-danger"
                                onClick={cerrarSesion}>
                                Cerrar sesion
                            </button>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </nav>
        </div>
    )
}

export default Menu
