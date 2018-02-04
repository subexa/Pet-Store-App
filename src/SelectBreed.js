import React, { Component } from 'react';
import { fetchAnimalBreed } from './actions/actions';
import { connect } from 'react-redux';

class SelectAnimal extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchAnimalBreed());
  }

  render() {
    const breedList = this.props.state.breedList;
    return(
      <div>
        <div>
          Adopt A Dog!
        </div>
        <div className="breed-list">
          {breedList.map((breed,index) =>
            <div key={index}>
              {breed}
            </div>
          )}
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

export default connect(mapStateToProps)(SelectAnimal);