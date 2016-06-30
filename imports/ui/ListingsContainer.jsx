import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ListingCard from './ListingCard';
import { CAN_VOTE, DID_VOTE, CANNOT_VOTE, VOTING_OVER } from './constants/voting_status_constants';

const propTypes = {
  listings: PropTypes.array.isRequired,
  onListingVote: PropTypes.func.isRequired,
  allVotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserVotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  groupId: PropTypes.string.isRequired,
  winningListing: PropTypes.object,
};

function getVotingStatus(listingId, currentUserVotes, isVotingOver) {
  if (isVotingOver) {
    return VOTING_OVER;
  } else if (currentUserVotes.length === 0) {
    return CAN_VOTE;
  } else if (currentUserVotes[0].listingId === listingId) {
    return DID_VOTE;
  } else {
    return CANNOT_VOTE;
  }
}

export default function ListingsContainer({
  listings,
  onListingVote,
  allVotes,
  currentUserVotes,
  groupId,
  winningListing,
}) {
  console.log(listings);
  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.header)}>
        <h2>Vote on a listing to join</h2>
      </div>
      <div className={css(styles.container)}>
        {listings.map(listing => (
          <ListingCard
            key={listing._id}
            listing={listing}
            numVotes={listing.votesValueInGroup(groupId) || 0}
            onVote={() => onListingVote(listing._id)}
            votingStatus={getVotingStatus(listing._id, currentUserVotes, !!winningListing)}
            disabled={!!winningListing ? listing._id !== winningListing._id : false}
          />
        ))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    overflow: 'scroll',
    maxHeight: '100%',
  },
  header: {
    position: 'relative',
    padding: '24px 0px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    paddingBottom: 96,
  },
});

ListingsContainer.propTypes = propTypes;
