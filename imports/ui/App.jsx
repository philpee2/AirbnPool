import React, { PropTypes, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import ChatContainer from './ChatContainer';
import ListingsContainer from './ListingsContainer';
import UsersContainer from './UsersContainer';

const fakeListings = [{
  _id: '1',
  location: '',
}, {
  _id: '2',
  location: '',
}];

export default class App extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.header)}>
          <AccountsUIWrapper />
        </div>
        <div className={css(styles.page)}>
          <div className={css(styles.row)}>
            <h2>Choose a place, you'll stay at whichever has the most votes</h2>
          </div>
          <div className={css(styles.row)}>
            <ListingsContainer listings={fakeListings} />
          </div>
          <div className={css(styles.row)}>
            <div className={css(styles.col)}>
              <ChatContainer groupId={'1'} />
            </div>
            <div className={css(styles.col)}>
              <UsersContainer users={[1, 2]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    position: 'relative',
    display: 'inline-block',
    flex: 1,
    width: '50%',
    padding: '0px 12px',
    boxSizing: 'border-box',
  },
  header: {
    position: 'relative',
  },
  page: {
    position: 'relative',
    width: 712,
    margin: 'auto',
  },
  row: {
    position: 'relative',
    display: 'flex',
    paddingBottom: 24,
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});
