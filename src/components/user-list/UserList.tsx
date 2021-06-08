import React, { useEffect, useState } from 'react'
import { fetchTenUsers } from '../../helpers/FetchUsers';
import { Result } from '../../interfaces/UsersResponse'
import {
    Link,
} from 'react-router-dom'

export default function UserList() {

    const [users, setusers] = useState<Result[]>([]);

    useEffect(() => {
        fetchTenUsers().
            then(r => {
                setusers(r)
            })
    }, [])

    return (
        <>
            <table className="mt-5 table table-bordered">
                <thead>
                    <tr>
                        <th style={{ width: 50 }}>Acciones</th>
                        <th style={{ width: 100 }}>Nombre</th>
                        <th style={{ width: 50 }}>Usuario</th>
                        <th style={{ width: 50 }}>Correo electrónico</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(({ login, name, email }) => (
                            <tr key={login.uuid}>
                                <td>
                                    <Link type="button" className="btn btn-sm btn-primary" to={`/users?id=${}`}>
                                        <i className="bi bi-eye-fill"></i> Ver Ficha
                                    </Link>
                                </td>
                                <td> {name.title} {name.first} {name.last} </td>
                                <td> {login.username} </td>
                                <td>  {email} </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
