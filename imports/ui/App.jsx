import React, { PropTypes, Component } from 'react';
import ChatGroup from './ChatGroup';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to AirbnPool</h1>

        <ChatGroup groupId={1} />
      </div>
    );
  }
}
