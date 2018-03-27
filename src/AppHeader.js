import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <div className="header-title">
        <AppBar
          style={{ background: '#80CBC4' }}
          title={<span>Adopt A Fluffy Member To Your Family!</span>}
          iconElementRight={
            <Link to="/wishlist">
              <FlatButton
                label="WishList"
                labelStyle={{ color: '#FFF', fontSize: 17 }}
              />
            </Link>
          }
        />
      </div>
    );
  }
}

export default AppHeader;
