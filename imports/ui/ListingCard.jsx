import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { CAN_VOTE, DID_VOTE, CANNOT_VOTE } from './constants/voting_status_constants';

import ListingBallot from './ListingBallot';

const propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
  onVote: PropTypes.func.isRequired,
  numVotes: PropTypes.number.isRequired,
  votingStatus: PropTypes.oneOf([CAN_VOTE, DID_VOTE, CANNOT_VOTE]).isRequired,
  showVotes: PropTypes.bool.isRequired,
};

export default function ListingCard({ listing, onVote, votingStatus, numVotes, showVotes }) {
  const title = 'Boutique Retreat Bedroom';
  const reviewsCount = 5;
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.header)}>
        <img
          className={css(styles.image)}
          src="https://a2.muscache.com/im/pictures/97759166/422a22ef_original.jpg?aki_policy=x_medium"
        />
        <div className={css(styles.pricing)}>
          <h3 className={css(styles.price)}>
            {'$100'}
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
            <span>Entire home/apt</span>
            <span className={css(styles.middot)}>·</span>
            <span>{`${reviewsCount} reviews`}</span>
          </div>
        </div>

        <div className={css(styles.profile)}>
          <img
            className={css(styles.user)}
            src="https://avatars1.githubusercontent.com/u/2244653?v=3&s=460"
          />
        </div>
        <ListingBallot
          numVotes={numVotes}
          onVote={onVote}
          showVotes={showVotes}
          votingStatus={votingStatus}
        />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  button: {
    fontFamily: 'Circular Bold',
    fontSize: 14,
    color: '#ffffff',
    border: 'none',
    borderRadius: 2,
    backgroundColor: '#ff5a5f',
    cursor: 'pointer',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 12,
    paddingLeft: 12,
    transition: 'opacity 0.3s',
  },
  container: {
    position: 'relative',
    flex: 1,
    marginBottom: 12,
    border: '1px solid #dce0e0',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: 12,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #dce0e0',
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
  votedIcon: {
    backgroundColor: 'red',
  },
  disabledVoteButton: {
    fontFamily: 'Circular Bold',
    fontSize: 14,
    color: '#ffffff',
    border: 'none',
    borderRadius: 2,
    backgroundColor: '#dce0e0',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 12,
    paddingLeft: 12,
    transition: 'opacity 0.3s',
  },
});

ListingCard.propTypes = propTypes;
