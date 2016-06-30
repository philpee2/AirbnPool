import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import TimeAgo from 'react-timeago';

const propTypes = {
  isLast: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired,
};

export default function OtherChatMessage({ isLast, message }) {
  return (
    <div className={css(styles.container)} key={message._id}>
      <div className={css(styles.bubble)}>
        <div>{message.text}</div>
        <div className={css(styles.date)}>
          <TimeAgo date={message.createdAt} minPeriod={60} />
        </div>
      </div>
      {isLast && (
        <div className={css(styles.arrow)}>
          <img
            src={'/images/white-chat-tail.png'}
            width={8}
          />
        </div>
      )}
      {isLast && (
        <div className={css(styles.profile)}>
          <img
            className={css(styles.image)}
            src={message.author().picture()}
          />
        </div>
      )}
    </div>
  );
}

OtherChatMessage.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
  date: {
    fontSize: 12,
    marginTop: 4,
    color: 'rgb(152, 152, 152)',
  },
  arrow: {
    flexGrow: 0,
    position: 'relative',
    bottom: -5,
  },
  profile: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexGrow: 0,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
});
