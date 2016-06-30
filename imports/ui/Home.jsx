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
            <div className={css(styles.marketingTextLeft)}>
              <h1 className={css(styles.marketingSectionH1)}>Why you should do it</h1>
              <p className={css(styles.marketingParagraph)}>Share hosting access to your listing</p>
              <a className={css(styles.marketingLink)} href="#">Learn more</a>
            </div>
            <div className={css(styles.marketingImageRight)}><img src="/images/placeholder.jpg" /></div>
          </div>

          <div className={css(styles.marketingSection)}>
            <div className={css(styles.marketingImageLeft)}><img src="/images/placeholder.jpg" /></div>
            <div className={css(styles.marketingTextRight)}>
              <h1 className={css(styles.marketingSectionH1)}>Why you should do it</h1>
              <p className={css(styles.marketingParagraph)}>Share hosting access to your listing</p>
              <a className={css(styles.marketingLink)} href="#">Learn more</a>
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
    padding: '0 106px',
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
    padding: '82px 0',
  },
  marketingTextLeft: {
    flexGrow: 2,
    order: 1,
    display: 'inline-block',
    fontSize: '18px',
    ' p': {
      fontSize: '18px',
    }
  },
  marketingImageRight: {
    flexGrow: 0,
    order: 2,
    display: 'inline-block',
    padding: '0 0 0 100px',
  },
  marketingTextRight: {
    flexGrow: 2,
    order: 2,
    display: 'inline-block',
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
  },
  marketingParagraph: {
    fontSize: '18px',
    color: 'rgb(74, 74, 74)',
  },
  marketingLink: {
    fontSize: '18px',
  },
});
