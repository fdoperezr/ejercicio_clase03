import { SuperHero } from "../../../interfaces/SuperHero"

  
export const deleteSuperHero = (id: string) => {
    return {
        type: 'SUPERHERO_DELETE',
        payload: {id},
    }
}

export const inserTSuperHero = (superHero: SuperHero) => {
    return {
        type: 'SUPERHERO_INSERT',
        payload: superHero,
    }
}

export const updateSuperHero = (superHero: SuperHero) => {
    return {
        type: 'SUPERHERO_UPDATE',
        payload: superHero,
    }
}


export const getSuperHero = (id: string) => {
    return {
        type: 'SUPERHERO_GET',
        payload: id,
    }
}
