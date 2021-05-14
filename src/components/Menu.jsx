import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../fireconfig'
const Menu = () => {
    const  historial = useHistory()
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
        historial.push('/')

    }


    return (
        <div>
            <nav className=" navbar nav-expand-lg navbar-dark bg-dark">
                <ul className= "container-fluid ">
                    <li className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-link" exact to="/">Inicio</Link>
                    </li>
                    <li className="navbar-nav me-auto mb-2 mb-lg-0">{
                        !usuario ? 
                        (
                            <Link className="nav-link" to="/login">Login</Link>
                        )
                        :
                        (
                            <span></span>
                        )
                        }
                    </li>
                    <li className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        !usuario ? 
                        (
                            <Link className="nav-link" to="/admin">Admin</Link>
                        ):
                        (
                            <span></span>
                        )
                        
                    }
                        
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
