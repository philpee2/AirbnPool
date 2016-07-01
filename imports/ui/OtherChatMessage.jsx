import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import TimeAgo from 'react-timeago';

const propTypes = {
  isLast: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired,
};

export default function OtherChatMessage({ isLast, message }) {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.bubble)}>
        <span className={css(styles.content)}>
          {message.text}
        </span>
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
      {!isLast && <div className={css(styles.placeholder)}></div>}
    </div>
  );
}

OtherChatMessage.propTypes = propTypes;

const styles = StyleSheet.create({
  arrow: {
    flex: 0,
    position: 'relative',
    bottom: -5,
  },
  bubble: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    padding: 12,
    marginTop: 3,
    border: '1px solid rgb(242, 242, 242)',
    borderRadius: 5,
    background: 'rgb(242, 242, 242)',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  content: {
    color: 'rgb(152, 152, 152)',
    fontFamily: 'Circular Light',
    fontSize: 19,
    letterSpacing: '-0.21px',
    lineHeight: '24px',
  },
  date: {
    position: 'relative',
    marginTop: 4,
    color: 'rgb(152, 152, 152)',
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
  placeholder: {
    width: 38,
  },
  profile: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexGrow: 0,
  },
});
