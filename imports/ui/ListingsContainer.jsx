import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ListingCard from './ListingCard';

const propTypes = {
  listings: PropTypes.array.isRequired,
};

export default function ListingsContainer({ listings }) {
  return (
    <div className={css(styles.container)}>
      {listings.map(listing => {
        return <ListingCard listing={listing} />;
      })}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

ListingsContainer.propTypes = propTypes;
