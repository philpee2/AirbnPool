import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { range } from 'lodash'

const propTypes = {
  remains: PropTypes.number.isRequired,
};

export default function BlankImageContainer({ remains }) {
  return (
    <div>
      {range(remains).map(num => {
        return (
          <div key={num} className={css(styles.imageContainer)}>
            <img
              className={css(styles.image)}
              src="/images/avatar.png"
            />
          </div>
        );
      })}
    </div>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
    // flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    margin: 5,
    border: '2px dashed #ececec',
  },
});

BlankImageContainer.propTypes = propTypes;
