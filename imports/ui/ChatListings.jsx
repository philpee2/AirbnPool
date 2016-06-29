import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ListingCard from './ListingCard';

const propTypes = {
  listings: PropTypes.array.isRequired,
};

export default function ChatListings({ listings }) {
  return (
    <div className={css(styles.container)}>
      {listings.map(listing => {
        return <ListingCard listing={listing} key={listing._id} />;
      })}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
});

ChatListings.propTypes = propTypes;
