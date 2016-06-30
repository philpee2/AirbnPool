import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

const propTypes = {
};

class StartForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { text: '' };

    this._onSubmit = this._onSubmit.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.connected !== oldProps.connected && this.props.connected) {
      this._inputNode.focus();
    }
  }

  render() {
    return (
      <form className={css(styles.container)} onSubmit={this._onSubmit}>
        <div className={css(styles.stretchColumn)}>
          <label className={css(styles.label)}>Where next?</label>
          <div className={css(styles.input)}>
            <input className={css(styles.location)} type="text" name="location" placeholder="Tokyo" />
          </div>
        </div>
        <div className={css(styles.column)}>
          <label className={css(styles.label)}>Check in</label>
          <div className={css(styles.input)}>
            <select className={css(styles.checkIn)} name="checkIn" value="July 1">
              <option value="July 1">July 1</option>
              <option value="July 2">July 2</option>
              <option value="July 3">July 3</option>
              <option value="July 4">July 4</option>
              <option value="July 5">July 5</option>
              <option value="July 6">July 6</option>
              <option value="July 7">July 7</option>
            </select>
          </div>
        </div>
        <div className={css(styles.column)}>
          <div className={css(styles.divider)}>/</div>
        </div>
        <div className={css(styles.column)}>
          <label className={css(styles.label)}>Check out</label>
          <div className={css(styles.input)}>
            <select className={css(styles.checkIn)} name="checkOut" value="July 6">
              <option value="July 1">July 1</option>
              <option value="July 2">July 2</option>
              <option value="July 3">July 3</option>
              <option value="July 4">July 4</option>
              <option value="July 5">July 5</option>
              <option value="July 6">July 6</option>
              <option value="July 7">July 7</option>
            </select>
          </div>
        </div>
        <div className={css(styles.column)}>
          <label className={css(styles.label)}>How many beds?</label>
          <div className={css(styles.input)}>
            <select className={css(styles.checkIn)} name="checkOut" value="1 Bed">
              <option value="1 Bed">1 Bed</option>
              <option value="2 Bed">2 Bed</option>
              <option value="3 Bed">3 Bed</option>
              <option value="4 Bed">4 Bed</option>
              <option value="5 Bed">5 Bed</option>
              <option value="6 Bed">6 Bed</option>
              <option value="7 Bed">7 Bed</option>
              <option value="8 Bed">8 Bed</option>
              <option value="9 Bed">9 Bed</option>
              <option value="10 Bed">10 Bed</option>
            </select>
          </div>
        </div>
        <div className={css(styles.column)}>
          <div className={css(styles.input)}>
            <a href="/groups/1" className={css(styles.button)}>Join Pool</a>
          </div>
        </div>
      </form>
    );
  }

  _onSubmit(event) {
    event.preventDefault();
  }

  _onClick(event) {

  }
}

StartForm.propTypes = propTypes;

export default StartForm;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  column: {
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  columnStretch: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    flexGrow: 0,
    textTransform: 'capitalize',
    display: 'block',
  },
  location: {
    flexGrow: 0,
    height: 30,
    margin: 0,
    border: 0,
    outline: 0,
    fontSize: 14,
  },
  button: {
    flexGrow: 0,
    display: 'inline-block',
    position: 'absolute',
    right: 12,
    top: 6,
    color: 'rgb(4, 157, 145)',
    'text-decoration': 'none',
  },
});
