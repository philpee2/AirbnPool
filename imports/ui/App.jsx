import React, { PropTypes, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import ChatGroup from './ChatGroup';
import ChatListings from './ChatListings';

export default class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.row)}>
          <h1>Welcome to AirbnPool</h1>
          <AccountsUIWrapper />
        </div>
        <div className={css(styles.row)}>
          <div className={css(styles.col)}>
            <ChatGroup groupId={1} />
          </div>
          <div className={css(styles.col)}>
            <ChatListings listings={[1, 2]} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: 712,
    margin: 'auto',
  },
  col: {
    display: 'inline-block',
    flex: 1,
    position: 'relative',
    width: '50%',
  },
  row: {
    display: 'flex',
    position: 'relative',
  },
});
