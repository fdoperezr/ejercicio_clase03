import React from 'react'
import {
    Link,
} from 'react-router-dom'

export default function SuperHeroActions(props: {id: number}) {
    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Link type="button" className="btn btn-primary" to={`/superhero/card/${props.id}`}>Ver Ficha<i className="bi bi-person-badge"></i></Link>
                <Link type="button" className="btn btn-primary"  to={`/superhero/edit/${props.id}`}>Editar<i className="bi bi-pencil"></i></Link>
                <button type="button" className="btn btn-primary">Right</button>
            </div>
        </>
    )
}
