import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

const propTypes = {
  connected: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  sending: PropTypes.bool,
  error: PropTypes.string
};

class Composer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { text: '' };

    this._setRef = this._setRef.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onSendClick = this._onSendClick.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.connected !== oldProps.connected && this.props.connected) {
      this._inputNode.focus();
    }
  }

  render() {
    const { connected, loading, error } = this.props;
    return (
      <div className={css(styles.container)}>
        {!connected || loading || error ? this.renderStatus() : this.renderInput()}
      </div>
    );
  }

  renderStatus() {
    if (this.props.error) {
      return <span className="error">{this.props.error}</span>;
    }

    if (!this.props.connected) {
      return <span className="status">Connecting...</span>;
    }
  }

  renderInput() {
    return (
      <form className={css(styles.form)} onSubmit={this._onSubmit}>
        <textarea
          ref={this._setRef}
          className={css(styles.input)}
          autoComplete="off"
          dir="ltr"
          disabled={this.props.disabled}
          type="text"
          name="text"
          placeholder="Type your message"
          onChange={this._onChange}
          value={this.state.text}
        />
        <a
          className={css(styles.button)}
          href="#"
          onClick={this._onSendClick}>
          Send
        </a>
      </form>
    );
  }

  _setRef(ref) {
    this._inputNode = ref && findDOMNode(ref);
    this._inputNode && this._inputNode.focus();
  }

  _onSubmit(event) {
    event.preventDefault();
    this._send();
  }

  _onChange({ currentTarget: { value: text }}) {
    this.setState({ text });
  }

  _onSendClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this._send();
  }

  _send() {
    const { sending, sendMessage } = this.props;
    const value = this.getValue();

    if (!sending && value.length > 0) {
      sendMessage(this.getValue());
      this.setState({ text: '' });
      this._inputNode.focus();
    }
  }

  getValue() {
    return this._inputNode.value;
  }
}

Composer.propTypes = propTypes;

export default Composer;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: '0 10px',
  },
  form: {

  },
  input: {
    width: '90%',
    height: 50,
    resize: 'none',
    // padding: '0 40px 0 0',
    margin: 0,
    border: 0,
    outline: 0,
    'font-size': 14,
  },
  button: {
    display: 'inline-block',
    position: 'absolute',
    right: 12,
    top: 6,
    color: 'rgb(4, 157, 145)',
    'text-decoration': 'none',
  }
});
