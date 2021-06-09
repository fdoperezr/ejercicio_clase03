import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { superheroesSelector } from '../../store/module/superheroes/selectors'
import {
    useParams,
    useLocation,
    useHistory,
} from 'react-router-dom'

import { SuperHero } from '../../interfaces/SuperHero'
import { getSuperHero } from '../../store/module/superheroes/actions'


export default function SuperHeroCard() {
    const [superHero, setsuperHero] = useState<SuperHero>()
    const superHeroes = useSelector(superheroesSelector)
    const location = useLocation()
    const params: any = useParams()
    const dispatch = useDispatch()
    

    useEffect(() => {
        
        setsuperHero(superHeroes.filter((i: { id: string }) => i.id == params.id)[0])
        
    }, [location])


    return (
        <>
            <div className="container mt-5">
            <div className="card">
                <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{superHero?.superhero}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            </div>
        </>
    )
}
