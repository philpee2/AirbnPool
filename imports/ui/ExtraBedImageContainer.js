import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function ExtraBedImageContainer() {
  return (
    <div className={css(styles.imageContainer)}>
      <img
        className={css(styles.image)}
        src="https://pbs.twimg.com/profile_images/698006458902958080/qwbpQ5PD_400x400.jpg"
      />
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
    border: '1px solid black',
  },
});
