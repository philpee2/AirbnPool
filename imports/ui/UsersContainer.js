import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { sumBy } from 'lodash';

import UserImageContainer from './UserImageContainer';
import BlankImageContainer from './BlankImageContainer';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function UsersContainer({ users }) {
  const remains = 8 - sumBy(users, user => user.numBeds);
  return (
    <div className={css(styles.container)}>
      {/* (remains > 0) &&
        <div className={css(styles.header)}> We need {remains} more! </div> */}

      {users.map( (user, index) => {
        // Also include extra beds for this user
        return <UserImageContainer key={user._id} user={user} />;
       })}

      { (remains > 0) && <BlankImageContainer remains={remains} /> }
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    borderRight: '1px solid #dce0e0',
    borderBottom: '1px solid #dce0e0',
    boxShadow: '0px 8px 16px #ffffff',
    zIndex: 2,
  },
  header: {
    position: 'relative',
    padding: '12px',
    fontSize: '18px',
  },
});

UsersContainer.propTypes = propTypes;
