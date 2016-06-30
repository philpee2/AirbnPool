import React, { PropTypes } from 'react';
import AnnouncerChatMessage from './AnnouncerChatMessage';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function AnnouncerChatMessages({ messages }) {
  return (
    <div>
      {messages.map(message => (
        <AnnouncerChatMessage message={message} key={message._id} />
      ))}
    </div>
  );
}

AnnouncerChatMessages.propTypes = propTypes;
