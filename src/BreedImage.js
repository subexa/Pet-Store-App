import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchBreedImage, addToWishList } from './actions/actions';
import { setItemsToLocalStorage, getItemsFromLocalStorage } from './util';
import AppHeader from './AppHeader';
import './BreedImage.css';

class BreedImage extends Component {
  componentDidMount = () => {
    this.selectedBreedName = this.props.state.selectedBreed.name;
    if (this.selectedBreedName !== '') {
      setItemsToLocalStorage('selectedBreedName', this.selectedBreedName);
    } else {
      this.selectedBreedName = getItemsFromLocalStorage('selectedBreedName');
    }
    this.props.dispatch(fetchBreedImage(this.selectedBreedName));
  };

  render() {
    console.log(this.props.state.wishList);
    const imageUrl = this.props.state.selectedBreed.image;
    return (
      <div>
        <AppHeader />
        <div className="card-container">
          <Card
            containerStyle={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#B2DFDB'
            }}
          >
            <CardHeader
              title={`${
                this.selectedBreedName ? this.selectedBreedName : ''
              }`.toUpperCase()}
              titleStyle={{ color: 'green', marginRight: -90 }}
            />
            <CardMedia
              mediaStyle={{ width: 250 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 10
              }}
            >
              {imageUrl ? (
                <img
                  alt="dog"
                  style={{ width: 250, height: 250 }}
                  src={imageUrl}
                  className="image"
                />
              ) : (
                <Loader />
              )}
            </CardMedia>
            <div className="add-to-wishlist-button">
              <RaisedButton
                label="Wish To Adopt"
                style={{ width: 200 }}
                backgroundColor="#80CBC4"
                labelColor="#FFF"
                onClick={() =>
                  this.props.dispatch(addToWishList(this.selectedBreedName))
                }
              />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(mapStateToProps)(BreedImage);

class Loader extends Component {
  render() {
    return <div className="loader" />;
  }
}
