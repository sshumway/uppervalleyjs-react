import React, { Component } from 'react';
import Warning from '../shared/Warning';

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = { hasMessage: true };
    this.onSubmit = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.messageInput.focus();
  }

  submitMessage(e) {
    e.preventDefault()

    if (!this.messageInput.value) {
      this.setState({ hasMessage: false });
    } else {
      this.setState({ hasMessage: true });
      this.props.onSubmitMessage(this.messageInput.value);
      this.messageInput.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <label htmlFor="message" className="label">Message</label>
          <div className="control">
            <input type="text" className="input" placeholder="Message" name="message" ref={ el => this.messageInput = el } />
            { this.state.hasMessage ? '' : <Warning warning='Enter a message!' /> }
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default MessageForm;
