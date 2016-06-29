import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function App({ children }) {
  return (
    <div className={css(styles.wrapper)}>
      Home!
    </div>
  );
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
