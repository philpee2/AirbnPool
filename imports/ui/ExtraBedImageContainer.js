import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const propTypes = {
  user: PropTypes.object.isRequired,
};

export default function ExtraBedImageContainer({ user }) {
  return (
    <div className={css(styles.imageContainer)}>
      <img
        className={css(styles.image)}
        src="http://www.clker.com/cliparts/t/m/P/U/D/m/letter-s-purple-hi.png"
      />
      {user.name} +1
    </div>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
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
