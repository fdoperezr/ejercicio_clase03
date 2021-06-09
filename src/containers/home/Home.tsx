import React from 'react'
import { Provider } from 'react-redux'
import SuperHeroList from '../../components/superhero-list/SuperHeroList'
import store from '../../store';

export default function Home() {
    return (
        <div className='container'>

            <div className="row">
                <div className="col-7">
                    <SuperHeroList/>
                </div>
            </div>

        </div>
    )
}
