import React, { PropTypes } from 'react';
import ChatContainer from './ChatContainer';
import ListingsContainer from './ListingsContainer';
import UsersContainer from './UsersContainer';
import { StyleSheet, css } from 'aphrodite';
import { createContainer } from 'meteor/react-meteor-data';
import { Groups } from '../api/groups/groups';
import { Meteor } from 'meteor/meteor';

const fakeListings = [{
  _id: '1',
  location: '',
}, {
  _id: '2',
  location: '',
}];

const propTypes = {
  params: PropTypes.shape({
    groupId: PropTypes.string.isRequired,
  }).isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  group: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
  createMessage: PropTypes.func.isRequired,
};

function Group({ params , messages, isLoading, createMessage }) {
  const { groupId } = params;
  return (
    <div className={css(styles.page)}>
      <div className={css(styles.row)}>
        <h2>Choose a place, you'll stay at whichever has the most votes</h2>
      </div>
      <div className={css(styles.row)}>
        <ListingsContainer listings={fakeListings} />
      </div>
      <div className={css(styles.row)}>
        <div className={css(styles.col)}>
          <ChatContainer
            messages={messages}
            createMessage={(text) => createMessage(text, groupId)}
            isLoading={isLoading}
          />
        </div>
        <div className={css(styles.col)}>
          <UsersContainer users={users} />
        </div>
      </div>
    </div>
  );
}

Group.propTypes = propTypes;

const styles = StyleSheet.create({
  col: {
    position: 'relative',
    display: 'inline-block',
    flex: 1,
    width: '50%',
    padding: '0px 12px',
    boxSizing: 'border-box',
  },
  page: {
    position: 'relative',
    width: 712,
    margin: 'auto',
  },
  row: {
    position: 'relative',
    display: 'flex',
    paddingBottom: 24,
  },
});

export default createContainer((props) => {
  const groupId = props.params.groupId;
  const groupHandle = Meteor.subscribe('group', groupId);
  const isLoading = !groupHandle.ready();
  const group = Groups.findOne(groupId);
  const messages = isLoading ? [] : group.messages().fetch();
  const users = isLoading ? [] : group.users().fetch();;
  return {
    messages,
    isLoading,
    group,
    users,
    createMessage: (text, groupId) => Meteor.call('messages.create', text, groupId),
  };
}, Group);
