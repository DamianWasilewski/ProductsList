import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'app/pages/login/Login';
import { Products } from 'app/pages/products/Products';

import { AppRoute } from './AppRoute.enum';
import ErrorBoundary from 'ErrorBoundary/ErrorBoundary';

export const AppRoutes = () => {
  return (
    <Switch>
      <ErrorBoundary>
        <Route path={AppRoute.home} exact component={Products} />
        <Route path={AppRoute.login} exact component={Login} />
      </ErrorBoundary>
        

      <Redirect to={AppRoute.login} />
    </Switch>
  );
};