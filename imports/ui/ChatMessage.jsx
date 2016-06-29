import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function ChatMessage(props) {
  const { message } = props;
  return (
    <div className={css(styles.container)} key={message._id}>
      <div className="bubble">
        {message.text}
      </div>
      <div className={css(styles.imageContainer)}>
        <img
          className={css(styles.image)}
          src="https://avatars1.githubusercontent.com/u/2244653?v=3&s=460"
        />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    margin: 12,
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
});
