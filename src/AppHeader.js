import React, { Component } from 'react';

import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return(
      <div className="header-container">
        <div className="header-title">
          Adopt A Fluffy Member To Your Family!
        </div>
        <div className="wish-list">WishList</div>
      </div>
    );
  }
}

export default AppHeader;