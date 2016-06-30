import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import TimeAgo from 'react-timeago';

import SelfChatMessage from './SelfChatMessage';

export default function SelfChatMessages({ messages }) {
  const messagesCount = messages.length;
  return (
    <div className={css(styles.container)}>
      {messages.map((message, index) => (
        <SelfChatMessage
          isLast={index === messagesCount - 1}
          key={message._id}
          message={message} />
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
