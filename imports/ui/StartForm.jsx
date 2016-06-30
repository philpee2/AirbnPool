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
      <div className={css(styles.wrapper)}>
        <form className={css(styles.container)} onSubmit={this._onSubmit}>
          <div className={css(styles.column)}>
            <label className={css(styles.label)}>Where next?</label>
            <div className={css(styles.input)}>
              <input
                ref={this._setLocationRef}
                className={css(styles.location)}
                type="text"
                name="location"
                placeholder="Tokyo"
              />
            </div>
          </div>
          <div className={css(styles.column)}>
            <label className={css(styles.label)}>Check in</label>
            <div className={css(styles.input)}>
              <select className={css(styles.select, styles.checkIn)} name="checkIn">
                <option value="July 1" selected>July 1</option>
                <option value="July 2">July 2</option>
                <option value="July 3">July 3</option>
                <option value="July 4">July 4</option>
                <option value="July 5">July 5</option>
                <option value="July 6">July 6</option>
                <option value="July 7">July 7</option>
              </select>
            </div>
          </div>
          <div className={css(styles.column, styles.divider)}><div>/</div></div>
          <div className={css(styles.column)}>
            <label className={css(styles.label)}>Check out</label>
            <div className={css(styles.input)}>
              <select className={css(styles.select, styles.checkOut)} name="checkOut">
                <option value="July 1" selected>July 1</option>
                <option value="July 2">July 2</option>
                <option value="July 3">July 3</option>
                <option value="July 4">July 4</option>
                <option value="July 5">July 5</option>
                <option value="July 6">July 6</option>
                <option value="July 7">July 7</option>
              </select>
            </div>
          </div>
          <div className={css(styles.column, styles.lpad)}>
            <label className={css(styles.label)}>How many beds?</label>
            <div className={css(styles.input)}>
              <select
                className={css(styles.select, styles.numBeds)}
                name="checkOut"
                value={numBeds}
                onChange={this._onChangeNumBeds}
              >
                <option value={1} selected>1 Bed</option>
                <option value={2}>2 Beds</option>
                <option value={3}>3 Beds</option>
                <option value={4}>4 Beds</option>
                <option value={5}>5 Beds</option>
                <option value={6}>6 Beds</option>
              </select>
            </div>
          </div>
          <div className={css(styles.column, styles.lpad, styles.tpad)}>
            <div className={css(styles.input)}>
              <input type="submit" className={css(styles.button)} value="Join Pool" />
            </div>
          </div>
        </form>
      </div>
    );
  }

  _setLocationRef(ref) {
    this._locationNode = ref && findDOMNode(ref);
    this._locationNode && this._locationNode.focus();
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
  wrapper: {
    width: '100%',
    minWidth: 1060,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    position: 'relative',
    padding: '0 120px',
    width: 1300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 124,
  },
  column: {
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: '0 6px',
  },
  lpad: {
    paddingLeft: 50,
  },
  tpad: {
    paddingTop: 20,
  },
  divider: {
    justifyContent: 'center',
    height: 100,
    margin: '0 26px',
    fontSize: 26,
    color: 'rgba(72, 72, 72, 0.3)',
    paddingTop: 20,
  },
  label: {
    flexGrow: 0,
    textTransform: 'uppercase',
    display: 'block',
    fontFamily: 'Circular Bold',
    color: 'rgb(72, 72, 72)',
    fontSize: 13,
    whiteSpace: 'nowrap',
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 60,
  },
  select: {
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 300,
    color: 'rgb(136, 136, 136)',
  },
  location: {
    flexGrow: 0,
    height: 30,
    margin: 0,
    border: 0,
    outline: 0,
    fontSize: 22,
    fontWeight: 300,
    color: 'rgb(136, 136, 136)',
  },
  button: {
    flexGrow: 0,
    display: 'inline-block',
    color: 'white',
    backgroundColor: 'rgb(255, 88, 91)',
    textDecoration: 'none',
    border: 0,
    borderRadius: 64,
    fontSize: 18,
    fontWeight: 300,
    width: 126,
    height: 48,
    textAlign: 'center',
    cursor: 'pointer',
    outline: 'none',
  },
});
