import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Group from './Group';
import Header from './Header';

export default function App({ children }) {
  return (
    <div className={css(styles.wrapper)}>
      <Header />
      {children}
    </div>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});
