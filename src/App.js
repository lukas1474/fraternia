import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/bootstrap.scss';
import'./styles/settings.scss';

import MainView from './components/MainView/MainView';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
