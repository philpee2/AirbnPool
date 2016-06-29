import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ListingCard from './ListingCard';
import { CAN_VOTE, DID_VOTE, CANNOT_VOTE } from './constants/voting_status_constants';
import { sumBy } from 'lodash';

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

function getVotesValue(votes) {
  return sumBy(votes, vote => vote.value());
}

function getListingVotesValue(votes, listingId) {
  const votesForListing = votes.filter(vote => vote.listingId === listingId);
  return getVotesValue(votesForListing);
}

export default function ListingsContainer({
  listings,
  onListingVote,
  allVotes,
  currentUserVotes,
}) {
  return (
    <div>
      <h2>Vote on a listing to join Pool</h2>
      <div className={css(styles.container)}>
        {listings.map(listing => (
          <ListingCard
            key={listing._id}
            listing={listing}
            numVotes={getListingVotesValue(allVotes, listing._id)}
            onVote={() => onListingVote(listing._id)}
            votingStatus={getVotingStatus(listing._id, currentUserVotes)}
          />
        ))}
      </div>
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
