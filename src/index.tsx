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
            render={()=><WithNavigation>
                    Hello Infrastructure-Components!
                    --------------------------------
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <p>
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <p>
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </WithNavigation>}
        />

        <Route
            path='/other'
            name='Another page'
            render={()=><WithNavigation>My Second Route</WithNavigation>}
        />


    </SinglePageApp>);