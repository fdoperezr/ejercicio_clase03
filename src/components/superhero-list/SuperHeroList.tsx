import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SuperHeroes } from '../../data/SuperHeroes'
import { SuperHero } from '../../interfaces/SuperHero'
import { superheroesSelector } from '../../store/module/superheroes/selectors'
import SuperHeroActions from '../superhero-actions/SuperHeroActions'
import {
    Link,
} from 'react-router-dom'

export default function SuperHeroList() {

    const superHeroes = useSelector(superheroesSelector)
    console.log(superHeroes);
    
    
    return (
        <>
            <table className="mt-5 table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th style={{ width: 150}}>Acciones</th>
                        <th >Nombre</th>
                        <th >Editorial</th>
                        <th >Alter ego</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        superHeroes.superheroes.map(( item : SuperHero) => (
                            <tr key={item.id}>
                                <td style={{textAlign: 'center'}}>
                                   <SuperHeroActions id={item.id}/>
                                </td>
                                <td> { item.superhero } </td>
                                <td> { item.publisher } </td>
                                <td> { item.alter_ego } </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
