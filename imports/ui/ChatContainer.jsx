import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';
import OtherChatMessage from './OtherChatMessage';
import ListingCard from './ListingCard';
import Composer from './Composer';
import ChatMessagesBlock from './ChatMessagesBlock';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  createMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function generateBlocks(messages, id) {
  const blocks = [];
  if (messages.length <= 0) {
    return blocks;
  }
  let currentBlock = [];
  let lastId = messages[0].userId;
  messages.map(message => {
    const currentId = message.userId;
    if (currentId === lastId) {
      currentBlock.push(message);
    } else {
      blocks.push(currentBlock);
      currentBlock = [message];
      lastId = currentId;
    }
  });
  blocks.push(currentBlock);
  return blocks;
}

export default class ChatContainer extends Component {
  componentDidUpdate() {
    const scrollable = ReactDOM.findDOMNode(this.refs.scrollable);
    scrollable.scrollTop = scrollable.scrollHeight;
  }

  render() {
    const {
      createMessage,
      isLoading,
      messages,
    } = this.props;
    const currentUserId = Meteor.userId();
    const blocks = generateBlocks(messages, currentUserId);
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.container)} ref={'scrollable'}>
          <div className={css(styles.messages)}>
            {blocks.map(block =>
              <ChatMessagesBlock
                key={block[0]._id}
                messages={block}
                currentUserId={currentUserId}
              />
            )}
          </div>

        </div>
        <div className={css(styles.footer)}>
          <Composer
            connected={!isLoading}
            disabled={isLoading || !Meteor.userId()}
            loading={isLoading}
            sendMessage={createMessage}
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
    padding: '12px',
    overflow: 'scroll',
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 56,
    bottom: 0,
    padding: 12,
    borderTop: '1px solid #edefed',
    backgroundColor: '#ffffff',
    marginBottom: 100,
  },
  messages: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    paddingBottom: 52,
    borderRight: '1px solid #dce0e0',
  },
});

ChatContainer.propTypes = propTypes;
