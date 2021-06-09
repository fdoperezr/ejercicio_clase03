import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteSuperHero } from '../../store/module/superheroes/actions'
import { superheroesSelector } from '../../store/module/superheroes/selectors'
import {
    Link,
} from 'react-router-dom'

export default function SuperHeroActions(props: { id: number }) {

    const superHeroes = useSelector(superheroesSelector)
    const dispatch = useDispatch()
    const onClickHandler = () =>{
        dispatch(deleteSuperHero(props.id.toString()))
    }


    return (
        <>
            <Link type="button" className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Ver Ficha" to={`/superhero/card/${props.id}`}><i className="bi bi-person-badge"></i></Link>
            <Link type="button" className="btn btn-sm btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" to={`/superhero/edit/${props.id}`}><i className="bi bi-pencil"></i></Link>
            <button type="button" className="btn btn-sm btn-danger" onClick={onClickHandler} data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar" ><i className="bi bi-trash"></i></button>
        </>
    )
}
