import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import TimeAgo from 'react-timeago';

const propTypes = {
  isLast: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired,
};

export default function SelfChatMessage({ isLast, message }) {
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
            src={'/images/green-chat-tail.png'}
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

SelfChatMessage.propTypes = propTypes;

const styles = StyleSheet.create({
  arrow: {
    flex: 0,
    position: 'relative',
    bottom: -4,
    right: 1,
  },
  bubble: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 1,
    padding: 12,
    color: '#ffffff',
    border: '1px solid rgb(242, 242, 242)',
    borderRadius: 5,
    backgroundColor: 'rgb(4, 157, 145)',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
  },
  content: {
    color: '#ffffff',
    fontFamily: 'Circular Medium',
    fontSize: 16,
  },
  date: {
    position: 'relative',
    marginTop: 4,
    color: '#ffffff',
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
