import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const propTypes = {
  user: PropTypes.object.isRequired,
};

export default function ExtraBedImageContainer({ user }) {
  return (
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

ExtraBedImageContainer.propTypes = propTypes;
