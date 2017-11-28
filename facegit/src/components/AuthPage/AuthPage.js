import React, { Component } from "react";
import { connect } from "react-redux";
import { setToken } from "../../actions/auth";

export class AuthPage extends Component {
  state = {
    queryText: ""
  };
  onChangeHandler = e => {
    this.setState({ queryText: e.target.value });
  };
  onKeyDownHandler = e => {
    const { queryText } = this.state;
    const { setToken } = this.props;
    if (e.keyCode === 13) {
      setToken(queryText);
    }
  };
  render() {
    const { queryText } = this.state;
    return (
      <div className="columns is-centered">
        <div className="column is-4">
          <div className="field">
            <label className="label">Enter your token</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={queryText}
                onChange={this.onChangeHandler}
                onKeyDown={this.onKeyDownHandler}
              />
            </div>
            <p className="help">
              You can get it on github. Push ENTER to submit
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setToken
};

export default connect(null, mapDispatchToProps)(AuthPage);
