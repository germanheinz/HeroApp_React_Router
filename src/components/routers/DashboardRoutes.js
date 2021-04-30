import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../dc/DcScreen'
import { HeroScreen } from '../heroes/HeroScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'
import { Navbar } from '../ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>

        <Navbar />
        <div>
            <Switch>
                {/* <Route exact path="/login" component={ LoginScreen } /> */}
                <Route exact path="/marvel" component={ MarvelScreen } />
                <Route exact path="/hero/:heroId" component={ HeroScreen } />
                <Route exact path="/dc" component={ DcScreen } />
                <Route exact path="/search" component={ SearchScreen } />

                <Redirect to="/marvel" />
            </Switch>
        </div>
            
        </>
    )
}
