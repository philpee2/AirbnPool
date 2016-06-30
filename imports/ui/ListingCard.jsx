import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { CAN_VOTE, DID_VOTE, CANNOT_VOTE } from './constants/voting_status_constants';

import ListingBallot from './ListingBallot';

const propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  onVote: PropTypes.func.isRequired,
  numVotes: PropTypes.number.isRequired,
  votingStatus: PropTypes.oneOf([CAN_VOTE, DID_VOTE, CANNOT_VOTE]).isRequired,
};

export default function ListingCard({ listing, onVote, votingStatus, numVotes, order }) {
  const {
    hostImage,
    location,
    preview,
    price,
    reviews,
    title,
    type,
  } = listing;
  const reviewsCount = 5;
  const dynamicStyles = StyleSheet.create({
    container: {
      order,
    }
  });
  return (
    <div className={css(styles.container, dynamicStyles.container)}>
      <div className={css(styles.header)}>
        <img
          className={css(styles.image)}
          src={preview}
        />
        <div className={css(styles.pricing)}>
          <h3 className={css(styles.price)}>
            {price}
          </h3>
          <h3 className={css(styles.price)}>
            {': IB'}
          </h3>
        </div>
      </div>

      <div className={css(styles.footer)}>
        <div className={css(styles.metadata)}>
          <h4 className={css(styles.title)}>
            {title}
          </h4>
          <div>
            <span>{type}</span>
            <span className={css(styles.middot)}>·</span>
            <span>{`${reviews} reviews`}</span>
          </div>
        </div>

        <div className={css(styles.profile)}>
          <img
            className={css(styles.user)}
            src={hostImage}
          />
        </div>
        <ListingBallot
          numVotes={numVotes}
          onVote={onVote}
          votingStatus={votingStatus}
        />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width: '100%',
    marginBottom: 12,
    border: '1px solid #dce0e0',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: 12,
    backgroundColor: '#ffffff',
  },
  header: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingBottom: '67%',
  },
  image: {
    position: 'absolute',
    minWidth: '100%',
    height: '100%',
  },
  metadata: {
    width: '80%',
    display: 'inline-block',
  },
  middot: {
    marginLeft: 6,
    marginRight: 6,
  },
  price: {
    display: 'inline-block',
    color: '#ffffff',
  },
  pricing: {
    position: 'absolute',
    left: 0,
    background: '#bbbbbb',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    bottom: 12,
    backgroundColor: 'rgba(45,45,45,0.9)',
    color: '#ffffff',
  },
  profile: {
    position: 'absolute',
    overflow: 'hidden',
    right: 0,
    bottom: 64,
    borderRadius: '50%',
    border: '2px solid #fff',
    width: 56,
    height: 56,
  },
  statistics: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  user: {
    width: '100%',
  },
});

ListingCard.propTypes = propTypes;
