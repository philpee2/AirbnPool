import React, { PropTypes, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Group from './Group';

export default class App extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.header)}>
          <AccountsUIWrapper />
        </div>
        <Group groupId="1" users='1'/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});
