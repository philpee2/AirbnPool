import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import StartForm from './StartForm';

export default function App({ children }) {
  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.header)}>
        <h1 className={css(styles.mainTitle)}>Airbnb Pool</h1>
        <h2 className={css(styles.subTitle)}>Share your experience with other Airbnb guests.</h2>
        <div className={css(styles.cta)}>
          <a href="#" className={css(styles.videoButton)}>Watch the video</a>
          <a href="#" className={css(styles.howButton)}>How does it work?</a>
        </div>
      </div>

      <StartForm />

      <div className={css(styles.marketingWrapper)}>
        <div className={css(styles.marketingContainer)}>
          <div className={css(styles.marketingHeader)}>
            <h1 className={css(styles.marketingH1)}>Travel is more fun with company</h1>
            <p className={css(styles.marketingParagraph)}>
              Something Airbnb something about how awesome your life becomes
            </p>
          </div>

          <div className={css(styles.marketingSection)}>
            <div className={css(styles.marketingTextLeft, styles.section1)}>
              <h1 className={css(styles.marketingSectionH1)}>Share an experience</h1>
              <p className={css(styles.marketingParagraph, styles.marketingSubtitle)}>And make new friends along the way</p>
              <p className={css(styles.marketingParagraph)}>
                Connecting people is at the heart of what we do. We want to bring people from
                around the world closer together to create extraordinary stories and moments.
              </p>
              <a className={css(styles.marketingLink)} href="#">Read more</a>
            </div>
          </div>

          <div className={css(styles.marketingSection)}>
            <div className={css(styles.marketingTextRight, styles.section2)}>
              <h1 className={css(styles.marketingSectionH1)}>Instant book</h1>
              <p className={css(styles.marketingParagraph, styles.marketingSubtitle)}>Travel is about the journey</p>
              <p className={css(styles.marketingParagraph)}>
                Vote on your favorite spot, once everyone's voted we will instantly book the most
                popular choice! No need to negotiate with the host. Sounds wild but it's just part
                of the adventure.
              </p>
              <a className={css(styles.marketingLink)} href="#">Read more</a>
            </div>
          </div>

          <div className={css(styles.marketingSection)}>
            <div className={css(styles.marketingTextLeft, styles.section3)}>
              <h1 className={css(styles.marketingSectionH1)}>Great for hosts</h1>
              <p className={css(styles.marketingParagraph, styles.marketingSubtitle)}>Get access to the solo travelers market</p>
              <p className={css(styles.marketingParagraph)}>
                Earn more money per reservation and get more reservations by accessing a new market.
                Airbnb will feature hidden gems and get hosts more booked nights.
              </p>
              <a className={css(styles.marketingLink)} href="#">Read more</a>
            </div>
          </div>

          <div className={css(styles.marketingSection)}>
            <div className={css(styles.marketingTextRight, styles.section4)}>
              <h1 className={css(styles.marketingSectionH1)}>Guests have more choices</h1>
              <p className={css(styles.marketingParagraph, styles.marketingSubtitle)}>
                Stay at places that were previously out of reach.
              </p>
              <p className={css(styles.marketingParagraph)}>
                Dreaming of skyline views, castles on the hill top, beach vibes or uptown chic?
                Can't do it on your own? We can help you get there and introduce you to new people
                along the way.
              </p>
              <a className={css(styles.marketingLink)} href="#">Read more</a>
            </div>
          </div>

        </div>
      </div>

      <StartForm />

    </div>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: 100,
  },
  header: {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ), url(/images/hero.jpg) no-repeat center top`,
    backgroundSize: 'cover',
    minHeight: 533,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    paddingLeft: 115,
  },
  mainTitle: {
    fontFamily: 'Circular Bold',
    fontSize: 48,
    color: '#FFFFFF',
    letterSpacing: -1,
    lineHeight: '56px',
  },
  subTitle: {
    fontFamily: 'Circular Book',
    fontSize: 28,
    color: '#FFFFFF',
    letterSpacing: 0,
    lineHeight: '32px',
  },
  cta: {
    marginTop: 56,
  },
  videoButton: {
    display: 'inline-block',
    background: '#FFFFFF',
    borderRadius: 64,
    fontFamily: 'Circular Book',
    fontSize: 18,
    color: '#484848',
    letterSpacing: 0,
    lineHeight: '24px',
    width: 188,
    height: 48,
    textDecoration: 'none',
    textAlign: 'center',
    paddingTop: 12,
    marginRight: 24,
  },
  howButton: {
    display: 'inline-block',
    background: 'transparent',
    border: '2px solid #FFFFFF',
    borderRadius: 64,
    fontFamily: 'Circular Book',
    fontSize: 18,
    color: 'white',
    letterSpacing: 0,
    lineHeight: '24px',
    width: 188,
    height: 48,
    textDecoration: 'none',
    textAlign: 'center',
    paddingTop: 12,
  },
  marketingWrapper: {
    width: '100%',
    minWidth: 954,
    paddingTop: 82,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  marketingContainer: {
    position: 'relative',
    padding: '0 82px',
    width: 954,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  marketingHeader: {

  },
  marketingH1: {
    fontFamily: 'Circular Medium',
    fontSize: 44,
    color: 'rgb(86, 90, 92)',
    fontWeight: 400,
    letterSpacing: '-0.83px',
    lineHeight: '48px',
  },
  marketingSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    borderBottom: '1px solid rgb(235, 235, 234)',
    padding: '82px 0 0 0',
  },
  marketingTextLeft: {
    flexGrow: 2,
    order: 1,
    display: 'inline-block',
    fontSize: '18px',
    paddingRight: 500,
    ' p': {
      fontSize: '18px',
    }
  },
  section1: {
    background: 'transparent url(/images/experience-together@2x.png) no-repeat right top',
    backgroundSize: '518px 431px',
    height: 360,
  },
  section2: {
    background: 'transparent url(/images/instant-book@2x.png) no-repeat 100px 20px',
    backgroundSize: '185px 217px',
    height: 360,
  },
  section3: {
    background: 'transparent url(/images/hosts@2x.png) no-repeat 500px 20px',
    backgroundSize: '217px 234px',
    height: 360,
  },
  section4: {
    background: 'transparent url(/images/choice@2x.png) no-repeat 70px 20px',
    backgroundSize: '230px 200px',
    height: 360,
  },
  marketingTextRight: {
    flexGrow: 2,
    order: 2,
    display: 'inline-block',
    paddingLeft: 500,
    fontSize: '18px',
    ' p': {
      fontSize: '18px',
    }
  },
  marketingImageLeft: {
    flexGrow: 0,
    order: 1,
    display: 'inline-block',
    padding: '0 100px 0 0',
    ' img': {
      verticalAlign: 'middle',
    },
  },
  marketingSectionH1: {
    fontFamily: 'Circular Bold',
    fontSize: '36px',
    color: 'rgb(72, 72, 72)',
    letterSpacing: '-0.45px',
    lineHeight: '36px',
    whiteSpace: 'nowrap',
  },
  marketingSubtitle: {
    position: 'relative',
    paddingBottom: 24,
    marginBottom: 24,
    ':after': {
      content: '""',
      width: 45,
      height: 1,
      background: 'rgb(235, 235, 234)',
      position: 'absolute',
      bottom: -4,
      left: 0,
    }
  },
  marketingParagraph: {
    fontSize: '18px',
    color: 'rgb(74, 74, 74)',
  },
  marketingLink: {
    fontSize: '18px',
  },
});
