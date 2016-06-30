import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

const propTypes = {
};

class StartForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      numBeds: 1,
    };

    this._onSubmit = this._onSubmit.bind(this);
    this._onChangeNumBeds = this._onChangeNumBeds.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.connected !== oldProps.connected && this.props.connected) {
      this._inputNode.focus();
    }
  }

  render() {
    const { numBeds } = this.state;
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
            <select
              className={css(styles.checkIn)}
              name="checkOut"
              value={numBeds}
              onChange={this._onChangeNumBeds}
            >
              <option value={1}>1 Bed</option>
              <option value={2}>2 Beds</option>
              <option value={3}>3 Beds</option>
              <option value={4}>4 Beds</option>
              <option value={5}>5 Beds</option>
              <option value={6}>6 Beds</option>
            </select>
          </div>
        </div>
        <div className={css(styles.column)}>
          <div className={css(styles.input)}>
            <input type="submit" className={css(styles.button)} value="Join Pool" />
          </div>
        </div>
      </form>
    );
  }

  _onChangeNumBeds(event) {
    this.setState({ numBeds: Number(event.target.value) });
  }

  _onSubmit(event) {
    event.preventDefault();

    const groupId = '1';

    this.props.submitForm(groupId, this.state.numBeds);
    this.context.router.push(`/groups/${groupId}`);
  }
}

StartForm.propTypes = propTypes;
StartForm.contextTypes = {
  router: PropTypes.object,
};

export default createContainer((props) => {
  const userId = Meteor.userId();
  return {
    submitForm: (groupId, numBeds) => Meteor.call('userGroups.joinGroup', userId, groupId, numBeds),
  };
}, StartForm);

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
