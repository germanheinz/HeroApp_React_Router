import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    console.log( heroId );

    // const hero = getHeroById( heroId );
    const hero = useMemo(() => getHeroById( heroId ), [ heroId ])

    console.log('Hero', hero, 'HeroId', heroId);

    console.log(hero);

    if(!hero){
        return <Redirect to="/" />
    }
    
    const { 
        alter_ego,
        characters,
        first_appearance,
        id,
        publisher,
        superhero
    } = hero;
    
    console.log( id );

    const handleReturn = () => {

        if(history.length <=2){
            history.push('/');
        }else{
            history.goBack();
        }
    }
    
    return (
        <div>
            <li>
                <div className="card ms-3" style={{ maxWidth: 200 }}>
                    <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{ alter_ego }</h6>
                            <img src={`../assets/heroes/${ id }.jpg`} alt="hero" className="card-img"/>
                            <p className="card-text">{ first_appearance }</p>
                    </div>
                    <button className="btn btn-outline-info" onClick={ handleReturn }>Back</button>
                </div>
            </li>
        </div>
    )
}
