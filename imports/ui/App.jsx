import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Group from './Group';
import Header from './Header';

export default function App({ children }) {
  return (
    <div className={css(styles.wrapper)}>
      <Header />
      <div className={css(styles.container)}>
        {children}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 48,
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});
