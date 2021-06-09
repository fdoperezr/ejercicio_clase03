import React from 'react'
import { Provider } from 'react-redux'
import SuperHeroList from '../../components/superhero-list/SuperHeroList'
import store from '../../store';

export default function Home() {
    return (
        <Provider store={store}>
            <div className='container'>

                <SuperHeroList />

            </div>
        </Provider>
    )
}
