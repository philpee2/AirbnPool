import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { range } from 'lodash'

import ExtraBedImageContainer from './ExtraBedImageContainer';


const propTypes = {
  user: PropTypes.object.isRequired,
};

export default function UserImageContainer({ user }) {
  return (
    <div>
      <div className={css(styles.imageContainer)}>
        <img
          className={css(styles.image)}
          src={user.picture()}
        />
      </div>

      {range(user.numBeds-1).map(num => {
        return <ExtraBedImageContainer key={num} user={user} />;
      })}
    </div>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
    justifyContent: 'flex-end',
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
});

UserImageContainer.propTypes = propTypes;
