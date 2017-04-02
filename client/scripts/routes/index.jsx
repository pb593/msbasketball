import React from 'react'
import { Route, Switch } from 'react-router'

import MasterPage from '../pages/containers/MasterPage'
import NavigationBarPage from '../pages/components/NavBarPage'


const routes = (
    <div>
        <NavigationBarPage />
        <Switch>
            <Route path="/" component={ MasterPage }/>
            {/*<Route component={NoMatch} />*/}
        </Switch>
    </div>
);

export default routes;