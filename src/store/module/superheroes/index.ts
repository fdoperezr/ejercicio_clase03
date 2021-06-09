
import { SuperHeroes } from '../../../data/SuperHeroes'
import { SuperHero } from '../../../interfaces/SuperHero'

const superHeroesReducer = (prevState: SuperHero[] = SuperHeroes, action: any) => {
    switch (action.type) {
        /* payload { name: '', id: new Date().getTime() } */
        case 'SUPERHERO_ADD':
            return {
                superheroes: [...prevState, action.payload],
            }
        case 'SUPERHERO_UPDATE':
            /* payload { id: 1231231341234234, name: 'Juan' } */
            const id = action.payload.id
            const nL = prevState.map((u: SuperHero) => {
                if (u.id === id) return action.payload
                return u
            })
            return {
                users: nL,
            }
        case 'SUPERHERO_DELETE':
            return {
                users: [],
            }

        case 'SUPERHERO_GET':
            const sh = prevState.map((u: SuperHero) => {
                if (u.id === id) return action.payload
                return u
            })
            return null
        default:
            return prevState
    }
}

export default superHeroesReducer;