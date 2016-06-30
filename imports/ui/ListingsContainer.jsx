import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ListingCard from './ListingCard';
import { CAN_VOTE, DID_VOTE, CANNOT_VOTE } from './constants/voting_status_constants';
import { sumBy, sortBy } from 'lodash';

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
  const sortedListings = sortBy(listings, listing => -getListingVotesValue(allVotes, listing._id));
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
            numVotes={listing.voteCount || 0}
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
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
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
  }
});

ListingsContainer.propTypes = propTypes;
