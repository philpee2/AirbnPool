import React, { PropTypes } from 'react';
import OtherChatMessages from './OtherChatMessages';
import SelfChatMessages from './SelfChatMessages';
import AnnouncerChatMessages from './AnnouncerChatMessages';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserId: PropTypes.string.isRequired,
};

export default function ChatMessagesBlock({ messages, currentUserId }) {
  const authorId = messages[0].userId;
  if (authorId === 'announcer') {
    return <AnnouncerChatMessages messages={messages} />;
  } else if (authorId === currentUserId) {
    return <SelfChatMessages messages={messages} />
  } else {
    return <OtherChatMessages messages={messages} />
  }
}

ChatMessagesBlock.propTypes = propTypes;
