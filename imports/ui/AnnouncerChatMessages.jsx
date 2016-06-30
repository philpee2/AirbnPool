import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import AnnouncerChatMessage from './AnnouncerChatMessage';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function AnnouncerChatMessages({ messages }) {
  return (
    <div className={css(styles.container)}>
      {messages.map(message => (
        <AnnouncerChatMessage message={message} key={message._id} />
      ))}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: 12,
  },
});

AnnouncerChatMessages.propTypes = propTypes;
