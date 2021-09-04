import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { Switch, withRouter} from 'react-router-dom';
export function Layout(props: RouteConfigComponentProps) {
    const { route} = props;
    return (
        <div>
            <Switch>
              {route?.routes instanceof Array && renderRoutes(route.routes)}
            </Switch>
        </div>
    );
}

export default withRouter(Layout);