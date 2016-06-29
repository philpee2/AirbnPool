import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { CAN_VOTE, DID_VOTE, CANNOT_VOTE } from './constants/voting_status_constants';

function VoteButton({ status, onClick }) {
  switch (status) {
    case CAN_VOTE:
      return (
        <button className={css(styles.button)} onClick={onClick}>
          Vote
        </button>
      );
    case CANNOT_VOTE:
      return (
        <button className={css(styles.disabledVoteButton)} disabled>
          Vote
        </button>
      );
    case DID_VOTE:
      return (
        <div className={css(styles.checkmark)}>
          &#9745
        </div>
      );
  }
}

export default function ListingBallot({ numVotes, onVote, showVotes, votingStatus }) {
  return (
    <div className={css(styles.container)}>
      <VoteButton status={votingStatus} onClick={onVote} />
      {numVotes > 0 && showVotes && (
        <div className={css(styles.numVotes)}>
          {`${numVotes} Votes`}
        </div>
      )}
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
  checkmark: {
    width: 48,
    color: '#ffffff',
    backgroundColor: 'red',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
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
