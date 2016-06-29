import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import TimeAgo from 'react-timeago';

const propTypes = {
  message: PropTypes.object.isRequired,
  isSelf: PropTypes.bool.isRequired,
};

export default function ChatMessage({ message, isSelf }) {
  const containerStyles = [styles.container];
  const bubbleStyles = [styles.bubble];
  const dateStyles = [styles.date];
  const imageContainerStyles = [styles.imageContainer];
  if (isSelf) {
    containerStyles.push(styles.containerSelf);
    bubbleStyles.push(styles.bubbleSelf);
    dateStyles.push(styles.dateSelf);
    imageContainerStyles.push(styles.imageContainerSelf);
  }

  return (
    <div className={css(...containerStyles)} key={message._id}>
      <div className={css(...bubbleStyles)}>
        <div>{message.text}</div>
        <div className={css(...dateStyles)}>
          <TimeAgo date={message.createdAt} />
        </div>
      </div>
      {isSelf ?
          <div className={css(styles.arrowSelf)}><img src="/images/green-chat-tail.png" width="6" /></div> :
          <div className={css(styles.arrow)}><img src="/images/white-chat-tail.png" width="6" /></div>
      }
      <div className={css(...imageContainerStyles)}>
        <img
          className={css(styles.image)}
          src="https://avatars1.githubusercontent.com/u/2244653?v=3&s=460"
        />
      </div>
    </div>
  );
}

ChatMessage.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    margin: 12,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  containerSelf: {
    flexDirection: 'row',
  },
  bubble: {
    border: '1px solid rgb(242, 242, 242)',
    borderRadius: 5,
    padding: 8,
    background: 'rgb(242, 242, 242)',
    width: '80%',
    display: 'inline-block',
    flexGrow: 1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
  },
  bubbleSelf: {
    'background-color': 'rgb(4, 157, 145)',
    color: 'white',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 5,
  },
  date: {
    fontSize: 12,
    marginTop: 4,
    color: 'rgb(152, 152, 152)',
  },
  dateSelf: {
    'font-weight': 'bold',
    color: 'white',
  },
  arrow: {
    flexGrow: 0,
    position: 'relative',
    bottom: -5,
  },
  arrowSelf: {
    flexGrow: 0,
    position: 'relative',
    bottom: -4,
    right: 1,
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexGrow: 0,
  },
  imageContainerSelf: {

  },
  image: {
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
});
