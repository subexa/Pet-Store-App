import React, { Component } from 'react';
import { connect } from 'react-redux';

class WishList extends Component {
  render() {
    return (
      <div>
        {this.props.state.wishList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(mapStateToProps)(WishList);
