import React, {useEffect}  from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactGA from 'react-ga4';

import './styles/bootstrap.scss';
import'./styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainView from './components/views/MainView/MainView';
import NotFound from './components/views/NotFound/NotFound';
import MessengerCustomerChat from 'react-messenger-customer-chat';



const App = () => {
  useEffect(() => {
    const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_API_KEY;
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: 'pageview'});
  }, []);
  return (
    <div>
      <MessengerCustomerChat
        pageId="105250125520349"
        appId="264587772499116"
        language="pl_PL"
        loggedInGreeting="Napisz do nas"
        loggedOutGreeting="Napisz do nas"
        themeColor="#cc0033"
      />
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
