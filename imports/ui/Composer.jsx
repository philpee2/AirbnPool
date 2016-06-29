import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

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
      <div className="input-composer">
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
      <form className="form-composer" onSubmit={this._onSubmit}>
        <input
          ref={this._setRef}
          className="input-composer"
          autoComplete="off"
          dir="ltr"
          disabled={this.props.disabled}
          type="text"
          name="text"
          placeholder="Type your message"
          onChange={this._onChange}
          value={this.state.text}
        />
        <a className="button-send" href="#" onClick={this._onSendClick}>Send</a>
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
