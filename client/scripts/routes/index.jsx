import React from 'react'
import { Route, Switch } from 'react-router'

import MasterPage from '../pages/containers/MasterPage'
import NewParticipantPage from '../pages/containers/NewParticipantPage'
import NavigationBarPage from '../pages/components/NavBarPage'


const routes = (
    <div>
        <NavigationBarPage />
        <Switch>
            <Route exact path="/" component={ MasterPage }/>
            <Route path="/signup" component={ NewParticipantPage }/>
            {/*<Route component={NoMatch} />*/}
        </Switch>
    </div>
);

export default routes;