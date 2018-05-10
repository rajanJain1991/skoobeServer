import React, { Component } from 'react';

import '../styles/search-bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      type: 'rbb'
    };
  }

  changeValue = option => {
    this.setState({ keyword: option.target.value });
  };
  handleClick = value => {
    console.log(value);
    this.setState({ type: value });
  };
  handleExecuteSearch = model => {
    if (this.state.keyword.length > 0) {
      this.props.searchQuery({
        keyword: this.state.keyword,
        type: this.state.type
      });
    }
  };

  _handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (this.state.keyword.length > 0) {
        this.props.searchQuery({
          keyword: this.state.keyword,
          type: this.state.type
        });
      }
    }
  };

  render() {
    let searchPanel = (
      <div className="searchBar z-depth-3">
        <div className="row">
          <div id="nav-logo" className="col offset-s4 m2" />
          <div className="col offset-s2 m8 searchBox">
            <div className="col s9 m11">
              <input
                onChange={this.changeValue}
                value={this.state.keyword}
                style={{ padding: '0 0 0 10px' }}
                onKeyPress={this._handleKeyPress}
                autoFocus
              />
            </div>
            <div className="col s1">
              <a
                className="waves-effect waves-light btn"
                onClick={this.handleExecuteSearch}
              >
                <i className="material-icons">search</i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>
            <input
              name="group1"
              type="radio"
              id="test1"
              onClick={() => this.handleClick('rbr')}
              value="rbr"
            />
            <label htmlFor="test1">Rank by revenue</label>
          </p>
          <p>
            <input
              name="group1"
              type="radio"
              id="test2"
              onClick={() => this.handleClick('rbb')}
              value="rbb"
            />
            <label htmlFor="test2">Rank by bid</label>
          </p>
        </div>
      </div>
    );
    return (
      <div>
        <div>{searchPanel}</div>
      </div>
    );
  }
}

export default SearchBar;
