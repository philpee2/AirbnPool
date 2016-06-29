import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function UsersContainer({ users }) {
  return (
    <div className={css(styles.container)}>
      {users.map(user => {
        return <div key={user}>{user._id}</div>;
      })}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    padding: '12px',
    border: '1px solid #dce0e0',
  },
});

UsersContainer.propTypes = propTypes;
