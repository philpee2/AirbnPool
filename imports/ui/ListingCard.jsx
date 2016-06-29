import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
  onVote: PropTypes.func.isRequired,
};

export default function ListingCard({ listing, onVote }) {
  const title = 'Boutique Retreat Bedroom';
  const reviewsCount = 5;
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.imageWrapper)}>
        <div className={css(styles.wishlistButton)}>
          <button>Wishlist</button>
        </div>
        <img
          className={css(styles.image)}
          src="https://a2.muscache.com/im/pictures/97759166/422a22ef_original.jpg?aki_policy=x_medium"
        />
        <div className={css(styles.priceContainer)}>
          <h3 className={css(styles.price)}>
            {'$100'}
          </h3>
          <h3 className={css(styles.price)}>
            {': IB'}
          </h3>
        </div>
      </div>

      <div className={css(styles.bottomRow)}>
        <div className={css(styles.textContainer)}>
          <h4 className={css(styles.title)}>
            {title}
          </h4>
          <div>
            <span>Entire home/apt</span>
            <span className={css(styles.middot)}>·</span>
            <span>{`${reviewsCount} reviews`}</span>
          </div>
        </div>

        <div className={css(styles.profilePhotoContainer)}>
          <a className={css(styles.userImageWrapper)} href={''}>
            <img
              className={css(styles.userImage)}
              src="https://avatars1.githubusercontent.com/u/2244653?v=3&s=460"
            />
          </a>
        </div>
        <button className={css(styles.voteButton)} onClick={onVote}>Vote</button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    marginBottom: 12,
    border: '1px solid #dce0e0',
  },
  imageWrapper: {
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
  wishlistButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 2 * 6,
    zIndex: 1,
  },
  businessReady: {
    // ...font.label5,
    color: '#ffffff',
    paddingTop: 0.5 * 6,
    paddingBottom: 0.5 * 6,
    paddingRight: 1 * 6,
    marginBottom: 1,
    bottom: 6 * 6 + 1,
  },
  priceContainer: {
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
  price: {
    display: 'inline-block',
    color: '#ffffff',
  },
  bottomRow: {
    backgroundColor: '#ffffff',
    padding: 2 * 6,
  },
  textContainer: {
    width: '80%',
    display: 'inline-block',
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  middot: {
    marginLeft: 6,
    marginRight: 6,
  },
  profilePhotoContainer: {
    borderRadius: '50%',
    border: '2px solid #fff',
    width: 56,
    height: 56,
    float: 'right',
    position: 'relative',
    overflow: 'hidden',
    top: -40,
  },
  userImageWrapper: {
    display: 'flex',
    position: 'relative',
    height: '100%',
  },
  userImage: {
    width: '100%',
  },
  voteButton: {
    backgroundColor: 'red',
    color: 'white',
  }
});

ListingCard.propTypes = propTypes;
