import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBreedImage, addToWishList } from './actions/actions';
import AppHeader from './AppHeader';
import './BreedImage.css';

class BreedImage extends Component {
  componentDidMount = () => {
    this.selectedBreedName = this.props.state.selectedBreed.name;
    if(this.selectedBreedName !== '') {
      localStorage.setItem('selectedBreedName', JSON.stringify(this.selectedBreedName))
    }
    else {
      this.selectedBreedName = JSON.parse(localStorage.getItem('selectedBreedName'));
    }
    this.props.dispatch(fetchBreedImage(this.selectedBreedName));
  }

  render() {
    const imageUrl = this.props.state.selectedBreed.image;
    console.log(imageUrl)
    return(
      <div>
        <AppHeader />
        <div className="image-header-container">
          <div className="image-header">{`${this.selectedBreedName}`}</div>
          <div className="image-container">
            {imageUrl ? <img src={imageUrl} className="image" /> : <Loader />}
          </div>
          <button onClick={() => this.props.dispatch(addToWishList(this.selectedBreedName))}>
            Wish To Adopt
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(mapStateToProps)(BreedImage);

class Loader extends Component {
  render() {
    return <div className="loader" />
  }
}