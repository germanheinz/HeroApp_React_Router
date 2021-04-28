import React from 'react'
import { Route, Switch } from 'react-router'
import { DcScreen } from '../dc/DcScreen'
import { LoginScreen } from '../login/LoginScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { Navbar } from '../ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>

        <Navbar />
        <div>
            <Switch>
                {/* <Route exact path="/login" component={ LoginScreen } /> */}
                <Route exact path="/marvel" component={ MarvelScreen } />
                <Route exact path="/dc" component={ DcScreen } />
            </Switch>
        </div>
            
        </>
    )
}
