import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { sum } from 'lodash';

import UserImageContainer from './UserImageContainer';
import BlankImageContainer from './BlankImageContainer';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  numBeds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default function UsersContainer({ users, numBeds }) {
  const remains = 8 - sum(numBeds);
  return (
    <div className={css(styles.container)}>
      { (remains > 0) &&
        <div className={css(styles.header)}> We need {remains} more! </div> }

      {users.map( (user, index) => {
        // Also include extra beds for this user
        return <UserImageContainer key={user._id} user={user} numBeds={numBeds[index]} />;
      })}

      { (remains > 0) && <BlankImageContainer remains={remains} /> }
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
  header: {
    'font-size': '20px',
    padding: '12px',
  },
});

UsersContainer.propTypes = propTypes;
