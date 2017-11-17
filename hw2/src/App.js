import React, { Component } from "react";
import uuid from "uuid";

import NewsPost from "./NewsPost";

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };
  handleChange = (e) => {
    this.setState({
      newsInput: e.target.value
    });
  }
  handleKeyDown = (e) => {
    const { news, newsInput } = this.state;
    let newNews = {};
    if (e.keyCode === 13) {
      newNews = {
        text: newsInput
        // uuid()
      };
      this.setState({
        newsInput: "",
        news: [...news, newNews]
      });
    }
  }

  renderPosts() {
    const { news } = this.state;
    return news.map(post => {
      return <NewsPost text={post.text} key={uuid()} />;
    });
  }
  render() {
    const { newsInput } = this.state;
    return (
      <div className="App">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="field">
              <label className="label">News title</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  type="text"
                  value={newsInput}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                  className="input is-success"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-newspaper-o" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-check" />
                </span>
              </div>
              <p className="help is-success">Enter news</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {this.renderPosts()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
