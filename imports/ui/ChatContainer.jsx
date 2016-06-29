import React, { PropTypes, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ChatMessage from './ChatMessage';
import ListingCard from './ListingCard';
import Composer from './Composer';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  createMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function ChatContainer({ messages, createMessage, isLoading }) {
  const currentUserId = Meteor.userId();
  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.container)}>
        <div className={css(styles.messages)}>
          {messages.map(message => (
            <ChatMessage
              key={message._id}
              isSelf={currentUserId === message.author()._id}
              message={message}
            />
          ))}
        </div>

      </div>
      <div className={css(styles.footer)}>
        <Composer
          connected={!isLoading}
          disabled={isLoading}
          loading={isLoading}
          sendMessage={createMessage}
        />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    padding: '12px',
    overflow: 'scroll',
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 56,
    bottom: 0,
    padding: 12,
    borderTop: '1px solid #edefed',
    backgroundColor: '#ffffff',
  },
  messages: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrapper: {
    position: 'relative',
    height: 712,
    paddingBottom: 52,
    border: '1px solid #dce0e0',
  },
});

ChatContainer.propTypes = propTypes;
