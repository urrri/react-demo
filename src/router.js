import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, routerRedux, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import Loader from 'components/loader';
import App from 'routes/app';

dynamic.setDefaultLoadingComponent(Loader);

const {ConnectedRouter} = routerRedux;

function RouterConfig({history, app}) {
  const error = dynamic({
    app,
    component: () => import('./routes/error')
  });

  const routes = [
    {
      path: '/employees',
      models: () => [import('./models/employees.model')],
      component: () => import('./routes/employees')
    }, {
      path: '/about',
      component: () => import('./routes/about')
    }
  ];

  return (
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/employees"/>)}/>
            {
              routes.map(({path, ...dynamics}, key) => (
                  <Route key={key}
                         exact
                         path={path}
                         component={dynamic({
                           app,
                           ...dynamics
                         })}
                  />
              ))
            }
            <Route component={error}/>
          </Switch>
        </App>
      </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};

export default RouterConfig;
