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
    justifyContent: 'space-between',
    width: '100%',
    padding: 18,
    borderBottom: '1px solid #dce0e0',
    marginBottom: 48,
  },
});
