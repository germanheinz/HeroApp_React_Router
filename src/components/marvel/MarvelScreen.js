import React from 'react';
import { HeroList } from '../heroes/HeroList';
import { HeroScreen } from '../heroes/HeroScreen';

export const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel</h1>
            <HeroList publisher="Marvel Comics"/>
        </>
    )
}
