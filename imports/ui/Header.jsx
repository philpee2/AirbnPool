import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { IndexLink } from 'react-router';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default function Header() {
  return (
    <div className={css(styles.container)}>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      <AccountsUIWrapper />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 12,
  },
});
