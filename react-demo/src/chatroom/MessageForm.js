import React, { Component } from 'react';

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = { hasMessage: true };
    this.onSubmit = this.submitMessage.bind(this);
  }

  submitMessage(e) {
    e.preventDefault()

    if (!this.messageInput.value) {
      this.setState({ hasMessage: false });
    } else {
      this.setState({ hasMessage: true });
      this.props.messageSubmitted(this.messageInput.value);
      this.messageInput.value = '';
    }
  }

  render() {
    <div className="column is-half is-offset-one-quarter">
      Enter a handle.
      <div className="field">
        <label htmlFor="message" className="label">Message</label>
        <div className="control">
          <input type="text" className="input" placeholder="Message" name="message" ref={ el => this.messageInput = el } />
          <div className="is-danger">
            { this.state.hasMessage ? '' : 'Enter a message!' }
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="button" className="button is-primary" onClick={this.onUserMessageEntered}>Submit</button>
        </div>
      </div>
    </div>
  }
}
