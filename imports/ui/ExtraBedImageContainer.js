import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function ExtraBedImageContainer() {
  return (
    <div className={css(styles.imageContainer)}>
      <div className={css(styles.image)}>
        +1
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
    justifyContent: 'flex-end',
    margin: 5,
    backgroundColor: 'rgb(4, 157, 145)',
    color: 'white',
    borderRadius: '50%',
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    paddingTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
