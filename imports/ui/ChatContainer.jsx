import React, { PropTypes, Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { StyleSheet, css } from 'aphrodite';

import { Messages } from '../api/messages/messages';
import ListingCard from './ListingCard';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  groupId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  createMessage: PropTypes.func.isRequired,
};

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMessageText: '',
    };

    this.onMessageChange = this.onMessageChange.bind(this);
  }

  onMessageChange(e) {
    this.setState({
      newMessageText: e.target.value,
    });
  }

  render() {
    const { messages, groupId, createMessage } = this.props;
    const { newMessageText } = this.state;
    return (
      <div className={css(styles.container)}>
        {messages.map(message => (
          <div key={message._id}>
            {message.text}
          </div>
        ))}

        <input
          value={newMessageText}
          onChange={this.onMessageChange}
        />

        <button onClick={() => createMessage(newMessageText, groupId)}>
          Send
        </button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    border: '1px solid #edefed',
  },
});

ChatContainer.propTypes = propTypes;

export default createContainer((props) => {
  const groupId = props.groupId;
  const messagesHandle = Meteor.subscribe('messagesForGroup', groupId);
  const isLoading = !messagesHandle.ready();
  const messages = Messages.find({ groupId }).fetch();
  return {
    messages,
    isLoading,
    groupId,
    createMessage: (text, groupId) => Meteor.call('messages.create', text, groupId),
  };
}, ChatContainer);
