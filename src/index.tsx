import * as React from 'react';

import {
    Environment,
    Route,
    SinglePageApp
} from "infrastructure-components";

import WithNavigation from './navigation';

export default (
    <SinglePageApp
        stackName = "navbar"
        buildPath = 'build'
        region='us-east-1'>

        <Environment name="dev" />

        <Route
            path='/'
            name='Infrastructure-Components'
            render={(props)=><WithNavigation>
                    Hello Infrastructure-Components!
                </WithNavigation>}
        />

        <Route
            path='/other'
            name='Another page'
            render={()=><WithNavigation>My Second Route</WithNavigation>}
            customType={{
                left: true
            }}
        />

        <Route
            path='/right'
            name='At right'
            render={()=><WithNavigation>Positioned at the right-hand side</WithNavigation>}
                customType={{
                left: false
            }}
        />


    </SinglePageApp>);