import React, { PropTypes, Component } from 'react';
import ChatGroup from './ChatGroup';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to AirbnPool</h1>
        <AccountsUIWrapper />

        <ChatGroup groupId={1} />
      </div>
    );
  }
}
