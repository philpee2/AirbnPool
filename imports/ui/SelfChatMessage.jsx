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
        <span>{message.text}</span>
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
    </div>
  );
}

SelfChatMessage.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
  },
  bubble: {
    border: '1px solid rgb(242, 242, 242)',
    borderRadius: 5,
    padding: 8,
    background: 'rgb(242, 242, 242)',
    width: '80%',
    display: 'inline-block',
    flex: 1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
    backgroundColor: 'rgb(4, 157, 145)',
    color: 'white',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 5,
  },
  date: {
    fontSize: 12,
    marginTop: 4,
    color: 'rgb(152, 152, 152)',
    'font-weight': 'bold',
    color: 'white',
  },
  arrow: {
    flexGrow: 0,
    position: 'relative',
    bottom: -5,
    flexGrow: 0,
    position: 'relative',
    bottom: -4,
    right: 1,
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
