import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBreedImage } from './actions/actions';
import './BreedImage.css';

class BreedImage extends Component {
  componentDidMount = () => {
    let selectedBreedName = this.props.state.selectedBreed.name;
    if(selectedBreedName !== '') {
      localStorage.setItem('selectedBreedName', JSON.stringify(selectedBreedName))
    }
    else {
      selectedBreedName = JSON.parse(localStorage.getItem('selectedBreedName'));
    }
    this.props.dispatch(fetchBreedImage(selectedBreedName));
  }

  render() {
    console.log(this.props.state)
    const imageUrl = this.props.state.selectedBreed.image;
    return(
      <div className="image-header-container">
        <div className="image-header">{}</div>
        <div className="image-container">
          <img src={imageUrl} className="image" />
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