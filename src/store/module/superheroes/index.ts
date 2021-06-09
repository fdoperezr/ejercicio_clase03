
import { SuperHeroes } from '../../../data/SuperHeroes'
import { SuperHero } from '../../../interfaces/SuperHero'

const inicialState = {
    superheroes : SuperHeroes
}


const superHeroesReducer = (prevState: any = inicialState, action: any) => {
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
            const idDelete: string = action.payload.id;
            const superheroesCopia = [...prevState.superheroes]
            debugger
            const superHero = superheroesCopia.find((i: SuperHero) => i.id.toString() == idDelete)
            if (superHero != undefined)
            {
                const index = superheroesCopia.indexOf(superHero);
                if (index > -1) {
                    superheroesCopia.splice(index, 1);
                }
            }
          
            return {
                superheroes: superheroesCopia
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