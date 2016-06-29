import React from 'react';
import { render } from 'react-dom';
import {
  IndexRoute,
  Route,
  Router,
  browserHistory,
} from 'react-router';

import App from '../imports/ui/App.jsx';
import Group from '../imports/ui/Group.jsx';
import Home from '../imports/ui/Home.jsx';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/groups/:groupId' component={Group} />
      </Route>
    </Router>,
    document.getElementById('container')
  );
});
