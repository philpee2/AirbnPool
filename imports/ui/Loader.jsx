import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Loader() {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.animation)}><img src="/images/loader.gif" alt="..." /></div>
        <div className={css(styles.text)}>Creating Pool...</div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    minHeight: 400,
  },
  wrapper: {
    position: 'relative',
    top: -150,
  },
  animation: {

  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(0, 166, 153)',
  }
});
