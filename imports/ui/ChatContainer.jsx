import React, { PropTypes, Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { StyleSheet, css } from 'aphrodite';

import { Groups } from '../api/groups/groups';

import ChatMessage from './ChatMessage';
import ListingCard from './ListingCard';
import Composer from './Composer';

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

    this._createMessage = this._createMessage.bind(this);
  }

  _createMessage(text) {
    this.props.createMessage(text, this.props.groupId);
  }

  sendMessage(text, groupId) {
    this.props.createMessage(text, groupId);
    this.setState({
      newMessageText: '',
    });
  }

  render() {
    const { messages, groupId, createMessage, isLoading } = this.props;
    const { newMessageText } = this.state;
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.container)}>
          <div className={css(styles.messages)}>
            {messages.map(message => (
              <ChatMessage key={message._id} message={message} />
            ))}
          </div>

        </div>
        <div className={css(styles.footer)}>
          <Composer
            groupId={groupId}
            connected={!isLoading}
            disabled={isLoading}
            loading={isLoading}
            sendMessage={this._createMessage}
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    overflow: 'scroll',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
  messages: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrapper: {
    position: 'relative',
    height: 412,
    padding: '12px',
    border: '1px solid #edefed',
  },
});

ChatContainer.propTypes = propTypes;

export default createContainer((props) => {
  const groupId = props.groupId;
  const groupHandle = Meteor.subscribe('group', groupId);
  const isLoading = !groupHandle.ready();
  const group = Groups.findOne(groupId);
  const messages = isLoading ? [] : group.messages().fetch();
  return {
    messages,
    isLoading,
    groupId,
    createMessage: (text, groupId) => Meteor.call('messages.create', text, groupId),
  };
}, ChatContainer);
