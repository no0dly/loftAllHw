import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getResult,
  getIsFetching,
  getError
} from "reducers/search.js";
import {
  searchRequest,
  search_success,
  search_failure
} from "components/actions/index.js";
class Search extends Component {
  state = {
    name: ""
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = () => {
    console.log("click");
    const { searchRequest } = this.props;
    console.log(searchRequest(this.state.name));
    searchRequest(this.state.name);
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          placeholder="Название сериала"
          type="text"
        />
        <button onClick={this.handleSubmit}>Найти</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  result: getResult(state),
  error: getError(state)
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Search
);
