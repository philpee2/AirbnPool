import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ListingCard from './ListingCard';

const propTypes = {
  listings: PropTypes.array.isRequired,
  onListingVote: PropTypes.func.isRequired,
};

export default function ListingsContainer({ listings, onListingVote }) {
  return (
    <div className={css(styles.container)}>
      {listings.map(listing => (
        <ListingCard
          key={listing._id}
          listing={listing}
          onVote={() => onListingVote(listing._id)}
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
