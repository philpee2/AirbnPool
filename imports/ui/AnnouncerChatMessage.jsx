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
<<<<<<< HEAD
          <span className={css(styles.content)}>
            {message.text}
          </span>
        </div>
=======
        </div>
        <span className={css(styles.content)}>
          {message.text}
        </span>
>>>>>>> d81011c79d6003135ecbf076e5abe28eec976006
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
<<<<<<< HEAD
    border: '1px solid rgb(242, 242, 242)',
=======
    border: '2px solid rgb(242, 242, 242)',
>>>>>>> d81011c79d6003135ecbf076e5abe28eec976006
    borderRadius: 5,
    background: 'white',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
  },
  container: {
<<<<<<< HEAD
    display: 'flex',
    position: 'relative',
=======
    position: 'relative',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
>>>>>>> d81011c79d6003135ecbf076e5abe28eec976006
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
<<<<<<< HEAD
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
=======
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
>>>>>>> d81011c79d6003135ecbf076e5abe28eec976006
  },
});


AnnouncerChatMessage.propTypes = propTypes;
