import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { fetchShowsRequest } from "../../actions/search";
import {
  getIsFetching,
  getIsFetched,
  getError,
  getShows
} from "../../reducers/search";

class Search extends Component {
  state = {
    inputText: ""
  };
  changeHandler = e => {
    this.setState({ inputText: e.target.value });
  };
  onSearch = () => {
    const { inputText } = this.state;
    const { fetchShowsRequest } = this.props;
    fetchShowsRequest(inputText);
    this.setState({ inputText: "" });
  };
  renderSearch = () => {
    const { isFetching } = this.props;
    const { inputText } = this.state;
    if (!isFetching) {
      return (
        <Field className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Find a repository"
              value={inputText}
              onChange={this.changeHandler}
            />
          </div>
          <div className="control">
            <a onClick={this.onSearch} className="button is-info">
              Search
            </a>
          </div>
        </Field>
      );
    }
  };
  renderLoader = () => {
    const { isFetching } = this.props;
    if (isFetching) {
      return <Warning>Loading...</Warning>;
    }
  };

  renderShows = () => {
    const { isFetched, shows, error } = this.props;
    if (isFetched && shows.length > 0) {
      return shows.map(show => {
        return (
          <div key={show.id} className="column is-3">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={
                      show.image
                        ? show.image.medium
                        : "https://bulma.io/images/placeholders/96x96.png"
                    }
                    alt="poster"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <Link to={`/shows/${show.id}`} className="title is-4">
                      {show.name}
                    </Link>
                  </div>
                </div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: show.summary
                  }}
                />
              </div>
            </div>
          </div>
        );
      });
    } else if (isFetched && shows.length === 0 && error.length === 0) {
      return <p>There is nothing to show.</p>;
    }
  };
  renderError = () => {
    const { error } = this.props;
    if (error || error.length > 0) {
      return <Warning>{error}</Warning>;
    }
  };
  render() {
    return (
      <div>
        {this.renderLoader()}
        {this.renderError()}
        <div className="container is-fluid">
          <div className="columns is-marginless is-centered">
            {this.renderSearch()}
          </div>
          <div className="columns is-multiline is-centered">
            {this.renderShows()}
          </div>
        </div>
      </div>
    );
  }
}
const Field = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Warning = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -10px;
  margin-top: -5px;
`;

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state),
    isFetched: getIsFetched(state),
    error: getError(state),
    shows: getShows(state)
  };
};
const mapDipatchToProps = {
  fetchShowsRequest
};

export default connect(mapStateToProps, mapDipatchToProps)(Search);
