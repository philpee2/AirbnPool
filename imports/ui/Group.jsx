import React, { Component, PropTypes } from 'react';
import Loader from './Loader';
import Header from './Header';
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
  totalUsers: PropTypes.number.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  listings: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
  createMessage: PropTypes.func.isRequired,
  onListingVote: PropTypes.func.isRequired,
  allVotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserVotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  joinGroup: PropTypes.func.isRequired,
  winningListing: PropTypes.object,
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
      totalUsers,
      users,
      onListingVote,
      allVotes,
      currentUserVotes,
      listings,
      numBeds,
      winningListing,
    } = this.props;

    if (isLoading) {
      return this.renderLoader();
    }

    const { groupId } = params;
    return (
      <div className={css(styles.wrapper)}>
        <Header />
        <div className={css(styles.page)}>
          <div className={css(styles.header)}>
            <div className={css(styles.col, styles.expand)}>
              <h1>Airbnb Pool</h1>
              <h3>Trip to Edinburgh, June 2nd to June 6th</h3>
            </div>
            <div className={css(styles.viewers)}>
              <img
                className={css(styles.image)}
                src={'http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/couple-icon.png'}
              />
              <span>
                {`${totalUsers} guests viewing`}
              </span>
            </div>
          </div>
          <div className={css(styles.row, styles.expand)}>
            <div className={css(styles.col, styles.expand)}>
              <div className={css(styles.row)}>
                <UsersContainer users={users} numBeds={numBeds} />
              </div>
              <div className={css(styles.row, styles.expand)}>
                <ChatContainer
                  messages={messages}
                  createMessage={(text) => createMessage(text, groupId)}
                  isLoading={isLoading}
                />
              </div>
            </div>
            <div className={css(styles.col, styles.padding)}>
              <div className={css(styles.row)}>
                <ListingsContainer
                  listings={listings}
                  onListingVote={onListingVote}
                  allVotes={allVotes}
                  currentUserVotes={currentUserVotes}
                  groupId={groupId}
                  winningListing={winningListing}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderLoader() {
    return <Loader />;
  }
}

Group.propTypes = propTypes;

const styles = StyleSheet.create({
  col: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: 320,
  },
  expand: {
    flex: 2,
  },
  header: {
    display: 'flex',
    position: 'relative',
    paddingBottom: 24,
    borderBottom: '1px solid #dce0e0',
  },
  image: {
    width: 30,
    height: 30,
    'margin-left': 15,
  },
  padding: {
    paddingLeft: 12,
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    width: 872,
    margin: 'auto',
  },
  row: {
    display: 'flex',
    position: 'relative',
  },
  viewers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
});

export default createContainer((props) => {
  const groupId = props.params.groupId;
  const groupHandle = Meteor.subscribe('group', groupId);
  const isLoading = !groupHandle.ready();
  const group = Groups.findOne(groupId);
  const messages = isLoading ? [] : group.messages().fetch();
  const totalUsers = isLoading ? [] : group.users().fetch();
  const userGroups = isLoading ? [] : group.userGroups().fetch();
  const listings = isLoading ? [] : group.listings().fetch();
  const allVotes = isLoading ? [] : group.allVotes().fetch();
  const currentUserVotes = isLoading ? [] : group.votesForUser(Meteor.userId()).fetch();

  const usersWhoVoted = totalUsers.filter(user => {
    return !!(allVotes.find(vote => vote.userId === user._id));
  });
  const userData = usersWhoVoted.map(user => {
    const numBeds = userGroups.find(userGroup => userGroup.userId === user._id).numBeds;
    return Object.assign(user, { numBeds });
  });

  const winningListing = isLoading ? null : group.winningListing();
  return {
    messages,
    isLoading,
    group,
    totalUsers: totalUsers.length,
    users: userData,
    listings,
    allVotes,
    currentUserVotes,
    winningListing,
    createMessage: (text) => Meteor.call('messages.create', text, groupId),
    onListingVote: (listingId) => Meteor.call('votes.create', listingId, groupId),
    joinGroup: () => Meteor.call('userGroups.joinGroup', Meteor.userId(), groupId),
  };
}, Group);
