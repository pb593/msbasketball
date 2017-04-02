import React from 'react'
import { Route, Switch } from 'react-router'

import MasterPage from '../pages/containers/MasterPage'
import NewParticipantPage from '../pages/containers/NewParticipantPage'
import NewEventPage from '../pages/containers/NewEventPage'
import NavigationBarPage from '../pages/components/NavBarPage'


const routes = (
    <div>
        <NavigationBarPage />
        <Switch>
            <Route exact path="/" component={ MasterPage }/>
            <Route path="/signup" component={ NewParticipantPage }/>
            <Route path="/newEvent" component={ NewEventPage }/>
            {/*<Route component={NoMatch} />*/}
        </Switch>
    </div>
);

export default routes;