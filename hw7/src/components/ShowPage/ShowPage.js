import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { fetchOneShowRequest } from "../../actions/shows";
import {
  getIsFetching,
  getIsFetched,
  getError,
  getShow
} from "../../reducers/shows";

class ShowPage extends Component {
  componentDidMount() {
    const pageId = this.props.match.params.id;
    const { fetchOneShowRequest } = this.props;
    fetchOneShowRequest(pageId);
  }

  renderLoader = () => {
    const { isFetching } = this.props;
    if (isFetching) {
      return <Loader className="title is-3">Loading...</Loader>;
    }
  };
  renderShow = () => {
    const { isFetched, error, show } = this.props;
    if (isFetched) {
      if (error === null && show.id) {
        return (
          <div className="column is-half is-narrow">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={
                      show.image
                        ? show.image.medium
                        : "https://bulma.io/images/placeholders/96x96.png"
                    }
                    alt="Poster"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{show.name}</p>
                  </div>
                </div>
                <div className="content">
                  <div
                    className="desrc"
                    dangerouslySetInnerHTML={{
                      __html: show.summary
                    }}
                  />
                  <div className="actors columns is-multiline">
                    {this.renderActors()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return <p>There is nothing to show</p>;
      }
    }
  };

  renderActors = () => {
    const { show } = this.props;

    if (show._embedded && show._embedded.cast) {
      return show._embedded.cast.map(actor => {
        return (
          <div key={actor.person.id} className="column is-3">
            <img
              className="image"
              src={actor.person.image.medium}
              alt="Person"
            />
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div className="columns is-centered">
        {this.renderLoader()}
        {this.renderShow()}
        <BackButtom to="/">Back</BackButtom>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state),
    isFetched: getIsFetched(state),
    error: getError(state),
    show: getShow(state)
  };
};
const mapDipatchToProps = {
  fetchOneShowRequest
};

const Loader = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -10px;
  margin-top: -5px;
`;

const BackButtom = styled(Link)`
  position: fixed;
  right: 30px;
  top: 10px;
`;

export default connect(mapStateToProps, mapDipatchToProps)(ShowPage);
