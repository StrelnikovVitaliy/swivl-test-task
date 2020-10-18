import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UserList} from '../user/list/UserList';
import {UserPage} from '../user/page/UserPage';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/user/:login'} component={UserPage}/>
        <Route path={'/'} component={UserList}/>
      </Switch>
    </BrowserRouter>
  );
};