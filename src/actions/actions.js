const API = 'https://dog.ceo/api'

export const fetchBreed = animal => {
  return {
    type: 'FETCH_BREED',
    animal
  }
}

export const fetchAnimalBreed = animal => {
  return function(dispatch) {
    dispatch(fetchBreed(animal));
    return fetch(`${API}/breeds/list/all`)
    .then(response => response.json())
    .then(json => dispatch(receivedBreed(json)))
  }
}

export const receivedBreed = (breeds) => {
  // console.log(Object.keys(breeds.message).map(breed => {console.log(breeds.message[breed])}));
  return {
    type: 'RECEIVED_BREED',
    breeds
  }
}

export const storeBreedName = (breed) => {
  return {
    type: 'STORE_BREED_NAME',
    breed
  }
}

export const fetchImage = (breed) => {
  return {
    type: 'FETCH_BREED_IMAGE',
    breed
  }
}

export const fetchBreedImage = (breedName) => {
  return function(dispatch) {
    dispatch(fetchImage(breedName));
    return fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
    .then(response => response.json())
    .then(json => dispatch(receivedImage(json.message)))
  }
}

export const receivedImage = (image) => {
  return {
    type: 'RECEIVED_IMAGE',
    image
  }
}

export const addToWishList = (name) => {
  return {
    type: 'ADD_TO_WISH_LIST',
    name
  }
}