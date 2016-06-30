import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import TimeAgo from 'react-timeago';

import OtherChatMessage from './OtherChatMessage';

export default function OtherChatMessages({ messages }) {
  const messagesCount = messages.length;
  return (
    <div className={css(styles.container)}>
      {messages.map((message, index) => (
        <OtherChatMessage
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
    margin: 12,
  },
});
