import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { range } from 'lodash'

import ExtraBedImageContainer from './ExtraBedImageContainer';


const propTypes = {
  user: PropTypes.object.isRequired,
  numBeds: PropTypes.number.isRequired,
};

export default function UserImageContainer({ user, numBeds }) {
  return (
    <div>
      <div className={css(styles.imageContainer)}>
        { (user._id == "1") &&
          <img
          className={css(styles.image)}
          src="http://www.clker.com/cliparts/t/m/P/U/D/m/letter-s-purple-hi.png"
          />
        }
        { (user._id == "2") &&
          <img
          className={css(styles.image)}
          src="http://www.activityvillage.co.uk/sites/default/files/images/autumn_letter_t_460_0.jpg"
          />
        }
      </div>

      {range(numBeds-1).map(num => {
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
