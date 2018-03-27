import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import AppHeader from './AppHeader';
import { fetchAnimalBreed } from './actions/actions';
import { storeBreedName } from './actions/actions';
import './SelectBreed.css';

class SelectAnimal extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchAnimalBreed());
  };

  render() {
    const breedList = this.props.state.breedList;
    return (
      <div>
        <AppHeader />
        <div className="breed-list-container">
          {breedList.map((breed, index) => (
            <Link
              to="/details"
              key={index}
              className="breed"
              onClick={() => this.props.dispatch(storeBreedName(breed))}
            >
              <RaisedButton>{breed}</RaisedButton>
            </Link>
          ))}
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

export default connect(mapStateToProps)(SelectAnimal);
