import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function App({ children }) {
  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.container)}>
        {children}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
});
