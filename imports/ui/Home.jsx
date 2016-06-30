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
          <a href="#" className={css(styles.howButton)}>How it works</a>
        </div>
      </div>

      <StartForm />

      <h1 className={css(styles.marketingH1)}>Meet other travelers</h1>
      <p>Something something about how awesome your life becomes</p>

      <div className={css(styles.marketingSection1)}>
        <h1 className={css(styles.marketingSectionH1)}>Why you should do it</h1>
        <div className={css(styles.marketingTextLeft)}>Share hosting access to your listing</div>
        <div className={css(styles.marketingImageRight)}><img src="" /></div>
      </div>

      <div className={css(styles.marketingSection2)}>
        <h1 className={css(styles.marketingSectionH1)}>Why you should do it</h1>
        <div className={css(styles.marketingImageLeft)}><img src="" /></div>
        <div className={css(styles.marketingTextRight)}>Share hosting access to your listing</div>
      </div>

    </div>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  header: {
    background: 'transparent url(/images/hero.jpg) no-repeat center top',
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
  }
});
