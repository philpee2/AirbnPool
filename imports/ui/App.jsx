import React, { PropTypes } from 'react';
import { RouteTransition } from 'react-router-transition';
import { StyleSheet, css } from 'aphrodite';

export default function App({ children, location }) {
  return (
    <div>
      <RouteTransition
        pathname={location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <div className={css(styles.wrapper)}>
          <div className={css(styles.container)}>
            {children}
          </div>
        </div>
      </RouteTransition>
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
