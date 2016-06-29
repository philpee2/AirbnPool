import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ListingCard from './ListingCard';
import { CAN_VOTE, DID_VOTE, CANNOT_VOTE } from './constants/voting_status_constants';

const propTypes = {
  listings: PropTypes.array.isRequired,
  onListingVote: PropTypes.func.isRequired,
  allVotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserVotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function getVotingStatus(listingId, currentUserVotes) {
  if (currentUserVotes.length === 0) {
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
}) {
  return (
    <div className={css(styles.container)}>
      {listings.map(listing => (
        <ListingCard
          key={listing._id}
          listing={listing}
          onVote={() => onListingVote(listing._id)}
          numVotes={allVotes.filter(vote => vote.listingId === listing._id).length}
          votingStatus={getVotingStatus(listing._id, currentUserVotes)}
          showVotes={currentUserVotes.length > 0}
        />
      ))}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 256,
  },
});

ListingsContainer.propTypes = propTypes;
