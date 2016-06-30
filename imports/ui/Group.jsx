import React, { Component, PropTypes } from 'react';
import ChatContainer from './ChatContainer';
import ListingsContainer from './ListingsContainer';
import UsersContainer from './UsersContainer';
import { StyleSheet, css } from 'aphrodite';
import { createContainer } from 'meteor/react-meteor-data';
import { Groups } from '../api/groups/groups';
import { Meteor } from 'meteor/meteor';

const propTypes = {
  params: PropTypes.shape({
    groupId: PropTypes.string.isRequired,
  }).isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  group: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  listings: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
  createMessage: PropTypes.func.isRequired,
  onListingVote: PropTypes.func.isRequired,
  allVotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserVotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  numBeds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

class Group extends Component {
  componentDidMount() {
    this.props.joinGroup();
  }

  render() {
    const {
      createMessage,
      isLoading,
      params,
      messages,
      users,
      onListingVote,
      allVotes,
      currentUserVotes,
      listings,
      numBeds,
    } = this.props;
    const { groupId } = params;
    return (
      <div className={css(styles.page)}>
        <div className={css(styles.row)}>
          <div className={css(styles.col)}>
            <h1>Airbnb Pool</h1>
            <h4>Trip to Tokyo, June 2nd to June 6th</h4>
          </div>
        </div>
        <div className={css(styles.row)}>
          <UsersContainer users={users} numBeds={numBeds} />
        </div>
        <div className={css(styles.row)}>
          <div className={css(styles.col)}>
            <ChatContainer
              messages={messages}
              createMessage={(text) => createMessage(text, groupId)}
              isLoading={isLoading}
            />
          </div>
          <div className={css(styles.col, styles.padding)}>
            <ListingsContainer
              listings={listings}
              onListingVote={onListingVote}
              allVotes={allVotes}
              currentUserVotes={currentUserVotes}
            />
          </div>
        </div>
      </div>
    );
  }
}

Group.propTypes = propTypes;

const styles = StyleSheet.create({
  col: {
    position: 'relative',
    display: 'inline-block',
    flex: 1,
    width: '50%',
    boxSizing: 'border-box',
  },
  padding: {
    paddingLeft: 12,
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
  const users = isLoading ? [] : group.users().fetch();
  const listings = isLoading ? [] : group.listings().fetch();
  const allVotes = isLoading ? [] : group.allVotes().fetch();
  const currentUserVotes = isLoading ? [] : group.votesForUser(Meteor.userId()).fetch();
  const numBeds = [2, 3]; // todo: get from group
  return {
    messages,
    isLoading,
    group,
    users,
    listings,
    allVotes,
    currentUserVotes,
    createMessage: (text) => Meteor.call('messages.create', text, groupId),
    joinGroup: () => Meteor.call('userGroups.joinGroup', Meteor.userId(), groupId),
    onListingVote: (listingId) => Meteor.call('votes.create', listingId, groupId),
    numBeds,
  };
}, Group);
