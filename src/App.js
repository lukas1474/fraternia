import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/bootstrap.scss';
import'./styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainView from './components/views/MainView/MainView';
import NotFound from './components/views/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={MainView}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
