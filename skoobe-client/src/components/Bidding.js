import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchSortedBidders } from '../actions/index';
import { bindActionCreators } from 'redux';

class Bidding extends Component {
  constructor(props) {
    super(props);
  }

  fetchBidders = ({ keyword, type }) => {
    this.props.fetchSortedBidders(keyword, type);
  };

  renderBidderList = () => {
    let list = [];

    if (this.props.bidders) {
      this.props.bidders.forEach(bidder => {
        list.push(
          <tr key={bidder.bidderName}>
            <td>{bidder.bidderName}</td>
            <td>{bidder.amount}</td>
            <td>{bidder.keyword}</td>
          </tr>
        );
      });
    }
    return list;
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar searchQuery={this.fetchBidders} />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Bidding Amount</th>
                <th>Keyword</th>
              </tr>
            </thead>
            <tbody>{this.renderBidderList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bidders: state.biddersReducer.bidders,
    loading: state.biddersReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSortedBidders
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Bidding);
