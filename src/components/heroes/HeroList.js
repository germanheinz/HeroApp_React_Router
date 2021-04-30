import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    const heroesMemo = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);
    // const heroes = getHeroesByPublisher( publisher );

    return (
        <>
        {
            heroesMemo.map( hero => (
                <HeroCard 
                    key={ hero.id }
                        { ...hero }
                />
            ))
        }
        </>
       
    )
}
