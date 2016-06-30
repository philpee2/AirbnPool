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
        <button className={css(styles.disabled)} disabled>
          Vote
        </button>
      );
    case DID_VOTE:
      return (
        <div className={css(styles.checkmark)}>
          <img
            src={'/images/checkmark.png'}
            width={16}
            height={12}
          />
        </div>
      );
  }
}

export default function ListingBallot({
  numVotes,
  onVote,
  votingStatus,
}) {
  return (
    <div className={css(styles.container)}>
      {Meteor.userId() && <VoteButton status={votingStatus} onClick={onVote} />}
      {numVotes > 0 && (
        <div className={css(styles.numVotes)}>
          {`${numVotes} Vote(s)`}
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
    borderRadius: 15,
    backgroundColor: '#ff5a5f',
    cursor: 'pointer',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
  checkmark: {
    padding: '5px 6px 3px 6px',
    fontFamily: 'Circular Bold',
    color: '#ffffff',
    backgroundColor: '#ff5a5f',
    borderRadius: '50%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 6,
  },
  disabled: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 12,
    paddingLeft: 12,
    color: '#ffffff',
    fontFamily: 'Circular Bold',
    fontSize: 14,
    border: 'none',
    borderRadius: 15,
    backgroundColor: '#dce0e0',
  },
});
