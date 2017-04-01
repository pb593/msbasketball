import React from 'react'
import { Route, Switch } from 'react-router'

import MasterPage from '../pages/containers/MasterPage'


const routes = (
    <div>
        {/*<NavBar />*/}
        <Switch>
            <Route path="/" component={ MasterPage }/>
            {/*<Route component={NoMatch} />*/}
        </Switch>
    </div>
);

export default routes;