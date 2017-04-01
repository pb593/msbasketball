import React from 'react'
import { Route, Switch } from 'react-router'

import EventsPage from '../pages/containers/EventsPage'


const routes = (
    <div>
        {/*<NavBar />*/}
        <Switch>
            <Route path="/" component={ EventsPage }/>
            {/*<Route component={NoMatch} />*/}
        </Switch>
    </div>
);

export default routes;