import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import TimeAgo from 'react-timeago';

const propTypes = {
  message: PropTypes.object.isRequired,
};

export default function AnnouncerChatMessage({ message }) {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.bubble)}>
        <div className={css(styles.profile)}>
          <img
            className={css(styles.image)}
            src={message.author().picture()}
          />
          <span className={css(styles.content)}>
            {message.text}
          </span>
        </div>
        <div className={css(styles.date)}>
          <TimeAgo date={message.createdAt} minPeriod={60} />
        </div>
      </div>
    </div>
  );
}

AnnouncerChatMessage.propTypes = propTypes;

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
    border: '2px solid rgb(242, 242, 242)',
    borderRadius: 5,
    background: 'white',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
  },
  container: {
    display: 'flex',
    position: 'relative',
  },
  content: {
    color: 'rgb(152, 152, 152)',
    fontFamily: 'Circular Medium',
    fontSize: 16,
  },
  date: {
    position: 'relative',
    marginTop: 4,
    color: 'rgb(152, 152, 152)',
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    position: 'relative',
    width: 30,
    height: 30,
    marginRight: 12,
    borderRadius: '50%',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
});


AnnouncerChatMessage.propTypes = propTypes;
