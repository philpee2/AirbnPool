import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const propTypes = {
  users: PropTypes.array.isRequired,
};

export default function UsersContainer({ users }) {
  return (
    <div className={css(styles.container)}>
      {users.map(user => {
        return <div key={user}>{user}</div>;
      })}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    border: '1px solid #edefed',
  },
});

UsersContainer.propTypes = propTypes;
